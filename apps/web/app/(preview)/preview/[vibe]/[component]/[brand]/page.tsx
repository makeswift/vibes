import { notFound } from 'next/navigation'
import { Suspense } from 'react'

import { getVibe } from '@/vibes/utils'

export const revalidate = 60

export const dynamicParams = true

export async function generateStaticParams() {
  return []
}

export default async function Page({
  params,
  searchParams,
}: {
  params: Promise<{ vibe: string; component: string; brand: string }>
  searchParams: Promise<{ [key: string]: string | string[] }>
}) {
  const { vibe: vibeSlug, brand: brandName, component: componentName } = await params
  const vibe = getVibe(vibeSlug)

  if (!vibe) return notFound()

  let activeBrand = vibe.brands.find(b => b.name === decodeURIComponent(brandName))

  if (!activeBrand) {
    console.warn(
      `Could not find brand: ${brandName} on vibe: ${vibeSlug}, defaulting to first brand`
    )

    activeBrand = vibe.brands[0]
  }

  const entry = vibe.components.find(c => c.name === componentName)

  if (!entry?.component) return notFound()

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
      <Suspense fallback={null}>
        <Component searchParams={searchParams} />
      </Suspense>
    </>
  )
}
