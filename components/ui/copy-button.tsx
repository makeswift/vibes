'use client'

import { ReactNode, useState } from 'react'

import { useToast } from '@/components/ui/use-toast'

import { Button } from './button'

interface Props {
  className?: string
  clipboard: ReactNode
}

export function CopyButton({ className, clipboard }: Props) {
  const { toast } = useToast()

  console.log({ clipboard: clipboard?.toString() })

  return (
    <Button
      className={className}
      onClick={e => {
        if (typeof clipboard === 'string') {
          navigator.clipboard.writeText(clipboard)

          toast({ title: 'Copied to clipboard' })
        }
      }}
    >
      Copy
    </Button>
  )
}
