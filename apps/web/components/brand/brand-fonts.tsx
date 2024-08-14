import localFont from 'next/font/local'

import { CodeBlock } from '@/components/ui/code-block'
import { Reveal } from '@/components/ui/reveal'
import { getVibe } from '@/vibes/utils'

import { Step, Steps } from '../ui/steps'

interface Props {
  vibeSlug: string
  brandName: string
  fonts: {
    body: string
    heading?: string
    mono?: string
  }
}

export function BrandFonts({ vibeSlug, brandName, fonts }: Props) {
  const vibe = getVibe(vibeSlug)

  if (!vibe) return <div>Vibe: {vibeSlug} not found</div>

  const brand = vibe.brands.find(brand => brand.name === brandName)

  if (!brand) return <div>Brand: {brandName} not found</div>

  return (
    <div
      className="space-y-5 bg-contrast-100 p-5"
      style={
        {
          '--font-family-body': brand.cssVars['--font-family-body'],
          '--font-family-heading': brand.cssVars['--font-family-heading'],
          '--font-family-mono': brand.cssVars['--font-family-mono'],
        } as React.CSSProperties
      }
    >
      {Object.entries(fonts).map(([type, name]) => {
        return (
          <div key={type}>
            <div
              className="truncate text-xl leading-normal text-foreground md:text-2xl"
              style={{ fontFamily: `var(--font-family-${type})` }}
            >
              {name}
            </div>
            <div className="font-mono text-[13px] text-contrast-500">font-{type}</div>
          </div>
        )
      })}
    </div>
  )
}
