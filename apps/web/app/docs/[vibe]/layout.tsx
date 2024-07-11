import { Header, Sidebar } from '@/components/navigation'
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

  console.log('remoutn')

  return (
    <>
      {fonts?.map(font => (
        <DynamicFont key={`${font.name}:${font.src}`} src={font.src} name={font.name} />
      ))}

      <Header vibeSlug={params.vibe} />

      <div className="container relative mx-auto flex items-start gap-x-4">
        <aside className="left-0 top-16 hidden h-[calc(100vh-4rem)] w-60 xl:sticky xl:block">
          <div className="h-full overflow-y-scroll py-8">
            <Sidebar vibeSlug={params.vibe} />
          </div>
        </aside>
        <div className="mx-auto w-full max-w-7xl px-5 md:px-8">{children}</div>
      </div>
    </>
  )
}
