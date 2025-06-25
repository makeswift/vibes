'use client';

import { ReactNode } from 'react';
import { ComponentProps } from 'react';
import { Toaster as Sonner, toast as SonnerToast } from 'sonner';

import { Alert } from '@/vibes/soul/primitives/alert';

export type ToasterProps = ComponentProps<typeof Sonner>;

interface ToastOptions {
  action?: {
    label: string;
    onClick: () => void;
  };
  description?: string;
  position?: ToasterProps['position'];
  dismissLabel?: string;
}

export const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      className="flex w-full flex-col items-end"
      toastOptions={{
        unstyled: true,
        classNames: {
          toast: 'group focus-visible:ring-0 w-full',
        },
      }}
      {...props}
    />
  );
};

export const toast = {
  success: (message: ReactNode, options?: ToastOptions) => {
    const position = options?.position;

    const toastId = SonnerToast(
      <Alert
        message={message}
        onDismiss={() => SonnerToast.dismiss(toastId)}
        variant="success"
        {...options}
      />,
      { position },
    );
  },
  error: (message: ReactNode, options?: ToastOptions) => {
    const position = options?.position;

    const toastId = SonnerToast(
      <Alert
        message={message}
        onDismiss={() => SonnerToast.dismiss(toastId)}
        variant="error"
        {...options}
      />,
      { position },
    );
  },
  warning: (message: ReactNode, options?: ToastOptions) => {
    const position = options?.position;

    const toastId = SonnerToast(
      <Alert
        message={message}
        onDismiss={() => SonnerToast.dismiss(toastId)}
        variant="warning"
        {...options}
      />,
      { position },
    );
  },
  info: (message: ReactNode, options?: ToastOptions) => {
    const position = options?.position;

    const toastId = SonnerToast(
      <Alert
        message={message}
        onDismiss={() => SonnerToast.dismiss(toastId)}
        variant="info"
        {...options}
      />,
      { position },
    );
  },
};
