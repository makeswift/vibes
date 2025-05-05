import { CopyButton } from '@/components/ui/copy-button';
import { Brand } from '@/vibes/schema';

interface Color {
  name: string;
  value: string;
}

export function Colors({ colors }: { colors: Color[] }) {
  return (
    <div className="grid grid-cols-2 gap-x-3 gap-y-3.5 sm:grid-cols-4 sm:gap-x-2 sm:gap-y-5 md:grid-cols-5">
      {colors.map((color, index) => {
        return (
          <div className="group" key={index}>
            <div
              className="ring-foreground/15 mb-2 h-12 w-full ring-1 ring-inset"
              style={{ backgroundColor: color.value }}
            />
            <div className="relative">
              <div className="text-foreground font-mono text-xs leading-tight">{color.name}</div>
              <div className="text-contrast-400 text-xs">{color.value}</div>
              <CopyButton
                className="!absolute -top-1 right-0 translate-y-2 opacity-0 transition-all duration-150 group-hover:translate-y-0 group-hover:opacity-100"
                clipboard={color.value}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

const brandColors = ['--primary', '--accent', '--success', '--warning', '--error'] as const;

const neutralColors = [
  '--foreground',
  '--contrast-100',
  '--contrast-200',
  '--contrast-300',
  '--contrast-400',
  '--contrast-500',
  '--background',
] as const;

export function BrandColors({ brands, brandName }: { brands: Brand[]; brandName: string }) {
  const brand = brands.find((b) => b.name === brandName);

  if (!brand) return <div>Brand: {brandName} not found</div>;

  return (
    <>
      <h3 className="!mt-6" id="brand">
        Brand
      </h3>
      <Colors
        colors={brandColors.map((name) => ({
          name: name.replace('--', ''),
          value: brand.cssVars[name],
        }))}
      />
      <h3 id="neutrals">Neutrals</h3>
      <Colors
        colors={neutralColors.map((name) => ({
          name: name.replace('--', ''),
          value: brand.cssVars[name],
        }))}
      />
    </>
  );
}
