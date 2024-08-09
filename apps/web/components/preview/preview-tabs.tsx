'use client'

import { useState } from 'react'

import * as Dialog from '@radix-ui/react-dialog'
import clsx from 'clsx'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Desktop16, Expand16, Phone16, Tablet16, Times16 } from '@/icons/generated'

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
  size?: 'small' | 'medium' | 'large'
}

export function PreviewTabs({ components, size = 'medium' }: Props) {
  const { activeBrand } = useBrandContext()
  const { width, isDragging, zoom, resize, tab, setTab } = usePreviewContext()
  const [fullScreen, setFullScreen] = useState(false)
  const actualWidth = width && width / zoom

  const { preview, code, clipboard } =
    components.find(({ brandName }) => brandName === null || brandName === activeBrand?.name) ||
    components[0]

  const content = (
    <Tabs
      key="preview-tabs"
      defaultValue="preview"
      value={tab}
      onValueChange={setTab}
      className={clsx('flex flex-col', fullScreen && 'h-full')}
    >
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
            <Dialog.Trigger asChild>
              <Button
                className="hidden @xl:flex"
                variant="ghost"
                size="icon"
                onClick={() => {
                  setFullScreen(prev => !prev)
                  resize(null)
                }}
              >
                <span className="sr-only">Fullscreen</span>
                {fullScreen ? <Times16 /> : <Expand16 />}
              </Button>
            </Dialog.Trigger>
          </div>
        </div>
      </div>
      <TabsContent className="flex-1" value="preview">
        <div
          className={clsx(
            'flex',
            fullScreen
              ? 'h-full'
              : {
                  small: 'h-[300px]',
                  medium: 'h-[500px]',
                  large: 'h-[750px]',
                }[size]
          )}
        >
          {preview}
        </div>
      </TabsContent>
      <TabsContent className="min-h-0 flex-1" value="code">
        <div
          className={clsx(
            'flex overflow-hidden',
            fullScreen
              ? 'max-h-full'
              : {
                  small: 'max-h-[300px]',
                  medium: 'max-h-[500px]',
                  large: 'max-h-[750px]',
                }[size]
          )}
        >
          {code}
        </div>
      </TabsContent>
    </Tabs>
  )

  return (
    <Dialog.Root onOpenChange={setFullScreen} open={fullScreen}>
      {fullScreen ? (
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-background" />
          <Dialog.Content className="fixed inset-0 z-50 bg-background px-4">
            {content}
          </Dialog.Content>
        </Dialog.Portal>
      ) : (
        content
      )}
    </Dialog.Root>
  )
}
