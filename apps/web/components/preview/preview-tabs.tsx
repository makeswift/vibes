'use client';

import * as Dialog from '@radix-ui/react-dialog';
import * as VisuallyHidden from '@radix-ui/react-visually-hidden';
import { clsx } from 'clsx';
import { useState } from 'react';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Desktop16, Expand16, Phone16, Tablet16, Times16 } from '@/icons/generated';

import { Button } from '../ui/button';
import { CopyButton } from '../ui/copy-button';

import { useBrandContext } from './brand-context';
import { BrandSelect } from './brand-select';
import { usePreviewContext } from './preview-context';

interface Props {
  components: Array<{
    brandName: string | null;
    preview: React.ReactNode;
    code: React.ReactNode;
    clipboard: string;
  }>;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

export function PreviewTabs({ components, size = 'md' }: Props) {
  const { activeBrand } = useBrandContext();
  const { width, isDragging, zoom, resize, tab, setTab } = usePreviewContext();
  const [fullScreen, setFullScreen] = useState(false);
  const actualWidth = width != null ? width / zoom : null;

  const { preview, code, clipboard } =
    components.find(({ brandName }) => brandName === null || brandName === activeBrand?.name) ??
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    components[0]!;

  const content = (
    <Tabs
      className="my-4 flex flex-1 flex-col"
      defaultValue="preview"
      key="preview-tabs"
      onValueChange={setTab}
      value={tab}
    >
      <div className="@container flex items-center">
        <TabsList className="flex-1">
          <TabsTrigger value="preview">Preview</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
        </TabsList>
        <div className="flex flex-1 justify-center">
          {actualWidth != null && isDragging && (
            <div className="text-xs font-bold">
              <span className="text-foreground mr-2">{`${Math.round(actualWidth)}px`}</span>
              <span className="text-contrast-400">{`${Math.round(zoom * 100)}%`}</span>
            </div>
          )}
        </div>
        <div className="flex flex-1 items-center justify-end gap-x-2">
          {tab !== 'code' && (
            <div className="flex">
              <Button
                active={actualWidth === null}
                className="hidden @5xl:flex"
                onClick={() => resize(null)}
                size="icon"
                variant="ghost"
              >
                <span className="sr-only">Desktop</span>
                <Desktop16 />
              </Button>
              <Button
                active={actualWidth !== null && actualWidth > 320 && actualWidth <= 768}
                className="hidden @3xl:flex"
                onClick={() => resize(768)}
                size="icon"
                variant="ghost"
              >
                <span className="sr-only">Tablet</span>
                <Tablet16 />
              </Button>
              <Button
                active={actualWidth !== null && actualWidth <= 320}
                className="hidden @xl:flex"
                onClick={() => resize(320)}
                size="icon"
                variant="ghost"
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
                onClick={() => {
                  setFullScreen((prev) => !prev);
                  resize(null);
                }}
                size="icon"
                variant="ghost"
              >
                <span className="sr-only">Fullscreen</span>
                {fullScreen ? <Times16 /> : <Expand16 />}
              </Button>
            </Dialog.Trigger>
          </div>
        </div>
      </div>
      <TabsContent className="min-h-0 flex-1" value="preview">
        <div
          className={clsx(
            'flex',
            fullScreen
              ? 'h-full'
              : {
                  xs: 'h-[200px] max-h-[70vh]',
                  sm: 'h-[400px] max-h-[70vh]',
                  md: 'h-[600px] max-h-[70vh]',
                  lg: 'h-[800px] max-h-[70vh]',
                  xl: 'h-[1000px] max-h-[70vh]',
                }[size],
          )}
        >
          {preview}
        </div>
      </TabsContent>
      <TabsContent className="min-h-0 flex-1" value="code">
        <div
          className={clsx(
            'flex overflow-auto',
            fullScreen
              ? 'max-h-full'
              : {
                  xs: 'max-h-[min(200px,70vh)]',
                  sm: 'max-h-[min(400px,70vh)]',
                  md: 'max-h-[min(600px,70vh)]',
                  lg: 'max-h-[min(800px,70vh)]',
                  xl: 'max-h-[min(1000px,70vh)]',
                }[size],
          )}
        >
          {code}
        </div>
      </TabsContent>
    </Tabs>
  );

  return (
    <Dialog.Root onOpenChange={setFullScreen} open={fullScreen}>
      {fullScreen ? (
        <Dialog.Portal>
          <Dialog.Overlay className="bg-background fixed inset-0 z-[100]" />
          <Dialog.Content className="bg-background fixed inset-0 z-[100] flex flex-col px-4">
            <VisuallyHidden.Root>
              <Dialog.Title>Fullscreen preview</Dialog.Title>
            </VisuallyHidden.Root>
            {content}
          </Dialog.Content>
        </Dialog.Portal>
      ) : (
        content
      )}
    </Dialog.Root>
  );
}
