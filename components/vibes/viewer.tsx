import { Suspense, lazy } from 'react'
import { ErrorBoundary } from 'react-error-boundary'

import Card from '@/components/ui/card'
import { CodeFromFile } from '@/components/ui/code-from-file'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

import Components from '.'

interface Props {
  path: string
}

function isValidPath(path: string): path is keyof typeof Components {
  return Object.keys(Components).includes(path)
}

export default function Viewer({ path }: Props) {
  const Component = isValidPath(path) && Components[path]

  return (
    <Tabs defaultValue="preview">
      <TabsList>
        <TabsTrigger value="preview">Preview</TabsTrigger>
        <TabsTrigger value="code">Code</TabsTrigger>
        <TabsTrigger value="usage">Usage</TabsTrigger>
      </TabsList>
      <TabsContent value="preview">
        <Card>
          {Component ? (
            <ErrorBoundary
              fallback={
                <div className="flex justify-center p-5">Component not found at {path}</div>
              }
            >
              <Suspense>
                <Component />
              </Suspense>
            </ErrorBoundary>
          ) : (
            <div className="flex justify-center p-5">Component not found at {path}</div>
          )}
        </Card>
      </TabsContent>
      <TabsContent value="code">
        <Card>
          <ErrorBoundary
            fallback={<div className="flex justify-center p-5">Code not found at {path}</div>}
          >
            <CodeFromFile pathname={`/components/vibes/${path}/index.tsx`} />
          </ErrorBoundary>
        </Card>
      </TabsContent>
      <TabsContent value="usage">
        <Card>
          <ErrorBoundary
            fallback={<div className="flex justify-center p-5">Code not found at {path}</div>}
          >
            <CodeFromFile pathname={`/components/vibes/${path}/preview.tsx`} />
          </ErrorBoundary>
        </Card>
      </TabsContent>
    </Tabs>
  )
}
