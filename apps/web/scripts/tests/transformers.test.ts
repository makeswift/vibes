// __tests__/transformers.test.ts
import { type API, type FileInfo } from 'jscodeshift';
import jscodeshift from 'jscodeshift';

// Import your transformers
import arbitraryCssTransform from '../transforms/arbitrary-css-variables';
import renamedUtilitiesTransform from '../transforms/renamed-utilities';
import spacingScaleTransform from '../transforms/space-scaling';

// Test helper to run transformer on code
function runTransform(transformer: (file: FileInfo, api: API) => string, source: string): string {
  const fileInfo: FileInfo = {
    path: 'test.tsx',
    source,
  };

  const api: API = {
    jscodeshift: jscodeshift.withParser('tsx'),
    j: jscodeshift.withParser('tsx'),
    stats: () => ({ ok: 0, error: 0, skip: 0, total: 0 }),
    report: () => undefined,
  };

  return transformer(fileInfo, api);
}

describe('Renamed Utilities Transformer', () => {
  it('should transform shadow-xs to shadow-sm', () => {
    const input = `<div className="shadow-xs border" />`;
    const expected = `<div className="shadow-sm border" />`;
    const result = runTransform(renamedUtilitiesTransform, input);
    expect(result).toBe(expected);
  });

  it('should transform shadow-sm to shadow', () => {
    const input = `<div className="shadow-sm" />`;
    const expected = `<div className="shadow" />`;
    const result = runTransform(renamedUtilitiesTransform, input);
    expect(result).toBe(expected);
  });

  it('should handle modifiers correctly', () => {
    const input = `<div className="hover:shadow-xs focus:outline-hidden" />`;
    const expected = `<div className="hover:shadow-sm focus:outline-none" />`;
    const result = runTransform(renamedUtilitiesTransform, input);
    expect(result).toBe(expected);
  });

  it('should work in template literals', () => {
    const input = `<div className={\`shadow-xs \${isActive ? 'shadow-sm' : ''}\`} />`;
    const expected = `<div className={\`shadow-sm \${isActive ? "shadow" : ''}\`} />`;
    const result = runTransform(renamedUtilitiesTransform, input);
    expect(result).toBe(expected);
  });

  it('should work in function calls like cn()', () => {
    const input = `<div className={cn('shadow-xs', 'outline-hidden')} />`;
    const expected = `<div className={cn("shadow-sm", "outline-none")} />`;
    const result = runTransform(renamedUtilitiesTransform, input);
    expect(result).toBe(expected);
  });

  it('should leave non-matching classes unchanged', () => {
    const input = `<div className="bg-blue-500 text-white shadow-lg" />`;
    const result = runTransform(renamedUtilitiesTransform, input);
    expect(result).toBe(input);
  });
});

describe('Arbitrary CSS Variables Transformer', () => {
  it('should transform simple arbitrary CSS variables', () => {
    const input = `<div className="bg-(var(--primary))" />`;
    const expected = `<div className="bg-[var(--primary)]" />`;
    const result = runTransform(arbitraryCssTransform, input);
    expect(result).toBe(expected);
  });

  it('should handle complex nested CSS functions', () => {
    const input = `<div className="text-(--alert-description-text,color-mix(in_oklab,var(--foreground)_50%,transparent))" />`;
    const expected = `<div className="text-[--alert-description-text,color-mix(in_oklab,var(--foreground)_50%,transparent)]" />`;
    const result = runTransform(arbitraryCssTransform, input);
    expect(result).toBe(expected);
  });

  it('should handle multiple arbitrary values in one className', () => {
    const input = `<div className="bg-(var(--primary)) text-(var(--text-color))" />`;
    const expected = `<div className="bg-[var(--primary)] text-[var(--text-color)]" />`;
    const result = runTransform(arbitraryCssTransform, input);
    expect(result).toBe(expected);
  });

  it('should work with modifiers', () => {
    const input = `<div className="hover:bg-(var(--primary-hover))" />`;
    const expected = `<div className="hover:bg-[var(--primary-hover)]" />`;
    const result = runTransform(arbitraryCssTransform, input);
    expect(result).toBe(expected);
  });

  it('should handle deeply nested parentheses', () => {
    const input = `<div className="bg-(color-mix(in_srgb,hsl(var(--primary)),rgba(255,255,255,0.1)))" />`;
    const expected = `<div className="bg-[color-mix(in_srgb,hsl(var(--primary)),rgba(255,255,255,0.1))]" />`;
    const result = runTransform(arbitraryCssTransform, input);
    expect(result).toBe(expected);
  });

  it('should leave regular classes unchanged', () => {
    const input = `<div className="bg-blue-500 text-white" />`;
    const result = runTransform(arbitraryCssTransform, input);
    expect(result).toBe(input);
  });
});

