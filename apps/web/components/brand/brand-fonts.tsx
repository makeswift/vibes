import { Brand } from '@/vibes/schema'

interface Props {
  brands: Brand[]
  brandName: string
  fonts: {
    body: string
    heading?: string
    mono?: string
  }
}

export function BrandFonts({ brands, brandName, fonts }: Props) {
  const brand = brands.find(b => b.name === brandName)

  if (!brand) return <div>Brand: {brandName} not found</div>

  return (
    <div className="mt-6 space-y-5">
      {Object.entries(fonts).map(([type, name]) => {
        return (
          <div key={type}>
            <div
              className="truncate text-xl leading-normal text-foreground md:text-xl"
              style={
                // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
                {
                  '--font-family-body': brand.cssVars['--font-family-body'],
                  '--font-family-heading': brand.cssVars['--font-family-heading'],
                  '--font-family-mono': brand.cssVars['--font-family-mono'],
                  fontFamily: `var(--font-family-${type})`,
                } as React.CSSProperties
              }
            >
              {name}
            </div>
            <span className="rounded bg-contrast-100 px-1 py-0.5 font-mono text-xs text-contrast-500">
              font-{type}
            </span>
          </div>
        )
      })}
    </div>
  )
}
