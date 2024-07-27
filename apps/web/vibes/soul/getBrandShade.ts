import { brands } from '@/vibes/soul/brands'

const colorMap: { [key: number]: number } = {
  100: 0.8,
  200: 0.67,
  300: 0.54,
  400: 0.36,
  500: 0.18,
  600: -0.41,
  700: -0.59,
  800: -0.72,
  900: -0.85,
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
