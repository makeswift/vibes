'use client'

import React, { ReactNode, Ref, forwardRef } from 'react'

import * as Accordion from '@radix-ui/react-accordion'
import { clsx } from 'clsx'

export interface AccordionItem {
  title: ReactNode
  content: ReactNode
  defaultOpen?: boolean
}

interface Props {
  className?: string
  accordions: AccordionItem[]
  type?: 'single' | 'multiple'
}

export const Accordions = forwardRef(function Accordions(
  { className, accordions, type = 'multiple' }: Props,
  ref: Ref<HTMLDivElement>
) {
  return (
    <Accordion.Root
      className={className}
      type={type}
      ref={ref}
      defaultValue={accordions.reduce(
        (acc, accordion, i) => (accordion.defaultOpen != null ? [...acc, i.toString()] : acc),
        [] as string[]
      )}
      asChild
    >
      <ul className="w-full @container">
        {accordions.map((accordion, i) => (
          <Accordion.Item key={i} value={i.toString()} asChild>
            <li>
              <Accordion.Header>
                <Accordion.Trigger asChild>
                  <div className="group w-full cursor-pointer items-start gap-8 py-3 last:flex @md:py-5">
                    <h3 className="flex-1 select-none font-mono text-sm uppercase text-contrast-500 transition-colors duration-300 ease-out group-hover:text-foreground">
                      {accordion.title}
                    </h3>
                    <Chevron />
                  </div>
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="w-full overflow-hidden data-[state=closed]:animate-collapse data-[state=open]:animate-expand">
                <div
                  className={clsx(
                    'pb-4 font-body text-xl font-medium leading-tight text-foreground @md:text-2xl',
                    typeof accordion.content === 'string' ? '@md:w-5/6 @lg:w-3/4' : 'w-full'
                  )}
                >
                  {accordion.content}
                </div>
              </Accordion.Content>
            </li>
          </Accordion.Item>
        ))}
      </ul>
    </Accordion.Root>
  )
})

function Chevron(props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 10 10"
      width={16}
      className="mt-1 shrink-0 [&>line]:origin-center [&>line]:stroke-contrast-500 [&>line]:transition [&>line]:duration-300 [&>line]:ease-out [&>line]:group-hover:stroke-foreground"
      {...props}
    >
      {/* Left Line of Chevron */}
      <line
        x1={2}
        y1={2}
        x2={5}
        y2={5}
        className="group-data-[state=open]:-translate-y-[3px] group-data-[state=open]:-rotate-90"
        stroke="currentColor"
        strokeLinecap="round"
      />
      {/* Right Line of Chevron */}
      <line
        x1={8}
        y1={2}
        x2={5}
        y2={5}
        className="group-data-[state=open]:-translate-y-[3px] group-data-[state=open]:rotate-90"
        stroke="currentColor"
        strokeLinecap="round"
      />
    </svg>
  )
}
