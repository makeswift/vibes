'use client'

import clsx from 'clsx'

import { useToast } from '@/components/ui/use-toast'

import { Button } from './button'

interface Props {
  className?: string
  clipboard: string
  children?: React.ReactNode
}

export function CopyButton({ className, clipboard, children }: Props) {
  const { toast } = useToast()

  return (
    <Button
      variant="ghost"
      size="icon"
      className={clsx('group/button', className)}
      onClick={() => {
        navigator.clipboard.writeText(clipboard)

        toast({ title: 'Copied to clipboard' })
      }}
    >
      {children}

      <div className="relative h-4 w-4">
        <div className="absolute bottom-0 left-0 h-3 w-3 rounded border-[1.5px] border-dashed border-foreground bg-background"></div>
        <div className="absolute right-0 top-0 h-3 w-3 rounded border-[1.5px] border-foreground bg-background transition-transform duration-150 group-hover/button:-translate-y-0.5 group-hover/button:translate-x-0.5"></div>
      </div>
    </Button>
  )
}
