'use client'

import { CSSProperties, ReactNode, Ref, forwardRef, useEffect, useRef, useState } from 'react'

import * as RadixTabs from '@radix-ui/react-tabs'
import clsx from 'clsx'

import { usePollAnimationFrame } from '@/lib/utils'

type Tab = {
  title?: string
  children?: ReactNode
}

export type Props = {
  className?: string
  tabs?: Tab[]
  ariaLabel?: string
}

const Tabs = forwardRef(function Tabs(
  { className, ariaLabel = 'Tabs' }: Props,
  ref: Ref<HTMLDivElement>
) {
  const container = useRef<HTMLDivElement>(null)
  const [activeItemLeft, setActiveItemLeft] = useState(0)
  const [activeItemWidth, setActiveItemWidth] = useState(0)
  const [value, setValue] = useState('0')

  usePollAnimationFrame(() => {
    if (!container.current) return

    const activeItem = container.current.querySelector(`[data-state="active"]`)

    if (!activeItem) return

    const activeItemRect = activeItem.getBoundingClientRect()
    const containerRect = container.current.getBoundingClientRect()

    setActiveItemLeft(activeItemRect.left - containerRect.left + container.current.scrollLeft)
    setActiveItemWidth(activeItemRect.width)
  })

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

  const tabs: Tab[] = [
    {
      title: 'Tab 1',
      children: <p>Tab 1 content</p>,
    },
    {
      title: 'Tab 2',
      children: <p>Tab 2 content</p>,
    },
    {
      title: 'Tab 3',
      children: <p>Tab 3 content</p>,
    },
  ]

  return (
    <RadixTabs.Root ref={ref} className={clsx(className)} value={value} onValueChange={setValue}>
      <RadixTabs.List
        className="fade-x relative flex shrink-0 justify-center"
        aria-label={ariaLabel}
      >
        <div
          className="no-scrollbar relative flex overflow-x-auto overflow-y-hidden px-6 before:pointer-events-none before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-[var(--active-item-width)] before:translate-x-[var(--active-item-left)] before:bg-gradient-to-r before:from-primary/0 before:via-primary/100 before:to-primary/0 before:transition-all before:duration-300 before:ease-in-out"
          ref={container}
          style={
            {
              '--active-item-left': `${activeItemLeft}px`,
              '--active-item-width': `${activeItemWidth}px`,
            } as CSSProperties
          }
        >
          {tabs?.map((tab, index) => (
            <RadixTabs.Trigger
              key={index}
              value={index.toString()}
              className="relative shrink-0 select-none items-center px-3.5 py-4 text-lg font-medium text-foreground/50 outline-none [clip-path:inset(0px_0px)] after:pointer-events-none after:absolute after:left-1/2 after:top-1/2 after:-z-10 after:h-[30px] after:w-1/2 after:-translate-x-1/2 after:translate-y-1/2 after:rounded-full after:bg-primary/50 after:opacity-0 after:blur-lg after:transition-all after:duration-500 after:ease-out hover:text-foreground/70 data-[state=active]:text-foreground data-[state=active]:after:opacity-100 data-[state=active]:after:delay-200 sm:px-5 [&_span]:data-[state=active]:-translate-y-1"
            >
              <span className="flex items-center gap-2 transition-all duration-300 ease-in-out">
                {tab.title}
              </span>
            </RadixTabs.Trigger>
          ))}
        </div>
      </RadixTabs.List>
      {tabs.map((tab, index) => (
        <RadixTabs.Content key={index} className="outline-none" value={index.toString()}>
          {tab.children}
        </RadixTabs.Content>
      ))}
    </RadixTabs.Root>
  )
})
export default Tabs
