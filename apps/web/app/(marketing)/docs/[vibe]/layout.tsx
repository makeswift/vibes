import { Header, Sidebar, toChapter } from '@/components/navigation'
import { BrandProvider } from '@/components/preview/brand-context'
import * as Vibes from '@/vibes'

export default async function Layout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ vibe: string }>
}) {
  const { vibe: vibeSlug } = await params
  const allVibes = Object.values(Vibes)
  const activeVibe = allVibes.find(vibe => vibe.slug === vibeSlug)
  const chapters = Object.values(Vibes).map(toChapter)
  const activeChapter = chapters.find(c => c.slug === vibeSlug)
  const brands = activeVibe?.brands ?? []

  return (
    <>
      <Header chapters={chapters} chapterSlug={vibeSlug} />

      <div className="relative mx-auto block items-start gap-x-4 px-5 xl:container lg:flex xl:px-8">
        {activeChapter && <Sidebar chapter={activeChapter} />}
        <div className="min-w-0 flex-1">
          <BrandProvider brands={brands}>{children}</BrandProvider>
        </div>
      </div>
    </>
  )
}
