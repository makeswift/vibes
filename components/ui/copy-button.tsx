'use client'

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
      className={className}
      onClick={({ currentTarget: { parentElement } }) => {
        const textContent = parentElement?.querySelector(selectorFromParent)?.textContent

        if (typeof textContent === 'string') {
          navigator.clipboard.writeText(textContent)

          toast({ title: 'Copied to clipboard' })
        }
      }}
    >
      {children}
    </button>
  )
}
