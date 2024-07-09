import { Suspense } from 'react'
import { ErrorBoundary } from 'react-error-boundary'

import clsx from 'clsx'

import Card from '@/components/ui/card'
import { CodeFromFile } from '@/components/ui/code-from-file'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { getCssVars, getVibe } from '@/lib/registry'
import { Brand } from '@/registry/schema'

import { DynamicFont } from './ui/dynamic-font'

interface Props {
  slug: string
  name: string
  brand: Brand
}

export function Preview({ slug, name, brand }: Props) {
  const vibe = getVibe(slug)

  if (!vibe) return <div>Could not find vibe: {slug}</div>

  const entry = vibe.components.find(component => component.name === name)
  const style = getCssVars(brand)

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
        <Card>
          <div style={style}>
            {Component ? (
              <ErrorBoundary
                fallback={
                  <div className="flex justify-center p-5">
                    Preview failed to load at {slug}:{name}
                  </div>
                }
              >
                <Suspense fallback={<div>Loading...</div>}>
                  {brand.fonts.map(font => (
                    <DynamicFont src={font.src} name={font.name} />
                  ))}
                  <Component />
                </Suspense>
              </ErrorBoundary>
            ) : (
              <div className="flex justify-center p-5">
                Example not found at {slug}:{name}
              </div>
            )}
          </div>
        </Card>
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
