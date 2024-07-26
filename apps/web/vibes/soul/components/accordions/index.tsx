'use client'

import React, { ReactNode, Ref, forwardRef } from 'react'

import * as Accordion from '@radix-ui/react-accordion'
import clsx from 'clsx'

import './styles.css'

type AccordionItem = {
  title: ReactNode
  body: ReactNode
}

type Props = {
  className?: string
  accordions: AccordionItem[]
  type?: 'single' | 'multiple'
}

export const Accordions = forwardRef(function Accordions(
  { className, accordions, type = 'multiple' }: Props,
  ref: Ref<HTMLDivElement>
) {
  return (
    <Accordion.Root type={type} ref={ref} className={clsx(className, 'font-body')} asChild>
      <ul className="w-full @container">
        {accordions.map((accordion, i) => (
          <Accordion.Item key={i} value={`${i + 1}`} asChild>
            <li className="accordion group">
              <Accordion.Header>
                <Accordion.Trigger asChild>
                  <div className="flex w-full cursor-pointer items-center gap-x-8 px-6">
                    <div className="flex-1 py-1 font-mono text-xs uppercase text-contrast-400 transition-colors duration-300 ease-out group-hover:text-foreground @md:text-sm">
                      {accordion.title}
                    </div>

                    <button className="shrink-0 p-3">
                      {/* Chevron */}
                      <svg viewBox="0 0 10 10" width="16">
                        <line
                          x1="2"
                          y1="2"
                          x2="5"
                          y2="5"
                          className="chevron-line left-line"
                          strokeLinecap="round"
                        ></line>
                        <line
                          x1="8"
                          y1="2"
                          x2="5"
                          y2="5"
                          className="chevron-line right-line"
                          strokeLinecap="round"
                        ></line>
                      </svg>
                    </button>
                  </div>
                </Accordion.Trigger>
              </Accordion.Header>

              <Accordion.Content className="w-full overflow-hidden data-[state=closed]:animate-collapse data-[state=open]:animate-expand">
                <div className="px-6 py-4 text-xl font-medium leading-tight text-foreground @md:w-3/4 @md:py-6 @md:text-2xl">
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
