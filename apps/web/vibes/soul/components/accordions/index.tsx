'use client'

import React, { ReactNode, Ref, forwardRef } from 'react'

import * as Accordion from '@radix-ui/react-accordion'
import clsx from 'clsx'

import Chevron from '../icons/Chevron'

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
            <li className="group px-5">
              <Accordion.Header>
                <Accordion.Trigger asChild>
                  <div className="flex w-full cursor-pointer items-start py-3 @md:gap-8 @md:py-5">
                    <h3
                      className="mr-8 flex-1 select-none font-mono text-[13px] uppercase 
                      text-contrast-400 transition-colors duration-300 ease-out group-hover:text-foreground"
                    >
                      {accordion.title}
                    </h3>

                    <Chevron />
                  </div>
                </Accordion.Trigger>
              </Accordion.Header>

              <Accordion.Content
                className="w-full overflow-hidden 
                data-[state=closed]:animate-collapse data-[state=open]:animate-expand"
              >
                <p
                  className="py-4 text-xl font-medium leading-tight text-foreground 
                  @sm:w-5/6 @md:text-2xl"
                >
                  {accordion.body}
                </p>
              </Accordion.Content>
            </li>
          </Accordion.Item>
        ))}
      </ul>
    </Accordion.Root>
  )
})

export default Accordions
