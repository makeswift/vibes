'use client'

import { ReactNode } from 'react'

import * as Accordion from '@radix-ui/react-accordion'
import clsx from 'clsx'

import { ChevronDownIcon } from '../icons'

type AccordionItem = {
  title: ReactNode
  body: ReactNode
}

interface Props {
  className?: string
  accordions: AccordionItem[]
  type?: 'single' | 'multiple'
}

const Accordions = ({ className, accordions, type = 'multiple' }: Props) => {
  return (
    <Accordion.Root type={type} className={clsx(className, 'font-body @container')} asChild>
      <ul className="relative w-full ">
        {accordions.map((accordion, i) => (
          <Accordion.Item key={i} value={`${i + 1}`} asChild>
            <li className="group relative px-2 pt-5 text-sm text-foreground @lg:pt-10 @lg:text-lg">
              <Accordion.Header>
                <Accordion.Trigger asChild>
                  <div className="flex w-full cursor-pointer items-center justify-between @lg:pr-5">
                    <div className="flex-grow text-left font-body ">{accordion.title}</div>

                    <button className="shrink-0">
                      <ChevronDownIcon
                        className="text-foreground group-data-[state=open]:rotate-180"
                        height={16}
                        width={16}
                      />
                    </button>
                  </div>
                </Accordion.Trigger>
              </Accordion.Header>

              <Accordion.Content className="mt-5 w-full overflow-hidden @lg:pr-5">
                <div className="">{accordion.body}</div>
              </Accordion.Content>

              <div className="mb-5 mt-5 h-[2px] w-full bg-foreground @lg:mt-10" />
            </li>
          </Accordion.Item>
        ))}
      </ul>
    </Accordion.Root>
  )
}

export default Accordions
