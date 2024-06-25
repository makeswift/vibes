'use client'

import React, { ReactNode, Ref, forwardRef } from 'react'

import * as Accordion from '@radix-ui/react-accordion'
import clsx from 'clsx'

type AccordionItem = {
  title: ReactNode
  body: ReactNode
}

type Props = {
  className?: string
  accordions: AccordionItem[]
  type?: 'single' | 'multiple'
}

const Accordions = forwardRef(function Accordions(
  { className, accordions, type = 'multiple' }: Props,
  ref: Ref<HTMLDivElement>
) {
  return (
    <Accordion.Root type={type} ref={ref} className={clsx(className)} asChild>
      <ul className="relative w-full after:absolute after:inset-x-0 after:top-0 after:h-[1px] after:bg-gradient-to-r after:from-foreground/0 after:via-foreground after:to-foreground/0 after:opacity-20">
        {accordions.map((accordion, i) => (
          <Accordion.Item key={i} value={`${i + 1}`} asChild>
            <li className="group relative [clip-path:inset(0px_0px)] before:absolute before:left-1/2 before:top-full before:-z-10 before:h-[80px] before:w-3/5 before:-translate-x-1/2 before:-translate-y-1/4 before:rounded-full before:bg-primary before:opacity-0 before:blur-[100px] before:transition-all before:duration-1000 before:ease-out after:absolute after:inset-x-0 after:bottom-0 after:h-[1px] after:bg-gradient-to-r after:from-foreground/0 after:via-foreground after:to-foreground/0 after:opacity-20 after:mix-blend-overlay after:transition-all after:duration-300 after:ease-linear hover:after:opacity-40 data-[state=open]:before:opacity-100 before:data-[state=open]:delay-200">
              <Accordion.Header>
                <Accordion.Trigger asChild>
                  <div className="flex w-full cursor-pointer items-center gap-x-8 px-6">
                    <div className="flex-1 py-8 text-left text-lg font-medium leading-normal text-foreground md:text-2xl">
                      {accordion.title}
                    </div>

                    <button className="shrink-0 rounded-full p-3 ring-1 ring-foreground/20 transition duration-300 ease-in-out group-hover:ring-foreground/40">
                      <svg viewBox="0 0 16 16" className="h-4 w-4 fill-foreground">
                        <rect
                          x="7"
                          className="h-4 w-0.5 origin-center transition-transform duration-300 group-data-[state=open]:rotate-90"
                        />
                        <rect y="7" className="h-0.5 w-4" />
                      </svg>
                    </button>
                  </div>
                </Accordion.Trigger>
              </Accordion.Header>

              <Accordion.Content className="w-full overflow-hidden data-[state=closed]:animate-collapse data-[state=open]:animate-expand">
                <div className="text-md px-6 pb-6 leading-relaxed text-foreground/60 md:pb-8">
                  {accordion.body}
                </div>
              </Accordion.Content>
            </li>
          </Accordion.Item>
        ))}
      </ul>
    </Accordion.Root>
  )
})

export default Accordions