describe('Spacing Scale Transformer', () => {
  it('should transform unsupported spacing values to arbitrary values', () => {
    const input = `<div className="mt-13" />`;
    const expected = `<div className="mt-[3.25rem]" />`;
    const result = runTransform(spacingScaleTransform, input);
    expect(result).toBe(expected);
  });

  it('should handle multiple spacing utilities', () => {
    const input = `<div className="mt-15 p-22 w-25" />`;
    const expected = `<div className="mt-[3.75rem] p-[5.5rem] w-[6.25rem]" />`;
    const result = runTransform(spacingScaleTransform, input);
    expect(result).toBe(expected);
  });

  it('should preserve supported spacing values', () => {
    const input = `<div className="mt-12 p-8 w-64 h-px" />`;
    const result = runTransform(spacingScaleTransform, input);
    expect(result).toBe(input);
  });

  it('should handle modifiers correctly', () => {
    const input = `<div className="hover:mt-13 sm:p-17" />`;
    const expected = `<div className="hover:mt-[3.25rem] sm:p-[4.25rem]" />`;
    const result = runTransform(spacingScaleTransform, input);
    expect(result).toBe(expected);
  });

  it('should handle different spacing utility types', () => {
    const input = `<div className="mx-15 gap-y-18 space-x-21" />`;
    const expected = `<div className="mx-[3.75rem] gap-y-[4.5rem] space-x-[5.25rem]" />`;
    const result = runTransform(spacingScaleTransform, input);
    expect(result).toBe(expected);
  });

  it('should preserve px values', () => {
    const input = `<div className="mt-px p-px border-px" />`;
    const result = runTransform(spacingScaleTransform, input);
    expect(result).toBe(input);
  });

  it('should handle decimal values', () => {
    const input = `<div className="mt-2.5 p-3.5" />`;
    const result = runTransform(spacingScaleTransform, input);
    expect(result).toBe(input); // These are supported in Tailwind 3
  });

  it('should transform unsupported decimal values', () => {
    const input = `<div className="mt-13.5" />`;
    const expected = `<div className="mt-[3.375rem]" />`;
    const result = runTransform(spacingScaleTransform, input);
    expect(result).toBe(expected);
  });

  it('should leave non-numeric values unchanged', () => {
    const input = `<div className="w-auto h-full min-w-fit" />`;
    const result = runTransform(spacingScaleTransform, input);
    expect(result).toBe(input);
  });
});

describe('Integration Tests', () => {
  it('should handle mixed transformer scenarios', () => {
    const input = `
      <div className="shadow-xs mt-13 bg-(var(--primary))">
        <span className="outline-hidden p-15 text-(var(--text))">
          Hello World
        </span>
      </div>
    `;

    // Test each transformer individually
    let result = runTransform(renamedUtilitiesTransform, input);
    result = runTransform(spacingScaleTransform, result);
    result = runTransform(arbitraryCssTransform, result);

    expect(result).toContain('shadow-sm'); // Renamed utilities
    expect(result).toContain('mt-[3.25rem]'); // Spacing scale
    expect(result).toContain('p-[3.75rem]'); // Spacing scale
    expect(result).toContain('bg-[var(--primary)]'); // Arbitrary CSS
    expect(result).toContain('text-[var(--text)]'); // Arbitrary CSS
    expect(result).toContain('outline-none'); // Renamed utilities
  });

  it('should handle complex real-world component', () => {
    const input = `
      function Button({ variant, size }) {
        return (
          <button className={cn(
            'shadow-xs outline-hidden',
            'px-15 py-13',
            'bg-(var(--button-primary)) text-(var(--button-text))',
            variant === 'secondary' && 'shadow-sm bg-(var(--button-secondary))',
            size === 'large' && 'px-22 py-18'
          )}>
            Click me
          </button>
        );
      }
    `;

    // Apply all transformers
    let result = runTransform(renamedUtilitiesTransform, input);
    result = runTransform(spacingScaleTransform, result);
    result = runTransform(arbitraryCssTransform, result);

    expect(result).toContain('shadow-sm'); // shadow-xs → shadow-sm
    expect(result).toContain('outline-none'); // outline-hidden → outline-none
    expect(result).toContain('px-[3.75rem]'); // px-15 → px-[3.75rem]
    expect(result).toContain('py-[3.25rem]'); // py-13 → py-[3.25rem]
    expect(result).toContain('bg-[var(--button-primary)]'); // bg-(var(...)) → bg-[var(...)]
    expect(result).toContain('text-[var(--button-text)]'); // text-(var(...)) → text-[var(...)]
    expect(result).toContain('shadow'); // shadow-sm → shadow
    expect(result).toContain('bg-[var(--button-secondary)]'); // bg-(var(...)) → bg-[var(...)]
    expect(result).toContain('px-[5.5rem]'); // px-22 → px-[5.5rem]
    expect(result).toContain('py-[4.5rem]'); // py-18 → py-[4.5rem]
  });
});

describe('Edge Cases', () => {
  it('should handle empty className', () => {
    const input = `<div className="" />`;

    expect(runTransform(renamedUtilitiesTransform, input)).toBe(input);
    expect(runTransform(arbitraryCssTransform, input)).toBe(input);
    expect(runTransform(spacingScaleTransform, input)).toBe(input);
  });

  it('should handle className with only whitespace', () => {
    const input = `<div className="   " />`;

    expect(runTransform(renamedUtilitiesTransform, input)).toBe(input);
    expect(runTransform(arbitraryCssTransform, input)).toBe(input);
    expect(runTransform(spacingScaleTransform, input)).toBe(input);
  });

  it('should handle malformed arbitrary CSS (unbalanced parentheses)', () => {
    const input = `<div className="bg-(var(--primary" />`;
    const result = runTransform(arbitraryCssTransform, input);
    expect(result).toBe(input); // Should remain unchanged
  });

  it('should handle negative spacing values', () => {
    const input = `<div className="-mt-13 -ml-15" />`;
    const expected = `<div className="-mt-[3.25rem] -ml-[3.75rem]" />`;
    const result = runTransform(spacingScaleTransform, input);
    expect(result).toBe(expected);
  });

  it('should handle very large spacing values', () => {
    const input = `<div className="mt-100 p-250" />`;
    const expected = `<div className="mt-[25rem] p-[62.5rem]" />`;
    const result = runTransform(spacingScaleTransform, input);
    expect(result).toBe(expected);
  });
});
