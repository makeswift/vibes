'use client'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

import { Button } from '../ui/button'
import { CopyButton } from '../ui/copy-button'
import { useBrandContext } from './brand-context'
import { BrandSelect } from './brand-select'
import { PreviewProvider, usePreviewContext } from './preview-context'

interface Props {
  components: {
    brandName: string | null
    preview: React.ReactNode
    code: React.ReactNode
    clipboard: string
  }[]
}

export function PreviewTabs({ components }: Props) {
  const { activeBrand } = useBrandContext()
  const { width, isDragging, zoom, resize, tab, setTab } = usePreviewContext()
  const actualWidth = width && width / zoom

  const { preview, code, clipboard } =
    components.find(({ brandName }) => brandName === null || brandName === activeBrand?.name) ||
    components[0]

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
