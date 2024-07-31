import { Header, Sidebar } from '@/components/navigation'
import { BrandProvider } from '@/components/preview/brand-context'
import { DynamicFont } from '@/components/ui/dynamic-font'
import * as Vibes from '@/vibes'
import { getVibe } from '@/vibes/utils'

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

      <div className="relative mx-auto block items-start gap-x-4 px-5 xl:container lg:flex xl:px-8">
        <Sidebar vibeSlug={params.vibe} />
        <div className="flex-1">
          <BrandProvider vibeSlug={params.vibe}>{children}</BrandProvider>
        </div>
      </div>
    </>
  )
}
