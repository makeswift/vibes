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
            'rounded-xl p-3 min-w-[284px] max-w-[356px] flex items-center gap-2.5 focus-visible:outline-none focus-visible:ring-2 ring-foreground flex',
          content: 'grow',
          title: 'font-normal text-sm leading-5',
          description: 'font-normal text-xs leading-5',
          error: 'group error bg-error-highlight',
          success: 'group success bg-success-highlight',
          warning: 'group warning bg-warning-highlight',
          info: 'group info bg-info-highlight',
          icon: 'hidden',
          actionButton:
            'text-xs focus-visible:outline-none focus-visible:ring-2 ring-foreground font-semibold leading-5 p-0.5 rounded-md text-nowrap',
          cancelButton:
            'text-xs focus-visible:outline-none focus-visible:ring-2 ring-foreground font-semibold leading-5 p-0.5 rounded-md text-nowrap',
          closeButton:
            'focus-visible:outline-none focus-visible:ring-2 ring-foreground static order-last data-[close-button]:!bg-transparent hover:data-[close-button]:bg-transparent border-none align-middle translate-x-0 translate-y-0 rounded-md',
        },
      }}
      icons={{
        close: <XIcon strokeWidth={1.5} size={20} />,
      }}
      {...props}
    />
  )
}
