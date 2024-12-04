'use client'

import { CheckIcon, XIcon } from 'lucide-react'
import { Toaster as Sonner } from 'sonner'

type ToasterProps = React.ComponentProps<typeof Sonner>

export const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      toastOptions={{
        unstyled: true,
        classNames: {
          toast:
            'rounded-xl text-base px-3 py-2 min-w-[284px] max-w-[356px] flex items-center gap-2.5 focus-visible:outline-none focus-visible:ring-2 ring-foreground',
          error: 'group error bg-error-highlight',
          success: 'group success bg-success-highlight',
          warning: 'group warning bg-warning-highlight',
          info: 'group info bg-info-highlight',
          icon: 'me-2.5 h-7 w-7 rounded-full flex items-center justify-center group-[.error]:bg-error/50 group-[.success]:bg-success/50 group-[.warning]:bg-warning/50 group-[.info]:bg-info/50',
          actionButton:
            'border-contrast-200 border px-1.5 py-1 rounded-md text-sm focus-visible:outline-none focus-visible:ring-2 ring-foreground ms-auto',
          closeButton: 'focus-visible:outline-none focus-visible:ring-2 ring-foreground',
        },
      }}
      icons={{
        success: <CheckIcon strokeWidth={1.5} size={16} />,
        error: <CheckIcon strokeWidth={1.5} size={16} />,
        warning: <CheckIcon strokeWidth={1.5} size={16} />,
        info: <CheckIcon strokeWidth={1.5} size={16} />,
        close: <XIcon strokeWidth={1.5} size={12} />,
      }}
      {...props}
    />
  )
}
