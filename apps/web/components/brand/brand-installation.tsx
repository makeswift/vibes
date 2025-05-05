import localFont from 'next/font/local';

import { CodeBlock } from '@/components/ui/code-block';
import { Reveal } from '@/components/ui/reveal';
import { Brand, CSSVars } from '@/vibes/schema';

import { Step, Steps } from '../ui/steps';

export type Font =
  | {
      type: 'google';
      name: string;
      options: NonNullable<Record<string, unknown>>;
    }
  | {
      type: 'local';
      name: string;
      options: Parameters<typeof localFont>[0];
    };

interface Props {
  brands: Brand[];
  brandName: string;
  fonts: {
    body: Font;
    heading?: Font;
    mono?: Font;
  };
}

function getVariableCode(cssVars: CSSVars) {
  return `@layer base {\n  :root {\n${Object.entries(cssVars)
    .filter(([name]) => !name.startsWith('--font-family'))
    .map(([name, value]) => `    ${name}: ${value};`)
    .join(
      '\n',
    )}\n  }\n\n  button:not(:disabled),\n  [role="button"]:not(:disabled) {\n    cursor: pointer;\n  }\n}`;
}

function removeDuplicatesByName<T extends { name: string }>(items: T[]): T[] {
  const uniqueItems = new Map<string, T>();

  for (const item of items) {
    if (!uniqueItems.has(item.name)) {
      uniqueItems.set(item.name, item);
    }
  }

  return Array.from(uniqueItems.values());
}

function getLayoutCode(fonts: Props['fonts']) {
  let layoutCode = '';

  // Filter fonts by type
  const localFonts = Object.values(fonts).filter((f) => f.type === 'local');
  const googleFonts = Object.values(fonts).filter((f) => f.type === 'google');

  // Remove duplicates from googleFonts to avoid duplicate imports
  const uniqueGoogleFonts = removeDuplicatesByName(googleFonts);

  // Remove duplicates from localFonts to avoid duplicate imports
  const uniqueLocalFonts = removeDuplicatesByName(localFonts);

  // Add google fonts to layout code
  if (uniqueGoogleFonts.length > 0)
    layoutCode += `import { ${uniqueGoogleFonts.map((f) => f.name.replace(/\s+/g, '_')).join(', ')} } from 'next/font/google'\n`;

  // Add local fonts to layout code
  if (uniqueLocalFonts.length > 0) layoutCode += `import localFont from 'next/font/local'\n`;

  // Import globals.css
  layoutCode += `\nimport './globals.css'\n`;

  // Generate font declarations
  const fontDeclarations = Object.entries(fonts)
    .map(([type, font]) => {
      function getFontOptions() {
        return JSON.stringify(
          { ...font.options, variable: `--font-family-${type}` },
          null,
          2,
        ).replace(/"([^"]+)":/g, '$1:');
      }

      switch (font.type) {
        case 'google':
          return `const ${type} = ${font.name.replace(/\s+/g, '_')}(${getFontOptions()})`;
        case 'local':
          return `const ${font.name.toLowerCase().replace(/\s+/g, '_')} = localFont(${getFontOptions()})`;
      }
    })
    .join('\n\n');

  // Add font declarations to layout code
  layoutCode += `\n${fontDeclarations}`;

  // Add next lines of code to layout code
  layoutCode += `\n\nexport default function RootLayout({ children }: { children: React.ReactNode }) {\n  return (\n    <html lang="en">`;

  // Generate font variables
  const fontVariables = Object.entries(fonts)
    .map(([type]) => {
      const varName = type.toLowerCase().replace(/\s+/g, '_');
      return '${' + varName + '.variable}';
    })
    .join(' ');

  // Add font variables to layout code
  layoutCode += `\n      <body className={\`${fontVariables}\`}>{children}</body>`;

  // Add closing tags to layout code
  layoutCode += `\n    </html> \n  );\n};`;

  return layoutCode;
}

export function BrandInstallation({ brands, brandName, fonts }: Props) {
  const brand = brands.find((b) => b.name === brandName);

  if (!brand) return <div>Brand: {brandName} not found</div>;

  return (
    <>
      <Steps>
        <Step>
          <h3 id="add-css-variables">Add CSS variables</h3>
          <p>
            Copy and paste the following variables into your <code>globals.css</code> file.
          </p>
          <Reveal>
            <CodeBlock>{getVariableCode(brand.cssVars)}</CodeBlock>
          </Reveal>
        </Step>
        <Step>
          <h3 id="install-fonts">Install fonts</h3>
          <p>
            Copy and paste the following code into your root <code>layout.tsx</code> file.
          </p>
          <Reveal>
            <CodeBlock>{getLayoutCode(fonts)}</CodeBlock>
          </Reveal>
        </Step>
      </Steps>
    </>
  );
}
