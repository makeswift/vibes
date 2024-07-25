import prettyBytes from 'pretty-bytes'

import { getTotalSize } from '@/lib/bundle'
import { getVibe } from '@/vibes/utils'

interface Props {
  vibeSlug: string
  componentName: string
}

export async function BundleSize({ vibeSlug, componentName }: Props) {
  const vibe = getVibe(vibeSlug)

  if (!vibe) return null

  const component = vibe.components.find(component => component.name === componentName)

  if (!component) return null

  const totalSize = await getTotalSize({ component, vibe })

  return (
    <div className="space-between flex w-full py-4 text-contrast-400">
      <span className="flex-1 text-sm">Total size</span>

      <span className="bg-contrast-100 px-1 py-0.5 font-mono text-xs text-contrast-500">
        {prettyBytes(totalSize, { maximumFractionDigits: 1 })}
      </span>
    </div>
  )
}
