import { Brand } from '@/vibes/schema';

interface Props {
  brands: Brand[];
  brandName: string;
}

const sizes = [
  { variable: '--font-size-xs', fontSize: '0.75rem', lineHeight: '160%' },
  { variable: '--font-size-sm', fontSize: '0.875rem', lineHeight: '160%' },
  { variable: '--font-size-base', fontSize: '1rem', lineHeight: '160%' },
  { variable: '--font-size-lg', fontSize: '1.125rem', lineHeight: '150%' },
  { variable: '--font-size-xl', fontSize: '1.25rem', lineHeight: '150%' },
  { variable: '--font-size-2xl', fontSize: '1.5rem', lineHeight: '150%' },
  { variable: '--font-size-3xl', fontSize: '1.875rem', lineHeight: '140%' },
  { variable: '--font-size-4xl', fontSize: '2.25rem', lineHeight: '140%' },
  { variable: '--font-size-5xl', fontSize: '3rem', lineHeight: '130%' },
  { variable: '--font-size-6xl', fontSize: '3.75rem', lineHeight: '130%' },
  { variable: '--font-size-7xl', fontSize: '4.5rem', lineHeight: '120%' },
  { variable: '--font-size-8xl', fontSize: '6rem', lineHeight: '120%' },
  { variable: '--font-size-9xl', fontSize: '8rem', lineHeight: '115%' },
] as const;

export function BrandTypography({ brands, brandName }: Props) {
  const brand = brands.find((b) => b.name === brandName);

  if (!brand) return <div>Brand: {brandName} not found</div>;

  return (
    <div
      className="mt-6 space-y-5"
      style={sizes.reduce((acc, size) => ({
        ...acc,
        [size.variable]: brand.cssVars[size.variable] ?? size.fontSize,
      }))}
    >
      {sizes.map((size, index) => {
        return (
          <div key={index}>
            <div
              className="mb-1 truncate text-foreground"
              style={{
                fontSize:
                  brand.cssVars[size.variable] != null ? `var(${size.variable})` : size.fontSize,
                lineHeight: size.lineHeight,
              }}
            >
              The quick brown fox jumps over the lazy dog.
            </div>
            <div className="font-mono text-xs text-contrast-500">
              <span className="rounded bg-contrast-100 px-1 py-0.5">
                {size.variable.replace('--font-size', 'text')}
              </span>
              <span className="ml-2 text-contrast-400">
                {brand.cssVars[size.variable] ?? size.fontSize}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
