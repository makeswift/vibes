import { notFound } from 'next/navigation'
import { Suspense } from 'react'
import { ErrorBoundary } from 'react-error-boundary'

import * as Vibes from '@/vibes'
import { getVibe } from '@/vibes/utils'

export async function generateStaticParams() {
  return Object.values(Vibes).flatMap(vibe =>
    vibe.components.flatMap(component =>
      vibe.brands.map(brand => ({ vibe: vibe.slug, component: component.name, brand: brand.name }))
    )
  )
}

export default async function Page({
  params,
}: {
  params: { vibe: string; component: string; brand: string }
}) {
  const vibe = getVibe(params.vibe)

  if (!vibe) return notFound()

  let activeBrand = vibe.brands.find(b => b.name === params.brand)

  if (!activeBrand) {
    console.warn(
      `Could not find brand: ${params.brand} on vibe: ${params.vibe}, defaulting to first brand`
    )

    activeBrand = vibe.brands[0]
  }

  const entry = vibe.components.find(c => c.name === params.component)

  if (!entry) return notFound()

  const Component = entry.component

  return (
    <>
      <style
        // @ts-ignore React 18.3 doesn't include type definitions for style
        href={`/brands/${activeBrand.name}`}
        precedence="high"
        dangerouslySetInnerHTML={{
          __html: `
          :root {
            ${Object.entries(activeBrand.cssVars)
              .map(([key, value]) => `${key}: ${value};`)
              .join('\n')}
          }
        `,
        }}
      />
      <ErrorBoundary
        fallback={<div className="flex justify-center p-5">Failed to load {entry.name}</div>}
      >
        <Suspense fallback={<div>Loading...</div>}>
          <Component />
        </Suspense>
      </ErrorBoundary>
    </>
  )
}
