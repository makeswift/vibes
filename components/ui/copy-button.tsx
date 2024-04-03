'use client'

import { ReactNode, useState } from 'react'

import { useToast } from '@/components/ui/use-toast'

import { Button } from './button'

interface Props {
  className?: string
  selectorFromParent?: string
}

export function CopyButton({ className, selectorFromParent = 'pre' }: Props) {
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
      Copy
    </button>
  )
}
