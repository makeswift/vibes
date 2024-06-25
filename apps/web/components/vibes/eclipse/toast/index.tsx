'use client'

import { Ref, forwardRef } from 'react'

import * as RadixToast from '@radix-ui/react-toast'

import Portal from '../portal'

interface Props extends RadixToast.ToastProps {
  title?: string
  description?: string
}

const Toast = forwardRef(function Toast(
  { title = 'Thank you!', description, ...rest }: Props,
  ref: Ref<HTMLDivElement>
) {
  return (
    <RadixToast.Provider swipeDirection="right">
      <RadixToast.Root
        {...rest}
        className="data-[state=closed]:animate-fadeOut data-[state=open]:animate-toastSlideIn data-[swipe=end]:animate-toastSwipeOut flex items-center justify-between rounded-md border-l-4 border-primary bg-muted-background px-4 py-3 shadow-md data-[swipe=cancel]:translate-x-0 data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=cancel]:transition-[transform_200ms_ease-out]"
      >
        <div className="space-y-2">
          <RadixToast.Title className="font-bold">{title}</RadixToast.Title>
          <RadixToast.Description className="text-sm">{description}</RadixToast.Description>
        </div>

        <RadixToast.Close asChild>
          <button className="button button-muted h-10 w-10">{/* <Icon name="Close" /> */}</button>
        </RadixToast.Close>
      </RadixToast.Root>
      <Portal>
        <RadixToast.Viewport className="fixed bottom-0 right-0 z-[2147483647] m-0 flex w-[390px] max-w-[100vw] list-none flex-col gap-3 p-[var(--viewport-padding)] outline-none [--viewport-padding:25px]" />
      </Portal>
    </RadixToast.Provider>
  )
})

export default Toast
