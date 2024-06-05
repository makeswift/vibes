'use client'

import clsx from 'clsx'

import { useToast } from '@/components/ui/use-toast'

interface Props {
  className?: string
  selectorFromParent?: string
  children?: React.ReactNode
}

export function CopyButton({ className, selectorFromParent = 'pre', children }: Props) {
  const { toast } = useToast()

  return (
    <button
      className={clsx(
        className,
        'group/button inline-flex cursor-pointer items-center justify-center gap-x-2 rounded-full border border-transparent p-2 text-sm font-semibold outline-none ring-offset-docs-background transition-colors hover:bg-docs-foreground/5 focus-visible:rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:hover:bg-docs-foreground/15'
      )}
      onClick={({ currentTarget: { parentElement } }) => {
        const textContent = parentElement?.querySelector(selectorFromParent)?.textContent

        if (typeof textContent === 'string') {
          navigator.clipboard.writeText(textContent)

          toast({ title: 'Copied to clipboard' })
        }
      }}
    >
      {children}

      <div className="relative h-4 w-4">
        <div className="absolute bottom-0 left-0 h-3 w-3 rounded border border-docs-foreground bg-docs-background"></div>
        <div className="absolute right-0 top-0 h-3 w-3 rounded border border-docs-foreground bg-docs-background transition-transform duration-150 group-hover/button:-translate-y-0.5 group-hover/button:translate-x-0.5"></div>
      </div>
    </button>
  )
}
