'use client'

import React from 'react'

import * as Dialog from '@radix-ui/react-dialog'
import { clsx } from 'clsx'
import { X } from 'lucide-react'

import { Button } from '../button'

interface Props {
  title: React.ReactNode
  children: React.ReactNode
}

function Content({ title, children }: Props) {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 z-30 bg-foreground/50 @container">
        <Dialog.Content
          className={clsx(
            'fixed bottom-0 right-0 top-0 flex h-full w-[400px] max-w-[calc(100%-40px)] flex-col overflow-y-auto bg-background transition [animation-timing-function:cubic-bezier(0.25,1,0,1)] data-[state=closed]:duration-500 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right'
          )}
        >
          <div className="absolute right-2 top-2">
            <Dialog.Close asChild>
              <Button variant="tertiary" size="small">
                <div>
                  <X size={18} strokeWidth={1.5} />
                </div>
              </Button>
            </Dialog.Close>
          </div>

          <div className="px-6 @md:px-20 @md:pt-20">
            <div className="flex">
              <Dialog.Title asChild>
                <h2 className="gap-2 text-xl font-medium @lg:text-2xl">{title}</h2>
              </Dialog.Title>
            </div>
            {children}
          </div>
        </Dialog.Content>
      </Dialog.Overlay>
    </Dialog.Portal>
  )
}

const Root = Dialog.Root
const Trigger = Dialog.Trigger

export { Root, Trigger, Content }
