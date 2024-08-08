import { notFound } from 'next/navigation'

import * as Vibes from '@/vibes'
import { getVibe } from '@/vibes/utils'

export async function generateStaticParams() {
  return Object.values(Vibes).flatMap(vibe =>
    vibe.components.map(component => ({ vibe: vibe.slug, component: component.name }))
  )
}

export default async function Page({
  params,
  searchParams,
}: {
  params: { vibe: string; component: string }
  searchParams: { brand?: string; zoom?: number }
}) {
  const vibe = getVibe(params.vibe)

  if (!vibe) return notFound()

  const activeBrand = vibe.brands.find(b => b.name === searchParams.brand) ?? vibe.brands[0]

  const entry = vibe.components.find(c => c.name === params.component)

  if (!entry) return notFound()

  const Component = entry.component

  return (
    <div
      className="min-h-screen bg-background font-body text-foreground"
      style={activeBrand.cssVars as React.CSSProperties}
    >
      <Component />
    </div>
  )
}
