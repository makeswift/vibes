import { Header, Sidebar } from '@/components/navigation'
import { BrandProvider } from '@/components/preview/brand-context'
import { DynamicFont } from '@/components/ui/dynamic-font'
import { getVibe } from '@/lib/registry'

export default async function Layout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { vibe: string }
}) {
  const vibe = getVibe(params.vibe)
  const fonts = vibe?.brands.flatMap(brand => brand.fonts)

  return (
    <>
      {fonts?.map(font => (
        <DynamicFont key={`${font.name}:${font.src}`} src={font.src} name={font.name} />
      ))}

      <Header vibeSlug={params.vibe} />

      <div className="container relative mx-auto flex items-start gap-x-4 px-5 md:px-8">
        <Sidebar vibeSlug={params.vibe} />
        <div className="flex-1">
          <BrandProvider vibeSlug={params.vibe}>{children}</BrandProvider>
        </div>
      </div>
    </>
  )
}
