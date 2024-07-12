import { Suspense } from 'react'
import { ErrorBoundary } from 'react-error-boundary'

import { readFile } from 'fs/promises'
import path from 'path'

import Card from '@/components/ui/card'
import { CodeFromFile } from '@/components/ui/code-from-file'
import { getVibe } from '@/lib/registry'

import { Frame } from './frame'
import { PreviewProvider } from './preview-context'
import { PreviewTabs } from './preview-tabs'

interface Props {
  slug: string
  name: string
}

export async function Preview({ slug, name }: Props) {
  const vibe = getVibe(slug)

  if (!vibe) return <div>Could not find vibe: {slug}</div>

  const entry = vibe.components.find(component => component.name === name)

  if (!entry) return <div>Could not find entry</div>

  const Component = entry.component

  if (!Component) throw new Error(`Component not found in ${slug}:${name}`)

  const pathname = `/registry/${slug}/${entry.files[0]}`
  const file = await readFile(path.join(process.cwd(), pathname), 'utf8')

  return (
    <PreviewProvider>
      <PreviewTabs
        clipboard={file}
        preview={
          <Suspense fallback={<div>Loading...</div>}>
            <Frame>
              <ErrorBoundary
                fallback={
                  <div className="flex justify-center p-5">
                    Preview failed to load at {slug}:{name}
                  </div>
                }
              >
                <Component />
              </ErrorBoundary>
            </Frame>
          </Suspense>
        }
        code={
          <Card>
            <ErrorBoundary
              fallback={
                <div className="flex justify-center p-5">
                  Code failed to load at {slug}:{name}
                </div>
              }
            >
              <Suspense fallback={<div>Loading...</div>}>
                <CodeFromFile pathname={pathname} hideCopyButton />
              </Suspense>
            </ErrorBoundary>
          </Card>
        }
      />
    </PreviewProvider>
  )
}
