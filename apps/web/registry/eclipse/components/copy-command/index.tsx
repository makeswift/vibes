'use client'

import { Ref, forwardRef } from 'react'
import { useEffect, useState } from 'react'

import clsx from 'clsx'

type Props = {
  buttonText: string
  className?: string
}

export const CopyCommand = forwardRef(function CopyCommand(
  { className, buttonText }: Props,
  ref: Ref<HTMLButtonElement>
) {
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    let timeoutId: NodeJS.Timeout

    if (copied) {
      timeoutId = setTimeout(() => {
        setCopied(false)
      }, 2500)
    }

    return () => {
      clearTimeout(timeoutId)
    }
  }, [copied])
  return (
    <button
      ref={ref}
      className={clsx(
        className,
        'group flex w-auto cursor-pointer items-center gap-x-3 rounded-full bg-muted-background/50 py-3 pl-6 pr-5 font-mono text-sm text-foreground ring-1 ring-foreground/20 transition ease-linear hover:ring-foreground/40'
      )}
      onClick={() => {
        navigator.clipboard.writeText(buttonText)
        setCopied(true)
      }}
    >
      <span className="opacity-70 transition group-hover:opacity-100">{buttonText}</span>

      <div className="relative h-4 w-4">
        <div
          className={clsx('relative h-full w-full transition', {
            '-translate-y-0 opacity-100': !copied,
            '-translate-y-full opacity-0': copied,
          })}
        >
          <div className="absolute bottom-0 left-0 h-3 w-3 rounded bg-foreground/50"></div>
          <div className="absolute right-0 top-0 h-3 w-3 rounded bg-foreground ring-1 ring-background transition-transform duration-150 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"></div>
        </div>

        <svg
          viewBox="0 0 16 16"
          className={clsx('absolute inset-0 h-4 w-4 transition', {
            'translate-y-full opacity-0': !copied,
            'translate-y-0 opacity-100': copied,
          })}
        >
          <path d="M1.5 7.5L6 12L14.5 3.5" className="stroke-foreground" strokeWidth="2" />
        </svg>
      </div>
    </button>
  )
})

export default CopyCommand
