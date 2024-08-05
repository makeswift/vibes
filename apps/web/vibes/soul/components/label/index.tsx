import clsx from 'clsx'

export interface Label {
  label: string
  className?: string
}

export const Label = function Label({ label, className = '' }: Label) {
  return (
    <span
      className={clsx(
        'z-10 rounded-full bg-primary-highlight px-2.5 py-[3px] font-mono text-[13px] uppercase tracking-tighter text-foreground',
        className
      )}
    >
      {label}
    </span>
  )
}

export default Label
