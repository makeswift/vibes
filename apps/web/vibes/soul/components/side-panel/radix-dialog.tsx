'use client'

import React, { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import * as DialogPrimitive from '@radix-ui/react-dialog'
import * as VisuallyHidden from '@radix-ui/react-visually-hidden'
import clsx from 'clsx'

const Dialog = DialogPrimitive.Root

const DialogTrigger = DialogPrimitive.Trigger

const DialogPortal = DialogPrimitive.Portal

interface DialogContentProps extends ComponentPropsWithoutRef<typeof DialogPrimitive.Content> {}

const DialogContent = forwardRef<ElementRef<typeof DialogPrimitive.Content>, DialogContentProps>(
  ({ className, children, ...props }, ref) => (
    <DialogPortal>
      <DialogPrimitive.Content
        ref={ref}
        className={clsx(
          'ease-[cubic-bezier(0.25,1,0,1)] sticky bottom-0 right-0 top-10 z-50 w-[500px] overflow-y-auto bg-background transition-transform duration-300 data-[state=closed]:translate-x-full data-[state=open]:translate-x-0',
          className
        )}
        {...props}
      >
        <>
          <VisuallyHidden.Root>
            <DialogPrimitive.Title className="DialogTitle">Filter</DialogPrimitive.Title>
          </VisuallyHidden.Root>
          {children}
        </>
      </DialogPrimitive.Content>
    </DialogPortal>
  )
)
DialogContent.displayName = DialogPrimitive.Content.displayName

export { Dialog, DialogPortal, DialogTrigger, DialogContent }
