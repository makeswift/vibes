'use client'

import React, { ComponentPropsWithoutRef, ReactNode } from 'react'

import * as Dialog from '@radix-ui/react-dialog'
import * as VisuallyHidden from '@radix-ui/react-visually-hidden'
import { clsx } from 'clsx'
import { X } from 'lucide-react'

import { Button } from '../button'

interface Props extends ComponentPropsWithoutRef<typeof Dialog.Root> {
  title?: string
  trigger: ReactNode
  content: ReactNode
}

export function SidePanel({ title, trigger, content, ...rest }: Props) {
  return (
    <Dialog.Root {...rest}>
      <VisuallyHidden.Root>
        <Dialog.Title>{title}</Dialog.Title>
      </VisuallyHidden.Root>
      <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-30 bg-foreground/50 @container">
          <Dialog.Content
            className={clsx(
              'fixed bottom-0 right-0 top-0 flex h-full w-[400px] max-w-[calc(100%-40px)] flex-col overflow-y-auto bg-background p-6 transition [animation-timing-function:cubic-bezier(0.25,1,0,1)] data-[state=closed]:duration-500 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right @md:p-20'
            )}
          >
            {content}
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

export function SidePanelClose() {
  return (
    <Dialog.Close asChild>
      <Button variant="tertiary" size="small" className="-mr-2 [&_div]:!px-1" asChild>
        <div>
          <X size={18} strokeWidth={1.5} />
        </div>
      </Button>
    </Dialog.Close>
  )
}
