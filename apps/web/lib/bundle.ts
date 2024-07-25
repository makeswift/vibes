import { readFile } from 'fs/promises'
import { gzipSizeSync } from 'gzip-size'
import path from 'path'

import { Component, Vibe } from '@/vibes/schema'

type BundlephobiaResponse = {
  assets: { gzip: number; name: string; size: number; type: string }[]
  dependencyCount: number
  dependencySizes: { approximateSize: number; name: string }[]
  description: string
  gzip: number
  hasJSModule: string
  hasJSNext: boolean
  hasSideEffects: boolean
  isModuleType: boolean
  name: string
  peerDependencies: string[]
  repository: string
  scoped: boolean
  size: number
  version: string
}

export function fetchBundleSize(packageName: string): Promise<BundlephobiaResponse> {
  return fetch(`https://bundlephobia.com/api/size?package=${packageName}&record=true`)
    .then(r => r.json())
    .then(res => {
      if (res.error) {
        console.error(`Failed to fetch dependency: ${packageName}`)

        return { gzip: 0 }
      } else {
        return res
      }
    })
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
  size = 0,
}: {
  component: Component
  vibe: Vibe
  size?: number
}): Promise<number> {
  size += (await getDependencySize(component)) + (await getComponentSize({ component, vibe }))

  for (const registryDependency of component.registryDependencies) {
    const registryComponent = vibe.components.find(c => c.name === registryDependency)

    if (!registryComponent) continue

    return await getTotalSize({ component: registryComponent, vibe, size })
  }

  return size
}
