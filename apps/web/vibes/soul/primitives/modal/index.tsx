import * as Dialog from '@radix-ui/react-dialog';
import { clsx } from 'clsx';
import { ReactNode } from 'react';

export interface ModalProps {
  isOpen: boolean;
  setOpen: (open: boolean) => void;
  title: string;
  trigger: ReactNode;
  children: ReactNode;
}

/**
 * This component supports various CSS variables for theming. Here's a comprehensive list, along
 * with their default values:
 *
 * ```css
 * :root {
 *   --modal-background: hsl(var(--background));
 *   --modal-overlay-background: hsl(var(--foreground)/50%);
 * }
 * ```
 */
export const Modal = function Modal({ isOpen, setOpen, title, trigger, children }: ModalProps) {
  return (
    <Dialog.Root onOpenChange={setOpen} open={isOpen}>
      <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-30 flex items-center justify-center bg-[var(--modal-overlay-background,hsl(var(--foreground)/50%))] @container">
          <Dialog.Content
            className={clsx(
              'mx-3 my-10 max-h-[90%] max-w-3xl overflow-y-auto rounded-xl bg-[var(--modal-background,hsl(var(--background)))] px-3 py-5 @sm:px-6 @sm:py-8 @5xl:px-20 @5xl:py-10',
              'transition ease-out',
              'data-[state=closed]:duration-200 data-[state=open]:duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out',
              'focus:outline-none data-[state=closed]:slide-out-to-bottom-16 data-[state=open]:slide-in-from-bottom-16',
            )}
            onOpenAutoFocus={(e) => e.preventDefault()}
          >
            <Dialog.Title className="sr-only">{title}</Dialog.Title>
            {children}
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
