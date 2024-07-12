'use client'

import clsx from 'clsx'

import { useToast } from '@/components/ui/use-toast'

interface Props {
  className?: string
  clipboard: string
  children?: React.ReactNode
}

export function CopyButton({ className, clipboard, children }: Props) {
  const { toast } = useToast()

  return (
    <button
      className={clsx(
        className,
        'group/button inline-flex cursor-pointer items-center justify-center gap-x-2 rounded-full border border-transparent p-2 text-sm font-semibold outline-none ring-offset-background transition-colors hover:bg-foreground/5 focus-visible:rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:hover:bg-foreground/15'
      )}
      onClick={() => {
        navigator.clipboard.writeText(clipboard)

        toast({ title: 'Copied to clipboard' })
      }}
    >
      {children}

      <div className="relative h-4 w-4">
        <div className="absolute bottom-0 left-0 h-3 w-3 rounded border border-foreground bg-background"></div>
        <div className="absolute right-0 top-0 h-3 w-3 rounded border border-foreground bg-background transition-transform duration-150 group-hover/button:-translate-y-0.5 group-hover/button:translate-x-0.5"></div>
      </div>
    </button>
  )
}
