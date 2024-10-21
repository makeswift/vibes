import { readFile } from 'fs/promises'
import path from 'path'

import { CodeFromFile } from '@/components/ui/code-from-file'
import { exists } from '@/lib/utils'
import { Vibe } from '@/vibes/schema'

import { Frame } from './frame'
import { PreviewProvider } from './preview-context'
import { PreviewTabs } from './preview-tabs'

interface Props {
  componentName: string | { [key: string]: string }
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  vibe: Vibe
}

function findEntry({ vibe, componentName }: { vibe: Vibe; componentName: string }) {
  const entry = vibe.components.find(component => component.name === componentName)

  if (!entry) throw new Error(`Component not found in ${vibe.slug}:${componentName}`)

  return entry
}

export async function Preview({ vibe, componentName, size = 'md' }: Props) {
  const components =
    typeof componentName === 'string'
      ? [{ entry: findEntry({ vibe, componentName }), brandName: null }]
      : Object.entries(componentName).map(([brandName, componentName]) => ({
          entry: findEntry({ vibe, componentName }),
          brandName,
        }))

  return (
    <PreviewProvider>
      <PreviewTabs
        size={size}
        components={await Promise.all(
          components.filter(exists).map(async ({ brandName, entry }) => {
            const pathname = `/vibes/${vibe.slug}/${entry.files[0]}`
            const file = await readFile(path.join(process.cwd(), pathname), 'utf8')

            return {
              brandName,
              clipboard: file,
              preview: <Frame vibeSlug={vibe.slug} componentName={entry.name} />,
              code: <CodeFromFile pathname={pathname} hideCopyButton showLineNumbers />,
            }
          })
        )}
      />
    </PreviewProvider>
  )
}
