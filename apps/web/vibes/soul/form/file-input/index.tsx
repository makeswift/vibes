'use client';

import clsx from 'clsx';
import { UploadIcon } from 'lucide-react';
import type { ChangeEvent, ComponentPropsWithRef, DragEvent } from 'react';
import { useCallback, useId, useRef } from 'react';

import { FileDropzone } from '@/vibes/soul/form/file-input/file-dropzone';
import { FileList } from '@/vibes/soul/form/file-input/file-list';
import { useFileInputActions, useFileInputStore } from '@/vibes/soul/form/file-input/store';
import { Label } from '@/vibes/soul/form/label';
import { Button } from '@/vibes/soul/primitives/button';
import { toast } from '@/vibes/soul/primitives/toaster';

export interface UploadOptions {
  onProgress: (file: File, progress: number) => void;
  onSuccess: (file: File) => void;
  onError: (file: File, error: Error) => void;
}

export interface FileState {
  progress: number;
  status: 'idle' | 'uploading' | 'success' | 'error';
  error?: string;
}

export interface FileInputProps extends ComponentPropsWithRef<'input'> {
  id?: string;
  className?: string;
  onUpload?: (files: File[], options: UploadOptions) => Promise<void> | void;
  onFileAccept?: (file: File) => void;
  onFileReject?: (file: File, message: string) => void;
  onFileValidate?: (file: File) => string | null | undefined;
  hideLabel?: boolean;
  message?: string;
  cta?: string;
  hint?: string;
  invalid?: boolean;
  label?: string;
  maxFiles?: number;
  maxSize?: number;
  uploadingLabel?: string;
  successLabel?: string;
  errorLabel?: string;
}

