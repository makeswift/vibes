'use client'

import { useEffect, useRef, useState } from 'react'

import * as RadixTabs from '@radix-ui/react-tabs'

import { cn } from '@/lib/utils'

type Tab = {
  value?: string
  content?: React.ReactNode
}

export type Props = {
  className?: string
  defaultValue?: string
  tabs?: Tab[]
  label?: string
  onValueChange?: (value: string) => void
  value?: string
}

export default function Tabs({ className, tabs, onValueChange, value }: Props) {
  const container = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!container.current) return

    const activeItem = container.current.querySelector(`[data-state="active"]`)

    if (!activeItem) return

    const activeItemRect = activeItem.getBoundingClientRect()
    const containerRect = container.current.getBoundingClientRect()
    const activeItemMid = activeItemRect.left + activeItemRect.width / 2
    const containerMid = containerRect.left + containerRect.width / 2

    container.current.scroll({
      left: container.current.scrollLeft + (activeItemMid - containerMid),
      behavior: 'smooth',
    })
  }, [value])

  return (
    <RadixTabs.Root
      className={cn(
        className,
        'w-full font-body text-2xl leading-9 -tracking-[0.01em] text-foreground @container'
      )}
      value={value}
      onValueChange={onValueChange}
    >
      <RadixTabs.List className="w-full bg-background">
        <div
          className="relative flex flex-col overflow-auto px-6  @lg:flex-row"
          ref={container}
          style={
            {
              'scrollbar-width': 'none',
            } as React.CSSProperties
          }
        >
          {tabs?.map((tab, index) => (
            <RadixTabs.Trigger
              key={index}
              value={index.toString()}
              className={cn(
                'mt-5 w-full shrink-0 border-b-2 border-r-2 border-b-foreground border-r-foreground px-2.5 py-3 text-start hover:border-dashed @lg:w-[30rem]',
                Number(value) === index && 'bg-foreground text-background'
              )}
            >
              {tab.value}
            </RadixTabs.Trigger>
          ))}
        </div>
      </RadixTabs.List>
      {tabs?.map((tab, index) => (
        <RadixTabs.Content key={index} className="outline-none" value={index.toString()}>
          {tab.content}
        </RadixTabs.Content>
      ))}
    </RadixTabs.Root>
  )
}
