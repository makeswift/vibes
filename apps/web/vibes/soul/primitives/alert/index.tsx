import { clsx } from 'clsx';
import { X } from 'lucide-react';

interface Props {
  variant: 'success' | 'warning' | 'error' | 'info';
  message: string;
  description?: string;
  dismissLabel?: string;
  action?: {
    label: string;
    onClick: () => void;
  };
  onDismiss?: () => void;
}

export function Alert({
  variant,
  message,
  description,
  action,
  dismissLabel = 'Dismiss',
  onDismiss,
}: Props) {
  return (
    <div
      className={clsx(
        'flex min-w-[284px] max-w-[356px] items-center justify-between gap-2 rounded-xl border border-foreground/10 py-3 pe-3 ps-4 shadow-sm ring-foreground group-focus-visible:outline-none group-focus-visible:ring-2',
        {
          success: 'bg-success-highlight',
          warning: 'bg-warning-highlight',
          error: 'bg-error-highlight',
          info: 'bg-background',
        }[variant],
      )}
      role="alert"
    >
      <div className="flex flex-col">
        <span className="text-sm font-normal text-foreground">{message}</span>
        {Boolean(description) && (
          <span className="text-xs font-medium text-contrast-400">{description}</span>
        )}
      </div>

      <div className="flex gap-1">
        {action && (
          <button
            className="flex items-center justify-center rounded-full border-none px-3 py-1.5 text-xs font-semibold ring-foreground hover:bg-foreground/5 focus-visible:outline-none focus-visible:ring-2"
            onClick={action.onClick}
          >
            {action.label}
          </button>
        )}

        <button
          aria-label={dismissLabel}
          className="flex h-8 w-8 items-center justify-center rounded-full border-none ring-foreground hover:bg-foreground/5 focus-visible:outline-none focus-visible:ring-2"
          onClick={onDismiss}
        >
          <X size={20} strokeWidth={1.5} />
        </button>
      </div>
    </div>
  );
}
