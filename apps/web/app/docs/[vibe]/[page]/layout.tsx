import { Header } from '@/components/navigation'
import { DynamicFont } from '@/components/ui/dynamic-font'
import { getVibe } from '@/lib/registry'

export default async function Layout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { vibe: string; page: string }
}) {
  const vibe = getVibe(params.vibe)
  const fonts = vibe?.brands.flatMap(brand => brand.fonts)

  return (
    <>
      {fonts?.map(font => (
        <DynamicFont key={`${font.name}:${font.src}`} src={font.src} name={font.name} />
      ))}

      <Header vibeSlug={params.vibe} />

      <div className="px-5 md:px-8">{children}</div>
    </>
  )
}
