import { readFile } from 'fs/promises'
import path from 'path'

import { CodeFromFile } from '@/components/ui/code-from-file'
import { exists } from '@/lib/utils'
import { getVibe } from '@/vibes/utils'

import { Frame } from './frame'
import { PreviewProvider } from './preview-context'
import { PreviewTabs } from './preview-tabs'

interface Props {
  vibeSlug: string
  componentName: string | { [key: string]: string }
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
}

function findEntry({ vibeSlug, componentName }: { vibeSlug: string; componentName: string }) {
  const vibe = getVibe(vibeSlug)

  if (!vibe) throw new Error(`Vibe not found in ${vibeSlug}`)

  const entry = vibe.components.find(component => component.name === componentName)

  if (!entry) throw new Error(`Component not found in ${vibeSlug}:${componentName}`)

  return entry
}

export async function Preview({ vibeSlug, componentName, size = 'md' }: Props) {
  const vibe = getVibe(vibeSlug)

  if (!vibe) return <div>Could not find vibe: {vibeSlug}</div>

  const components =
    typeof componentName === 'string'
      ? [{ entry: findEntry({ vibeSlug, componentName }), brandName: null }]
      : Object.entries(componentName).map(([brandName, componentName]) => ({
          entry: findEntry({ vibeSlug, componentName }),
          brandName,
        }))

  return (
    <PreviewProvider>
      <PreviewTabs
        size={size}
        components={await Promise.all(
          components.filter(exists).map(async ({ brandName, entry }) => {
            const pathname = `/vibes/${vibeSlug}/${entry.files[0]}`
            const file = await readFile(path.join(process.cwd(), pathname), 'utf8')

            return {
              brandName,
              clipboard: file,
              preview: <Frame vibeSlug={vibeSlug} componentName={entry.name} />,
              code: <CodeFromFile pathname={pathname} hideCopyButton showLineNumbers />,
            }
          })
        )}
      />
    </PreviewProvider>
  )
}
