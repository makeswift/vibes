'use client'

import { XIcon } from 'lucide-react'
import { Toaster as Sonner } from 'sonner'

type ToasterProps = React.ComponentProps<typeof Sonner>

export const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      toastOptions={{
        unstyled: true,
        classNames: {
          toast:
            'rounded-xl ps-4 pe-3 py-3 min-w-[284px] max-w-[356px] text-foreground flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 ring-foreground flex border border-foreground/10 shadow-sm',
          content: 'grow',
          title: 'font-normal text-sm',
          description: 'font-medium text-xs text-contrast-400',
          error: 'group error bg-error-highlight',
          success: 'group success bg-success-highlight',
          warning: 'group warning bg-warning-highlight',
          info: 'group info bg-background',
          icon: 'hidden',
          actionButton:
            'text-xs focus-visible:outline-none focus-visible:ring-2 ring-foreground font-semibold py-1.5 px-3 rounded-full text-nowrap hover:bg-foreground/5',
          cancelButton:
            'text-xs focus-visible:outline-none focus-visible:ring-2 ring-foreground font-semibold py-1.5 px-3 rounded-full text-nowrap hover:bg-foreground/5',
          closeButton:
            'h-8 w-8 focus-visible:outline-none focus-visible:ring-2 ring-foreground static order-last data-[close-button]:!bg-transparent hover:data-[close-button]:!bg-foreground/5 border-none align-middle translate-x-0 translate-y-0 rounded-full',
        },
      }}
      icons={{
        close: <XIcon strokeWidth={1.5} size={20} />,
      }}
      {...props}
    />
  )
}
