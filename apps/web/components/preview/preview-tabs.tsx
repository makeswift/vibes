'use client'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ArrowsHorz16, Desktop16, Expand16, Phone16, Tablet16 } from '@/icons/generated'

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
      <div className="flex items-center @container">
        <TabsList className="flex-1">
          <TabsTrigger value="preview">Preview</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
        </TabsList>
        <div className="flex flex-1 justify-center">
          {actualWidth && isDragging && (
            <div className="text-xs font-bold">
              <span className="mr-2 text-foreground">{`${Math.round(actualWidth)}px`}</span>
              <span className="text-contrast-400">{`${Math.round(zoom * 100)}%`}</span>
            </div>
          )}
        </div>
        <div className="flex flex-1 items-center justify-end gap-x-2">
          {tab !== 'code' && (
            <div className="flex">
              {/* <Button
                className="hidden @xl:flex"
                variant="ghost"
                size="icon"
                active={actualWidth === null}
                onClick={() => resize(null)}
              >
                <span className="sr-only">Fill</span>
                <ArrowsHorz16 />
              </Button> */}
              <Button
                className="hidden @5xl:flex"
                variant="ghost"
                active={actualWidth === null}
                size="icon"
                onClick={() => resize(null)}
              >
                <span className="sr-only">Desktop</span>
                <Desktop16 />
              </Button>
              <Button
                className="hidden @3xl:flex"
                variant="ghost"
                size="icon"
                active={actualWidth !== null && actualWidth > 320 && actualWidth <= 768}
                onClick={() => resize(768)}
              >
                <span className="sr-only">Tablet</span>
                <Tablet16 />
              </Button>
              <Button
                className="hidden @xl:flex"
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

          <div className="flex">
            <CopyButton clipboard={clipboard} />
            <Button
              className="hidden @xl:flex"
              variant="ghost"
              size="icon"
              onClick={() => resize(null)}
            >
              <span className="sr-only">Fullscreen</span>
              <Expand16 />
            </Button>
          </div>
        </div>
      </div>
      <TabsContent value="preview">{preview}</TabsContent>
      <TabsContent value="code">{code}</TabsContent>
    </Tabs>
  )
}
