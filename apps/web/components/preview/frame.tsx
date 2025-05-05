'use client';

import { clsx } from 'clsx';
import { useEffect, useRef, useState } from 'react';

import { ResizeX } from '@/icons/generated';

import { Portal } from '../ui/portal';

import { useBrandContext } from './brand-context';
import { usePreviewContext } from './preview-context';

interface Props {
  className?: string;
  vibeSlug: string;
  componentName: string;
}

export function Frame({ className, vibeSlug, componentName }: Props) {
  const { activeBrand } = useBrandContext();
  const iframe = useRef<HTMLIFrameElement>(null);
  const container = useRef<HTMLDivElement>(null);
  const { width, zoom, resize, isDragging, setIsDragging, setMaxWidth } = usePreviewContext();
  const widthStart = useRef(0);
  const cursorStart = useRef<readonly [number, number]>([0, 0]);
  const [cursor, setCursor] = useState<readonly [number, number] | null>(null);

  useEffect(() => {
    if (!container.current) return;

    function handleResize() {
      if (!container.current) return;

      setMaxWidth(container.current.clientWidth);
      resize(null);
    }

    window.addEventListener('resize', handleResize);

    setMaxWidth(container.current.clientWidth);

    return () => window.removeEventListener('resize', handleResize);
  }, [resize, setMaxWidth]);

  useEffect(() => {
    iframe.current?.contentWindow?.postMessage({ type: 'zoom', zoom });
  }, [zoom]);

  return (
    <div className={clsx('bg-contrast-100 relative w-full', className)} ref={container}>
      <div
        className={clsx('border-contrast-200 relative mx-auto h-full border border-dashed')}
        style={{ width: width ?? '100%' }}
      >
        {activeBrand && (
          <iframe
            className="h-full w-full bg-transparent"
            ref={iframe}
            src={`/preview/${vibeSlug}/${componentName}/${activeBrand.name}`}
            title={`${activeBrand.name} preview`}
          />
        )}
        <div
          className="group absolute top-0 bottom-0 left-full hidden w-4 cursor-(--cursor-resize) md:block"
          onPointerDown={(e) => {
            if (!container.current) return;

            const nextCursor = [e.clientX, e.clientY] as const;

            setCursor(nextCursor);

            widthStart.current = width !== null ? width / zoom : container.current.clientWidth;
            cursorStart.current = nextCursor;

            setIsDragging(true);

            // eslint-disable-next-line @typescript-eslint/no-meaningless-void-operator,@typescript-eslint/no-confusing-void-expression
            void e.currentTarget.requestPointerLock();
          }}
          onPointerMove={(e) => {
            const { ownerDocument } = e.currentTarget;

            if (ownerDocument.pointerLockElement !== e.currentTarget) return;

            const windowWidth = ownerDocument.defaultView?.innerWidth ?? 0;
            const nextCursorX = cursorStart.current[0] + e.movementX;
            const nextWidth = widthStart.current + e.movementX * 2;
            const nextCursor = [
              // eslint-disable-next-line no-nested-ternary
              nextCursorX > windowWidth
                ? nextCursorX % windowWidth
                : nextCursorX < 0
                  ? windowWidth + nextCursorX
                  : nextCursorX,
              cursorStart.current[1],
            ] as const;

            resize(nextWidth);
            setCursor(nextCursor);

            widthStart.current = nextWidth;
            cursorStart.current = nextCursor;
          }}
          onPointerUp={(e) => {
            setIsDragging(false);
            setCursor(null);

            e.currentTarget.ownerDocument.exitPointerLock();
          }}
        >
          <div className="bg-foreground absolute top-1/2 ml-2 h-8 w-0.5 -translate-y-1/2 rounded-full transition-all group-hover:scale-x-125 group-hover:scale-y-150" />
        </div>
      </div>
      <Portal>
        {isDragging && (
          <div className="fixed inset-0 z-50">
            {cursor && (
              <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2">
                <ResizeX style={{ transform: `translate3d(${cursor[0]}px, ${cursor[1]}px, 0)` }} />
              </div>
            )}
          </div>
        )}
      </Portal>
    </div>
  );
}
