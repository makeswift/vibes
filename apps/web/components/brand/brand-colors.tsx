import color from 'color'

import { CopyButton } from '@/components/ui/copy-button'
import { Vibe } from '@/vibes/schema'

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

function hslToHex(hsl: string): string {
  return color({
    h: parseInt(hsl.split(' ')[0], 10),
    s: parseInt(hsl.split(' ')[1], 10),
    l: parseInt(hsl.split(' ')[2], 10),
  })
    .hex()
    .toString()
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

export function BrandColors({ vibe, brandName }: { vibe: Vibe; brandName: string }) {
  const brand = vibe.brands.find(brand => brand.name === brandName)

  if (!brand) return <div>Brand: {brandName} not found</div>

  return (
    <>
      <h3 id="brand" className="!mt-6">
        Brand
      </h3>
      <Colors
        colors={brandColors.map(name => ({
          name: name.replace('--', ''),
          value: hslToHex(brand.cssVars[name]),
        }))}
      />
      <h3 id="neutrals">Neutrals</h3>
      <Colors
        colors={neutralColors.map(name => ({
          name: name.replace('--', ''),
          value: hslToHex(brand.cssVars[name]),
        }))}
      />
    </>
  )
}
