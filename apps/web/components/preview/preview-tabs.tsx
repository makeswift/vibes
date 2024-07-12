'use client'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

import { Button } from '../ui/button'
import { CopyButton } from '../ui/copy-button'
import { BrandSelect } from './brand-select'
import { PreviewProvider, usePreviewContext } from './preview-context'

interface Props {
  preview: React.ReactNode
  code: React.ReactNode
  clipboard: string
}

export function PreviewTabs({ preview, code, clipboard }: Props) {
  const { width, isDragging, zoom, resize, tab, setTab } = usePreviewContext()
  const actualWidth = width && width / zoom

  return (
    <Tabs defaultValue="preview" value={tab} onValueChange={setTab}>
      <div className="flex items-center">
        <TabsList className="flex-1">
          <TabsTrigger value="preview">Preview</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
        </TabsList>
        <div className="flex flex-1 justify-center">
          {actualWidth && isDragging && (
            <div className="font-body text-sm">{`${Math.round(actualWidth)}px @ ${Math.round(zoom * 100)}%`}</div>
          )}
        </div>
        <div className="flex flex-1 justify-end gap-x-2">
          {tab !== 'code' && (
            <div className="flex gap-x-2">
              <Button onClick={() => resize(320)}>Mobile</Button>
              <Button onClick={() => resize(768)}>Tablet</Button>
              <Button onClick={() => resize(null)}>Fill</Button>
            </div>
          )}

          <BrandSelect />
          <CopyButton clipboard={clipboard} />
        </div>
      </div>
      <TabsContent value="preview">{preview}</TabsContent>
      <TabsContent value="code">{code}</TabsContent>
    </Tabs>
  )
}
