import { brands } from '@/vibes/soul/brands'

const colorMap: { [key: number]: number } = {
  100: 0.2,
  200: 0.15,
  300: 0.1,
  400: 0.05,
  500: -0.2,
  600: -0.3,
  700: -0.4,
  800: -0.5,
  900: -0.6,
}

const hslToString = (h: number, s: number, l: number) => `hsl(${h}, ${s}%, ${l}%)`
const calcLightness = (l: number, mix: number) => (mix >= 0 ? l + (100 - l) * mix : l * (1 + mix))

const getBrandShade = (
  brandName: string | undefined,
  value: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900
) => {
  const brand = brands.find(b => b.name === brandName) ?? brands[0]
  if (!brand) throw new Error(`Brand not found: ${brandName}`)

  const brandColor = brand.cssVars['--primary']
  const hslMatch = brandColor.match(/(\d+)\s(\d+)%\s(\d+)%/)
  if (!hslMatch) throw new Error(`Invalid HSL format: ${brandColor}`)

  const [_, h, s, l] = hslMatch

  return hslToString(+h, +s, calcLightness(+l, colorMap[value]))
}

export default getBrandShade
