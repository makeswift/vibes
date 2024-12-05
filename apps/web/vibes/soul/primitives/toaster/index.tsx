'use client'

import { XIcon } from 'lucide-react'
import { Toaster as Sonner, toast as SonnerToast } from 'sonner'

import { Alert } from '@/vibes/soul/primitives/alert'

type ToasterProps = React.ComponentProps<typeof Sonner>

interface ToastOptions {
  action?: {
    label: string
    onClick: () => void
  }
  description?: string
  position?: ToasterProps['position']
  dismissLabel?: string
}

export const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      toastOptions={{
        unstyled: true,
        classNames: {
          toast: 'group focus-visible:ring-0',
        },
      }}
      icons={{
        close: <XIcon strokeWidth={1.5} size={20} />,
      }}
      {...props}
    />
  )
}

export const toast = {
  success: (message: string, options?: ToastOptions) => {
    const position = options?.position

    const toastId = SonnerToast(
      <Alert
        variant="success"
        message={message}
        onDismiss={() => SonnerToast.dismiss(toastId)}
        {...options}
      />,
      { position }
    )
  },
  error: (message: string, options?: ToastOptions) => {
    const position = options?.position

    const toastId = SonnerToast(
      <Alert
        variant="error"
        message={message}
        onDismiss={() => SonnerToast.dismiss(toastId)}
        {...options}
      />,
      { position }
    )
  },
  warning: (message: string, options?: ToastOptions) => {
    const position = options?.position

    const toastId = SonnerToast(
      <Alert
        variant="warning"
        message={message}
        onDismiss={() => SonnerToast.dismiss(toastId)}
        {...options}
      />,
      { position }
    )
  },
  info: (message: string, options?: ToastOptions) => {
    const position = options?.position

    const toastId = SonnerToast(
      <Alert
        variant="info"
        message={message}
        onDismiss={() => SonnerToast.dismiss(toastId)}
        {...options}
      />,
      { position }
    )
  },
}
