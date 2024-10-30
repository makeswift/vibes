import { readFile } from 'fs/promises'
import { gzipSizeSync } from 'gzip-size'
import path from 'path'
import { z } from 'zod'

import { Component, Vibe } from '@/vibes/schema'

const bundlephobiaResponseBodySchema = z.object({
  assets: z.array(
    z.object({
      gzip: z.number(),
      name: z.string(),
      size: z.number(),
      type: z.string(),
    })
  ),
  dependencyCount: z.number(),
  dependencySizes: z.array(
    z.object({
      approximateSize: z.number(),
      name: z.string(),
    })
  ),
  description: z.string(),
  gzip: z.number(),
  hasJSModule: z.string(),
  hasJSNext: z.boolean(),
  hasSideEffects: z.boolean(),
  isModuleType: z.boolean(),
  name: z.string(),
  peerDependencies: z.array(z.string()).optional(),
  repository: z.string(),
  scoped: z.boolean(),
  size: z.number(),
  version: z.string(),
})

type BundlephobiaResponseBody = z.infer<typeof bundlephobiaResponseBodySchema>

export async function fetchBundleSize(packageName: string): Promise<BundlephobiaResponseBody> {
  const response = await fetch(
    `https://bundlephobia.com/api/size?package=${encodeURIComponent(packageName)}&record=true`
  )

  if (!response.ok) {
    if (response.headers.get('content-type')?.includes('application/json')) {
      const body = await response.json()

      console.error(body)
    }

    throw new Error(
      `Failed to fetch bundlephobia package size for "${packageName}" with status ${response.status} ${response.statusText}`
    )
  }

  const body = await bundlephobiaResponseBodySchema.parseAsync(await response.json())

  return body
}

export async function getDependencySize(component: Component): Promise<number> {
  const bundles = await Promise.all(
    component.dependencies.map(dependency => fetchBundleSize(dependency))
  )

  return bundles.reduce((acc, bundle) => acc + bundle.gzip, 0)
}

export async function getComponentSize({ component, vibe }: { component: Component; vibe: Vibe }) {
  const files = await Promise.all(
    component.files.map(file =>
      readFile(path.join(process.cwd(), 'vibes', vibe.slug, file), 'utf-8')
    )
  )

  return files.reduce((acc, file) => acc + gzipSizeSync(file), 0)
}

export async function getTotalSize({
  component,
  vibe,
}: {
  component: Component
  vibe: Vibe
}): Promise<number> {
  let size = 0

  size += await getDependencySize(component)
  size += await getComponentSize({ component, vibe })

  for (const registryDependency of component.registryDependencies) {
    const registryComponent = vibe.components.find(c => c.name === registryDependency)

    if (!registryComponent) continue

    size += await getTotalSize({ component: registryComponent, vibe })
  }

  return size
}