export function FileInput({
  id,
  hideLabel = false,
  message,
  invalid = false,
  cta = 'Upload file',
  label = 'File upload',
  hint = 'or drag and drop files here',
  maxFiles,
  maxSize,
  onFileAccept,
  onFileReject,
  onFileValidate,
  onUpload,
  className,
  disabled,
  accept,
  multiple,
  uploadingLabel = 'Uploading',
  successLabel = 'Upload complete',
  errorLabel = 'Error',
  ...props
}: FileInputProps) {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const generatedId = useId();

  const {
    setFiles: setStoreFiles,
    setProgress,
    setSuccess,
    setError,
    removeFile: removeStoreFile,
  } = useFileInputActions();

  const setFiles = useCallback(
    (newFiles: File[]) => {
      setStoreFiles(newFiles);

      const inputElement = inputRef.current;
      if (inputElement) {
        const dataTransfer = new DataTransfer();
        newFiles.forEach((file) => dataTransfer.items.add(file));
        inputElement.files = dataTransfer.files;
      }
    },
    [setStoreFiles],
  );

  const removeFile = useCallback(
    (fileToRemove: File) => {
      removeStoreFile(fileToRemove);

      const inputElement = inputRef.current;
      if (inputElement?.files) {
        const dataTransfer = new DataTransfer();
        const currentFiles = Array.from(inputElement.files);

        currentFiles
          .filter((file) => file !== fileToRemove)
          .forEach((file) => dataTransfer.items.add(file));

        inputElement.files = dataTransfer.files;
      }
    },
    [removeStoreFile],
  );

  const handleFiles = useCallback(
    (newFiles: File[]) => {
      const filesToUpload: File[] = [];

      const acceptedFiles = new Map<File, FileState>();

      newFiles.forEach((file) => {
        let rejected = false;
        let rejectionReason = '';

        if (onFileValidate) {
          const validationMessage = onFileValidate(file);
          if (validationMessage !== undefined && validationMessage !== null) {
            rejectionReason = validationMessage;
            rejected = true;
          }
        }

        if (!rejected && accept !== undefined) {
          const acceptTypes = accept.split(',').map((t) => t.trim().toLowerCase());

          const fileType = file.type.toLowerCase();
          const fileExtension = `.${file.name.split('.').pop()?.toLowerCase()}`;

          const isAccepted = acceptTypes.some(
            (type) =>
              type === fileType ||
              type === fileExtension ||
              (type.endsWith('/*') && fileType.startsWith(type.slice(0, -1))),
          );

          if (!isAccepted) {
            rejectionReason = 'File type not accepted';
            rejected = true;
          }
        }

        if (!rejected && maxSize !== undefined && file.size > maxSize) {
          rejectionReason = `File size exceeds limit`;
          rejected = true;
        }

        if (rejected) {
          if (onFileReject) {
            onFileReject(file, rejectionReason);
          } else {
            toast.error(`"${file.name}" was rejected`, {
              description: rejectionReason,
            });
          }
        } else {
          onFileAccept?.(file);
          filesToUpload.push(file);
          acceptedFiles.set(file, { progress: 0, status: 'idle' });
        }
      });

      const existingFiles = useFileInputStore.getState().files;
      const existingFilesList = Array.from(existingFiles.keys());
      const allFiles = [...existingFilesList, ...Array.from(acceptedFiles.keys())];
      const limitedFiles = maxFiles !== undefined ? allFiles.slice(0, maxFiles) : allFiles;

      setFiles(limitedFiles);

      if (filesToUpload.length > 0 && onUpload) {
        void onUpload(filesToUpload, {
          onProgress: (file, progress) => setProgress(file, progress),
          onSuccess: (file) => setSuccess(file),
          onError: (file, error) => setError(file, error.message),
        });
      }
    },
    [
      accept,
      maxSize,
      onFileAccept,
      onFileReject,
      onFileValidate,
      maxFiles,
      setFiles,
      setProgress,
      setSuccess,
      setError,
      onUpload,
    ],
  );

  const handleOnChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const newFiles = Array.from(event.target.files ?? []);

      handleFiles(newFiles);
    },
    [handleFiles],
  );

  const handleOnDrop = useCallback(
    (event: DragEvent<HTMLDivElement>) => {
      event.preventDefault();
      const newFiles = Array.from(event.dataTransfer.files);

      handleFiles(newFiles);
    },
    [handleFiles],
  );

  return (
    <div className={clsx(className, '@container')}>
      <Label
        className={clsx(hideLabel ? 'sr-only' : 'mb-2')}
        htmlFor={`${id ?? generatedId}-input`}
      >
        {label}
      </Label>
      <FileDropzone
        disabled={disabled}
        id={id ?? generatedId}
        invalid={invalid}
        onDrop={handleOnDrop}
        onFilesAdded={handleFiles}
        onTriggerClick={() => inputRef.current?.click()}
      >
        <Button
          aria-controls={`${id ?? generatedId}-input`}
          className="pointer-events-none"
          disabled={disabled}
          size="small"
          tabIndex={-1}
          type="button"
          variant="tertiary"
        >
          <UploadIcon className="size-5 text-(--file-input-trigger-icon,var(--foreground))" />
          {cta}
        </Button>
        <p
          className={clsx(
            'font-(family-name:--file-input-dropzone-message-font-family,var(--font-family-body)) text-sm font-normal text-(--file-input-dropzone-message,var(--contrast-500))',
            // Disabled styles
            'data-[disabled]:text-(--file-input-dropzone-message-disabled,color-mix(in_oklab,var(--contrast-500)_70%,transparent))',
          )}
          data-disabled={disabled === true ? '' : undefined}
          id={`${id ?? generatedId}-hint`}
        >
          {hint}
        </p>
        <input
          accept={accept}
          aria-describedby={`${id ?? generatedId}-hint${message !== undefined ? ` ${id ?? generatedId}-message` : ''}`}
          className="sr-only"
          id={`${id ?? generatedId}-input`}
          multiple={multiple}
          onChange={handleOnChange}
          ref={inputRef}
          tabIndex={-1}
          type="file"
          {...props}
        />
      </FileDropzone>
      {message != null && (
        <p
          className="mt-2 font-(family-name:--file-input-message-font-family,var(--font-family-body)) text-sm font-normal text-(--file-input-message,var(--contrast-500))"
          id={`${id ?? generatedId}-message`}
        >
          {message}
        </p>
      )}
      <FileList
        errorLabel={errorLabel}
        id={id ?? generatedId}
        onRemoveFile={removeFile}
        successLabel={successLabel}
        uploadingLabel={uploadingLabel}
      />
    </div>
  );
}
