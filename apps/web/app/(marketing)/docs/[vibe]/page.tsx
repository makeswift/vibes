import { notFound, redirect } from 'next/navigation'

import { toChapter } from '@/components/navigation'
import * as Vibes from '@/vibes'

const chapters = Object.values(Vibes).map(toChapter)

export async function generateStaticParams() {
  return chapters.map(vibe => ({ vibe: vibe.slug }))
}

export default async function Page({ params }: { params: Promise<{ vibe: string }> }) {
  const { vibe: vibeSlug } = await params
  const chapter = chapters.find(c => c.slug === vibeSlug)

  if (!chapter) return notFound()

  const page = chapter.groups[0].pages[0]

  if (!page) return notFound()

  return redirect(`/docs/${chapter.slug}/${page.slug}`)
}
