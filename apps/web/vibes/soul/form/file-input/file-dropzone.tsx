'use client';

import { clsx } from 'clsx';
import { useCallback, useState } from 'react';
import type {
  ClipboardEvent,
  ComponentPropsWithoutRef,
  DragEvent,
  KeyboardEvent,
  ReactNode,
  RefObject,
} from 'react';

export interface FileDropzoneProps extends ComponentPropsWithoutRef<'div'> {
  children?: ReactNode;
  inputRef: RefObject<HTMLInputElement | null>;
  disabled?: boolean;
  invalid?: boolean;
}

export function FileDropzone({
  id,
  children,
  inputRef,
  disabled,
  invalid,
  onDrop,
}: FileDropzoneProps) {
  const [isDragging, setIsDragging] = useState(false);

  const handleOnDrop = useCallback(
    (event: DragEvent<HTMLDivElement>) => {
      setIsDragging(false);
      onDrop?.(event);
    },
    [onDrop],
  );

  const handleOnDragOver = useCallback((event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(true);
  }, []);

  const handleOnDragEnter = useCallback((event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(true);
  }, []);

  const handleOnDragLeave = useCallback((event: DragEvent<HTMLDivElement>) => {
    const relatedTarget = event.relatedTarget;

    if (
      relatedTarget &&
      relatedTarget instanceof Node &&
      event.currentTarget.contains(relatedTarget)
    ) {
      return;
    }

    event.preventDefault();
    setIsDragging(false);
  }, []);

  const handleOnKeyDown = useCallback(
    (event: KeyboardEvent<HTMLDivElement>) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        inputRef.current?.click();
      }
    },
    [inputRef],
  );

  const handleOnPaste = useCallback(
    (event: ClipboardEvent<HTMLDivElement>) => {
      event.preventDefault();
      setIsDragging(false);

      const items = event.clipboardData.items;
      if (items.length === 0) return;

      const pastedFiles: File[] = [];

      for (const item of items) {
        if (item.kind === 'file') {
          const file = item.getAsFile();
          if (file) {
            pastedFiles.push(file);
          }
        }
      }

      if (pastedFiles.length === 0) return;

      const inputElement = inputRef.current;

      if (!inputElement) return;

      const dataTransfer = new DataTransfer();

      for (const file of pastedFiles) {
        dataTransfer.items.add(file);
      }

      inputElement.files = dataTransfer.files;
      inputElement.dispatchEvent(new Event('change', { bubbles: true }));
    },
    [inputRef],
  );

  const handleOnClick = useCallback(() => {
    inputRef.current?.click();
  }, [inputRef]);

  return (
    <div
      aria-controls={`${id}-input ${id}-list`}
      aria-disabled={disabled}
      className={clsx(
        'flex min-h-19 cursor-pointer flex-col items-center justify-center gap-1.5 rounded-lg border-[1.5px] border-dashed border-(--file-input-dropzone-border,var(--contrast-200)) bg-(--file-input-dropzone-background,var(--background)) p-4 transition-colors duration-300 ease-in-out select-none @sm:flex-row',
        // Hover styles
        'hover:border-(--file-input-dropzone-border-hover,var(--foreground)) hover:bg-(--file-input-dropzone-background-hover,var(--contrast-100))',
        // Focus styles
        'focus-visible:ring-2 focus-visible:ring-(--file-input-focus,var(--primary)) focus-visible:ring-offset-2 focus-visible:outline-hidden',
        // Disabled styles
        'data-[disabled]:cursor-not-allowed data-[disabled]:border-(--file-input-dropzone-border-disabled,color-mix(in_oklab,var(--contrast-200)_70%,transparent)) data-[disabled]:bg-(--file-input-dropzone-background-disabled,var(--background)) data-[disabled]:focus-visible:ring-0 data-[disabled]:focus-visible:ring-offset-0 data-[disabled]:focus-visible:outline-none',
        // Invalid styles
        'data-[invalid]:border-(--file-input-dropzone-border-error,var(--error))',
        // Dragging styles
        'data-[dragging]:border-(--file-input-dropzone-border-dragging,var(--foreground)) data-[dragging]:bg-(--file-input-dropzone-background-dragging,var(--success-highlight))',
      )}
      data-disabled={disabled === true ? '' : undefined}
      data-dragging={isDragging ? '' : undefined}
      data-invalid={invalid === true ? '' : undefined}
      id={`${id}-dropzone`}
      onClick={handleOnClick}
      onDragEnter={handleOnDragEnter}
      onDragLeave={handleOnDragLeave}
      onDragOver={handleOnDragOver}
      onDrop={handleOnDrop}
      onKeyDown={handleOnKeyDown}
      onPaste={handleOnPaste}
      role="button"
      tabIndex={0}
    >
      {children}
    </div>
  );
}
