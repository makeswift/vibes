'use client';

import { clsx } from 'clsx';
import {
  FileArchive,
  FileAudio,
  FileCode,
  FileCog,
  FileIcon,
  FileImage,
  FileText,
  FileVideo,
  XIcon,
} from 'lucide-react';
import { ComponentPropsWithoutRef, useEffect } from 'react';

import { FileInputProps } from '@/vibes/soul/form/file-input';
import { useFileInputActions, useFileState } from '@/vibes/soul/form/file-input/store';
import { Button } from '@/vibes/soul/primitives/button';

export interface FileItemProps
  extends ComponentPropsWithoutRef<'div'>,
    Pick<FileInputProps, 'uploadingLabel' | 'successLabel' | 'errorLabel'> {
  file: File;
  onRemoveFile: (file: File) => void;
}

export function FileItem({
  id,
  file,
  onRemoveFile,
  uploadingLabel,
  successLabel,
  errorLabel,
}: FileItemProps) {
  const fileState = useFileState(file);
  const { setHasAnimated } = useFileInputActions();

  useEffect(() => {
    if (fileState && !fileState.hasAnimated) {
      setTimeout(() => {
        setHasAnimated(file);
      }, 300);
    }
  }, [fileState, setHasAnimated, file]);

  if (!fileState) {
    return null;
  }

  const { progress, status, error, hasAnimated } = fileState;

  const { name, size } = file;

  return (
    <div
      aria-describedby={`${id}-status${error != null ? ` ${id}-error` : ''}`.trim()}
      aria-labelledby={`${id}-name`}
      className={clsx(
        'relative flex items-center justify-between gap-2 overflow-hidden rounded-lg border-[1.5px] border-(--file-input-item-border,var(--contrast-200)) p-4',
        // Animation styles
        !hasAnimated && 'fade-in-0 slide-in-from-top-2 animate-in',
        // Invalid styles
        'data-[invalid]:border-(--file-input-item-border-error,var(--error))',
      )}
      data-invalid={fileState.status === 'error' ? '' : undefined}
      id={id}
      role="listitem"
    >
      {/* File metadata */}
      <div className="flex min-w-0 flex-1 flex-col">
        <div className="flex-1">
          <div className="flex items-center gap-1 font-(family-name:--file-input-item-name-font-family,var(--font-family-body))">
            {getFileIcon(file)}
            <p
              className="font-sm truncate font-semibold text-(--file-input-item-name,var(--foreground))"
              id={`${id}-name`}
            >
              {name}
            </p>
          </div>
          {status === 'idle' && (
            <p
              className="text-xs font-normal text-(--file-input-item-status,var(--contrast-500))"
              id={`${id}-status`}
            >
              {formatBytes(size)}
            </p>
          )}
          {status === 'uploading' && (
            <p
              className="text-xs font-normal text-(--file-input-item-status,var(--contrast-500))"
              id={`${id}-status`}
            >
              {uploadingLabel}
            </p>
          )}
          {status === 'success' && (
            <p
              className="text-xs font-normal text-(--file-input-item-status,var(--contrast-500))"
              id={`${id}-status`}
            >
              {successLabel}
            </p>
          )}
          {status === 'error' && (
            <p
              className="text-xs font-normal text-(--file-input-item-status-error,var(--error))"
              id={`${id}-error`}
            >
              {error ?? errorLabel}
            </p>
          )}
        </div>
      </div>
      {/* Remove file button */}
      <Button
        aria-controls={id}
        aria-describedby={`${id}-name`}
        onClick={() => onRemoveFile(file)}
        shape="circle"
        size="x-small"
        type="button"
        variant="ghost"
      >
        <XIcon className="size-5 text-(--file-input-item-delete-icon,var(--foreground))" />
      </Button>
      {/* Progress bar */}
      {status === 'uploading' && (
        <div
          aria-labelledby={`${id}-name`}
          aria-valuemax={100}
          aria-valuemin={0}
          aria-valuenow={progress}
          aria-valuetext={`${progress}%`}
          className="absolute bottom-0 left-0 h-1 w-full bg-(--file-input-item-progress,var(--primary)) transition-transform duration-300 ease-linear"
          role="progressbar"
          style={{ transform: `translateX(-${100 - progress}%)` }}
        />
      )}
    </div>
  );
}

function formatBytes(bytes: number) {
  if (bytes === 0) return '0 B';
  const sizes = ['B', 'KB', 'MB', 'GB', 'TB'];
  const i = Math.floor(Math.log(bytes) / Math.log(1024));
  return `${(bytes / 1024 ** i).toFixed(i ? 1 : 0)} ${sizes[i]}`;
}

function getFileIcon(file: File) {
  const type = file.type;

  const extension = file.name.split('.').pop()?.toLowerCase() ?? '';

  if (type.startsWith('image/')) {
    return <FileImage className="size-4 text-(--file-input-mime-icon,var(--contrast-400))" />;
  }

  if (type.startsWith('video/')) {
    return <FileVideo className="size-4 text-(--file-input-mime-icon,var(--contrast-400))" />;
  }

  if (type.startsWith('audio/')) {
    return <FileAudio className="size-4 text-(--file-input-mime-icon,var(--contrast-400))" />;
  }

  if (type.startsWith('text/') || ['txt', 'md', 'rtf', 'pdf'].includes(extension)) {
    return <FileText className="size-4 text-(--file-input-mime-icon,var(--contrast-400))" />;
  }

  if (
    [
      'html',
      'css',
      'js',
      'jsx',
      'ts',
      'tsx',
      'json',
      'xml',
      'php',
      'py',
      'rb',
      'java',
      'c',
      'cpp',
      'cs',
    ].includes(extension)
  ) {
    return <FileCode className="size-4 text-(--file-input-mime-icon,var(--contrast-400))" />;
  }

  if (['zip', 'rar', '7z', 'tar', 'gz', 'bz2'].includes(extension)) {
    return <FileArchive className="size-4 text-(--file-input-mime-icon,var(--contrast-400))" />;
  }

  if (
    ['exe', 'msi', 'app', 'apk', 'deb', 'rpm'].includes(extension) ||
    type.startsWith('application/')
  ) {
    return <FileCog className="size-4 text-(--file-input-mime-icon,var(--contrast-400))" />;
  }

  return <FileIcon className="size-4 text-(--file-input-mime-icon,var(--contrast-400))" />;
}
