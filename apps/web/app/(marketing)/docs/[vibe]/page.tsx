import { notFound, redirect } from 'next/navigation'

import { getChapter, mapVibesToNavigation } from '@/components/navigation'
import * as Vibes from '@/vibes'

export async function generateStaticParams() {
  const navigation = mapVibesToNavigation(Vibes)

  return navigation.chapters.map(vibe => ({ vibe: vibe.slug }))
}

export default function Page({ params }: { params: { vibe: string } }) {
  const chapter = getChapter(Vibes, params.vibe)

  if (!chapter) return notFound()

  const page = chapter.groups[0].pages[0]

  if (!page) return notFound()

  return redirect(`/docs/${chapter.slug}/${page.slug}`)
}
