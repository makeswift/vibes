import { notFound, redirect } from 'next/navigation'

import { navigation } from '@/components/navigation'

export async function generateStaticParams() {
  return navigation.vibes.map(vibe => ({ vibe: vibe.slug }))
}

export default function Page({ params }: { params: { vibe: string } }) {
  const vibe = navigation.vibes.find(vibe => vibe.slug === params.vibe)

  if (!vibe) return notFound()

  const page = vibe.groups[0].pages[0]

  if (!page) return notFound()

  return redirect(`/docs/${vibe.slug}/${page.slug}`)
}
