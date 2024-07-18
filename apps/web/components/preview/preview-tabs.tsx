'use client'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ArrowsHorizontal16, Desktop16, Phone16, Tablet16 } from '@/icons/generated'

import { Button } from '../ui/button'
import { CopyButton } from '../ui/copy-button'
import { useBrandContext } from './brand-context'
import { BrandSelect } from './brand-select'
import { usePreviewContext } from './preview-context'

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
        <div className="flex flex-1 items-center justify-end gap-x-2">
          {tab !== 'code' && (
            <div className="flex">
              <Button
                className="hidden md:flex"
                variant="ghost"
                size="icon"
                active={actualWidth === null}
                onClick={() => resize(null)}
              >
                <span className="sr-only">Fill</span>
                <ArrowsHorizontal16 />
              </Button>
              <Button
                className="hidden lg:flex"
                variant="ghost"
                active={actualWidth !== null && actualWidth > 768 && actualWidth <= 1024}
                size="icon"
                onClick={() => resize(1024)}
              >
                <span className="sr-only">Desktop</span>
                <Desktop16 />
              </Button>
              <Button
                className="hidden lg:flex"
                variant="ghost"
                size="icon"
                active={actualWidth !== null && actualWidth > 320 && actualWidth <= 768}
                onClick={() => resize(768)}
              >
                <span className="sr-only">Tablet</span>
                <Tablet16 />
              </Button>
              <Button
                className="hidden md:flex"
                variant="ghost"
                size="icon"
                active={actualWidth !== null && actualWidth <= 320}
                onClick={() => resize(320)}
              >
                <span className="sr-only">Mobile</span>
                <Phone16 />
              </Button>
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
