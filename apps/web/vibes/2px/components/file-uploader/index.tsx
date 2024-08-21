'use client'

import { useRef, useState } from 'react'

import { cn } from '@/lib/utils'
import { CheckIcon } from '@/vibes/2px/components/icons/CheckIcon'
import { CrossIcon } from '@/vibes/2px/components/icons/CrossIcon'

export interface Props extends Omit<React.HTMLProps<HTMLInputElement>, 'type' | 'ref'> {
  variant?: 'default' | 'success' | 'error'
  errorMessage?: string
}

export default function FileUploader({
  className,
  label,
  variant = 'default',
  errorMessage,
  onChange,
  placeholder,
  ...props
}: Props) {
  const inputRef = useRef<HTMLInputElement>(null)
  const [files, setFiles] = useState<
    | Array<{
        name: string
        size: number
        type: string
      }>
    | undefined
  >()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e)
    }

    setFiles(
      e.target.files?.length
        ? Array.from(e.target.files).map(file => ({
            name: file.name,
            size: file.size,
            type: file.type,
          }))
        : undefined
    )
  }

  const handleRemove: React.MouseEventHandler<HTMLButtonElement> = e => {
    e.stopPropagation()

    setFiles(undefined)
    if (inputRef.current) {
      inputRef.current.value = ''
      inputRef.current.dispatchEvent(new Event('change', { bubbles: true }))
    }
  }

  return (
    <div className="flex flex-col items-start gap-2 font-body text-xs font-medium">
      {label ? (
        <span className={cn('text-foreground', { 'text-contrast-300': props.disabled })}>
          {label}
        </span>
      ) : null}
      <label
        htmlFor={props.id}
        className={cn(
          className,
          'relative flex h-[3.75rem] w-[25rem] items-center border-2 p-3 focus-within:ring-2 focus-within:ring-accent',
          {
            'border-foreground text-foreground hover:border-dashed': !props.disabled,
            'border-contrast-300 text-contrast-300': props.disabled,
            'border-error': variant === 'error',
            'border-success': variant === 'success',
          }
        )}
      >
        <input type="file" className="hidden" onChange={handleChange} ref={inputRef} {...props} />
        {!files ? (
          <span>{placeholder || 'Choose file'}</span>
        ) : (
          <div className="flex w-fit items-center justify-center gap-3">
            <span>{files.map(file => file.name).join(', ')}</span>
            <button onClick={handleRemove} type="button">
              <CrossIcon className="h-4 w-4" />
            </button>
          </div>
        )}
        {variant === 'error' && <CrossIcon className="absolute right-3 h-4 w-4 text-error" />}
        {variant === 'success' && <CheckIcon className="absolute right-3 h-4 w-4 text-error" />}
      </label>
      {variant === 'error' && errorMessage && <span className="text-error">{errorMessage}</span>}
    </div>
  )
}
