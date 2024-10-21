import { notFound, redirect } from 'next/navigation'

import { toChapter } from '@/components/navigation'
import * as Vibes from '@/vibes'

const chapters = Object.values(Vibes).map(toChapter)

export async function generateStaticParams() {
  return chapters.map(vibe => ({ vibe: vibe.slug }))
}

export default function Page({ params }: { params: { vibe: string } }) {
  const chapter = chapters.find(c => c.slug === params.vibe)

  if (!chapter) return notFound()

  const page = chapter.groups[0].pages[0]

  if (!page) return notFound()

  return redirect(`/docs/${chapter.slug}/${page.slug}`)
}
