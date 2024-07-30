import { cn } from '@/lib/utils'

import { CheckIcon, CrossIcon } from '../icons'

interface Props {
  className?: string
  limitMessage?: string
  file?: File
  setFile: (file: File | undefined) => void
  variant: 'default' | 'success' | 'error'
  errorMessage?: string
  disabled?: boolean
}

export default function FileUploader({
  className,
  limitMessage,
  file = undefined,
  setFile,
  variant = 'default',
  errorMessage,
  disabled = false,
}: Props) {
  return (
    <div className="flex flex-col items-start gap-2 font-body text-xs font-medium">
      <span>{limitMessage}</span>
      <label
        htmlFor="file-input"
        className={cn(
          className,
          'relative flex h-[3.75rem] w-[25rem] items-center border-[2px] p-3 hover:border-dashed focus:ring-[2px] focus:ring-accent',
          {
            'border-foreground text-foreground': !disabled && variant === 'default',
            'border-contrast-300 text-contrast-300': disabled,
            'border-error': variant === 'error',
            'border-success': variant === 'success',
          }
        )}
      >
        <input
          type="file"
          id="file-input"
          className="hidden"
          onChange={e => setFile(e.target.files?.[0])}
        />
        <div className="flex w-fit items-center justify-center gap-3">
          {file ? <span>{file.name}</span> : <span>Choose file</span>}
          {file && (
            <button onClick={() => setFile(undefined)}>
              <CrossIcon className="h-4 w-4" />
            </button>
          )}
        </div>
        {variant === 'error' && <CrossIcon className="absolute right-3 h-4 w-4 text-error" />}
        {variant === 'success' && <CheckIcon className="absolute right-3 h-4 w-4 text-error" />}
      </label>
      {variant === 'error' && errorMessage && <span className="text-error">{errorMessage}</span>}
    </div>
  )
}
