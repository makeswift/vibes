import color from 'color'

import { CopyButton } from '@/components/ui/copy-button'
import { Brand, Vibe } from '@/vibes/schema'

interface Color {
  name: string
  value: string
}

export function Colors({ colors }: { colors: Color[] }) {
  return (
    <div className="grid grid-cols-2 gap-x-3 gap-y-3.5 sm:grid-cols-4 sm:gap-x-2 sm:gap-y-5 md:grid-cols-5">
      {colors?.map((color, index) => {
        return (
          <div key={index} className="group">
            <div
              className="mb-2 h-12 w-full ring-1 ring-inset ring-foreground/15"
              style={{ backgroundColor: `${color.value}` }}
            />
            <div className="relative">
              <div className="font-mono text-xs leading-tight text-foreground">{color.name}</div>
              <div className="text-xs text-contrast-400">{color.value}</div>
              <CopyButton
                className="!absolute -top-1 right-0 translate-y-2 opacity-0 transition-all duration-150 group-hover:translate-y-0 group-hover:opacity-100"
                clipboard={color.value}
              />
            </div>
          </div>
        )
      })}
    </div>
  )
}

/**
 * Transforms an HSL color channels string to a hex color string.
 *
 * This is necessary because in Tailwind, colors are defined in CSS variables as channels, without
 * the color space function to support the opcity modifier syntax.
 *
 * @example
 *
 * ```ts
 * hslChannelsToHex('0 0% 100%') // '#ffffff'
 * ```
 *
 * @see https://tailwindcss.com/docs/customizing-colors#using-css-variables
 */
function hslChannelsToHex(hslChannels: string): string {
  return color.hsl(`hsl(${hslChannels})`).hex().toString()
}

const brandColors = ['--primary', '--accent', '--success', '--warning', '--error'] as const

const neutralColors = [
  '--foreground',
  '--contrast-100',
  '--contrast-200',
  '--contrast-300',
  '--contrast-400',
  '--contrast-500',
  '--background',
] as const

export function BrandColors({ brands, brandName }: { brands: Brand[]; brandName: string }) {
  const brand = brands.find(brand => brand.name === brandName)

  if (!brand) return <div>Brand: {brandName} not found</div>

  return (
    <>
      <h3 id="brand" className="!mt-6">
        Brand
      </h3>
      <Colors
        colors={brandColors.map(name => ({
          name: name.replace('--', ''),
          value: hslChannelsToHex(brand.cssVars[name]),
        }))}
      />
      <h3 id="neutrals">Neutrals</h3>
      <Colors
        colors={neutralColors.map(name => ({
          name: name.replace('--', ''),
          value: hslChannelsToHex(brand.cssVars[name]),
        }))}
      />
    </>
  )
}
