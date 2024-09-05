import React, { ReactNode } from 'react'

import * as Dialog from '@radix-ui/react-dialog'
import { clsx } from 'clsx'

interface Props {
  isOpen: boolean
  setOpen: (open: boolean) => void
  trigger: ReactNode
  content: ReactNode
}

export const SidePanel = function SidePanel({ isOpen, setOpen, trigger, content }: Props) {
  return (
    <Dialog.Root open={isOpen} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-30 bg-foreground/50 @container">
          <Dialog.Content
            className={clsx(
              'fixed bottom-0 right-0 top-0 flex h-full flex-col overflow-y-auto bg-background p-6 @md:p-20',
              // TODO: Get panel to slide open and closed
              'ease-[cubic-bezier(0.25,1,0,1)] transition',
              'data-[state=closed]:duration-500 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out',
              'data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right'
            )}
          >
            {content}
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
