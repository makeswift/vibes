import { Suspense } from 'react'
import { ErrorBoundary } from 'react-error-boundary'

import Card from '@/components/ui/card'
import { CodeFromFile } from '@/components/ui/code-from-file'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { getCssVars, getVibe } from '@/lib/registry'
import { Brand } from '@/registry/schema'

import { Frame } from './frame'

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
    <Tabs defaultValue="preview">
      <TabsList>
        <TabsTrigger value="preview">Preview</TabsTrigger>
        <TabsTrigger value="code">Code</TabsTrigger>
      </TabsList>
      <TabsContent value="preview">
        <Frame>
          {Component ? (
            <ErrorBoundary
              fallback={
                <div className="flex justify-center p-5">
                  Preview failed to load at {slug}:{name}
                </div>
              }
            >
              <Suspense fallback={<div>Loading...</div>}>
                <Component />
              </Suspense>
            </ErrorBoundary>
          ) : (
            <div className="flex justify-center p-5">
              Example not found at {slug}:{name}
            </div>
          )}
        </Frame>
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
  )
}
