import { clsx } from 'clsx'
import { AlertTriangle, Check, X } from 'lucide-react'

interface Props {
  variant: 'error' | 'success' | 'warning'
  message: string
}

export const Alert = function Alert({ variant, message }: Props) {
  return (
    <div>
      <div
        role="alert"
        aria-live="assertive"
        className={clsx(
          'relative flex min-w-64 max-w-96 justify-between rounded-xl p-3',
          variant === 'error' && 'bg-error-highlight bg-opacity-50',
          variant === 'success' && 'bg-success-highlight',
          variant === 'warning' && 'bg-warning-highlight'
        )}
      >
        <div className="flex items-center gap-2">
          <div
            className={clsx(
              'flex h-5 w-5 items-center justify-center rounded-full text-foreground',
              variant === 'error' && 'bg-error/50',
              variant === 'success' && 'bg-success/50',
              variant === 'warning' && 'bg-warning/50'
            )}
          >
            {variant === 'error' && <X size={12} strokeWidth={1} />}
            {variant === 'success' && <Check size={12} strokeWidth={1} />}
            {variant === 'warning' && <AlertTriangle size={12} strokeWidth={1} />}
          </div>
          <span className="text-xs leading-tight text-foreground">{message}</span>
        </div>
        <button
          aria-label="Dismiss alert"
          // onClick={}
          className="flex items-center justify-center rounded-full text-foreground"
        >
          <X size={20} strokeWidth={1} />
        </button>
      </div>
    </div>
  )
}
