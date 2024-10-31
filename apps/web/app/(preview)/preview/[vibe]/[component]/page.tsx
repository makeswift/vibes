import { notFound, redirect } from 'next/navigation'

import * as Vibes from '@/vibes'
import { getVibe } from '@/vibes/utils'

export const revalidate = 60

export const dynamicParams = true

export async function generateStaticParams() {
  return []
}

export default async function Page({
  params,
}: {
  params: Promise<{ vibe: string; component: string }>
}) {
  const { vibe: vibeSlug, component: componentName } = await params
  const vibe = getVibe(vibeSlug)

  if (!vibe) return notFound()

  return redirect(`/preview/${vibeSlug}/${componentName}/${vibe.brands[0].name}`)
}
