import { Suspense } from 'react'
import { ErrorBoundary } from 'react-error-boundary'

import { readFile } from 'fs/promises'
import path from 'path'

import Card from '@/components/ui/card'
import { CodeFromFile } from '@/components/ui/code-from-file'
import { exists } from '@/lib/utils'
import { getVibe } from '@/vibes/utils'

import { Frame } from './frame'
import { PreviewProvider } from './preview-context'
import { PreviewTabs } from './preview-tabs'

interface Props {
  vibeSlug: string
  componentName: string | { [key: string]: string }
}

function findEntry({ vibeSlug, componentName }: { vibeSlug: string; componentName: string }) {
  const vibe = getVibe(vibeSlug)

  if (!vibe) throw new Error(`Vibe not found in ${vibeSlug}`)

  const entry = vibe.components.find(component => component.name === componentName)

  if (!entry) throw new Error(`Component not found in ${vibeSlug}:${componentName}`)

  return entry
}

export async function Preview({ vibeSlug, componentName }: Props) {
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
        components={await Promise.all(
          components.filter(exists).map(async ({ brandName, entry }) => {
            const pathname = `/vibes/${vibeSlug}/${entry.files[0]}`
            const file = await readFile(path.join(process.cwd(), pathname), 'utf8')

            return {
              brandName,
              clipboard: file,
              preview: (
                <Suspense fallback={<div>Loading...</div>}>
                  <Frame>
                    <ErrorBoundary
                      fallback={
                        <div className="flex justify-center p-5">
                          Preview failed to load at {vibeSlug}:{entry.name}
                        </div>
                      }
                    >
                      <entry.component />
                    </ErrorBoundary>
                  </Frame>
                </Suspense>
              ),
              code: (
                <>
                  <ErrorBoundary
                    fallback={
                      <div className="flex justify-center p-5">
                        Code failed to load at {vibeSlug}:{entry.name}
                      </div>
                    }
                  >
                    <Suspense fallback={<div>Loading...</div>}>
                      <CodeFromFile pathname={pathname} hideCopyButton />
                    </Suspense>
                  </ErrorBoundary>
                </>
              ),
            }
          })
        )}
      />
    </PreviewProvider>
  )
}
