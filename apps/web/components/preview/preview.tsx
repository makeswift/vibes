import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'
import { ErrorBoundary } from 'react-error-boundary'

import Card from '@/components/ui/card'
import { CodeFromFile } from '@/components/ui/code-from-file'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { getVibe } from '@/lib/registry'

import { Frame } from './frame'
import { PreviewProvider } from './preview-context'
import { Toolbar } from './toolbar'

interface Props {
  slug: string
  name: string
}

export function Preview({ slug, name }: Props) {
  const vibe = getVibe(slug)

  if (!vibe) return <div>Could not find vibe: {slug}</div>

  const entry = vibe.components.find(component => component.name === name)

  if (!entry) return <div>Could not find entry</div>

  const files = entry.files
  const Component = entry.component

  return (
    <PreviewProvider>
      <Tabs defaultValue="preview">
        <Toolbar />
        <TabsContent value="preview">
          <Suspense fallback={<div>Loading...</div>}>
            <Frame>
              {Component ? (
                <ErrorBoundary
                  fallback={
                    <div className="flex justify-center p-5">
                      Preview failed to load at {slug}:{name}
                    </div>
                  }
                >
                  <Component />
                </ErrorBoundary>
              ) : (
                <div className="flex justify-center p-5">
                  Example not found at {slug}:{name}
                </div>
              )}
            </Frame>
          </Suspense>
        </TabsContent>
        <TabsContent value="code">
          <Card>
            {files?.[0] ? (
              <ErrorBoundary
                fallback={
                  <div className="flex justify-center p-5">
                    Code failed to load at {slug}:{name}
                  </div>
                }
              >
                <Suspense fallback={<div>Loading...</div>}>
                  <CodeFromFile pathname={`/registry/${slug}/${files[0]}`} />
                </Suspense>
              </ErrorBoundary>
            ) : (
              <div className="flex justify-center p-5">
                Code not found at {slug}:{name}
              </div>
            )}
          </Card>
        </TabsContent>
      </Tabs>
    </PreviewProvider>
  )
}
