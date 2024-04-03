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
        'ring-offset-docs-background hover:bg-docs-foreground/5 group inline-flex items-center justify-center gap-x-2 rounded-full border border-transparent p-3 text-sm font-semibold outline-none transition-colors focus-visible:rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500'
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
        <div className="bg-docs-background border-docs-foreground absolute bottom-0 left-0 h-3 w-3 rounded border"></div>
        <div className="bg-docs-background border-docs-foreground absolute right-0 top-0 h-3 w-3 rounded border transition-transform duration-150 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"></div>
      </div>
    </button>
  )
}
