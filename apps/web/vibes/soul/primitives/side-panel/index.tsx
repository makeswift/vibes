'use client';

import * as Dialog from '@radix-ui/react-dialog';
import { clsx } from 'clsx';
import { X } from 'lucide-react';
import { ReactNode } from 'react';

import { Button } from '@/vibes/soul/primitives/button';

export interface SidePanelProps {
  title: string;
  children: ReactNode;
}

/**
 * This component supports various CSS variables for theming. Here's a comprehensive list, along
 * with their default values:
 *
 * ```css
 * :root {
 *   --side-panel-overlay-background: color-mix(in oklab, var(--foreground) 50%, transparent);
 *   --side-panel-background: var(--background);
 *   --side-panel-title-text: var(--foreground);
 *   --side-panel-title-font-family: var(--font-family-heading);
 *   --side-panel-content-font-family: var(--font-family-body);
 * }
 * ```
 */
function Content({ title, children }: SidePanelProps) {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className="@container fixed inset-0 z-30 bg-(--side-panel-overlay-background,color-mix(in_oklab,var(--foreground)_50%,transparent))">
        <Dialog.Content
          className={clsx(
            'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right fixed inset-y-0 right-0 flex w-96 max-w-full flex-col bg-(--side-panel-background,var(--background)) font-(family-name:--side-panel-content-font-family,var(--font-family-body)) transition duration-500 [animation-timing-function:cubic-bezier(0.25,1,0,1)]',
          )}
          forceMount
        >
          <div className="flex items-center justify-between gap-2 px-6 pt-4 pb-4 @md:px-8 @md:pt-7">
            <Dialog.Title asChild>
              <h2 className="font-(family-name:--side-panel-title-font-family,var(--font-family-heading)) text-2xl font-medium text-(--side-panel-title-text,var(--foreground)) @lg:text-3xl">
                {title}
              </h2>
            </Dialog.Title>
            <Dialog.Close asChild>
              <Button className="translate-x-3" shape="circle" size="small" variant="tertiary">
                <X size={20} strokeWidth={1} />
              </Button>
            </Dialog.Close>
          </div>

          <div className="flex-1 overflow-y-auto px-6 pb-6 @md:px-8 @md:pb-8">{children}</div>
        </Dialog.Content>
      </Dialog.Overlay>
    </Dialog.Portal>
  );
}

const Root = Dialog.Root;
const Trigger = Dialog.Trigger;

export { Root, Trigger, Content };
