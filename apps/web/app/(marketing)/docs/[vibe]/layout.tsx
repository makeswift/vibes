import { Header, Sidebar, toChapter } from '@/components/navigation'
import { BrandProvider } from '@/components/preview/brand-context'
import * as Vibes from '@/vibes'

export default async function Layout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { vibe: string }
}) {
  const allVibes = Object.values(Vibes)
  const activeVibe = allVibes.find(vibe => vibe.slug === params.vibe)
  const chapters = Object.values(Vibes).map(toChapter)
  const activeChapter = chapters.find(c => c.slug === params.vibe)
  const brands = activeVibe?.brands ?? []

  return (
    <>
      <Header chapters={chapters} chapterSlug={params.vibe} />

      <div className="relative mx-auto block items-start gap-x-4 px-5 xl:container lg:flex xl:px-8">
        {activeChapter && <Sidebar chapter={activeChapter} />}
        <div className="min-w-0 flex-1">
          <BrandProvider brands={brands}>{children}</BrandProvider>
        </div>
      </div>
    </>
  )
}
