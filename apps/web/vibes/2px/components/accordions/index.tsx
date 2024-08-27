'use client'

import * as AccordionPrimitive from '@radix-ui/react-accordion'

import { cn } from '@/lib/utils'
import { ChevronDownIcon } from '@/vibes/2px/components/icons/ChevronDownIcon'

export type Accordion = {
  title: string | React.ReactNode
  content: React.ReactNode
}

type Props =
  | {
      className?: string
      accordions: Accordion[]
      defaultValue?: string
      type: 'single'
    }
  | {
      className?: string
      accordions: Accordion[]
      defaultValue?: string[]
      type: 'multiple'
    }

export default function Accordions({ className, accordions, defaultValue, type }: Props) {
  type AccordionType = typeof type extends 'single'
    ? AccordionPrimitive.AccordionSingleProps
    : AccordionPrimitive.AccordionMultipleProps
  return (
    <AccordionPrimitive.Root
      type={type as AccordionType['type']}
      className={cn('w-full font-body @container', className)}
      defaultValue={defaultValue as AccordionType['defaultValue']}
      asChild
    >
      <ul className="relative w-full ">
        {accordions.map((accordion, i) => (
          <div key={i}>
            <AccordionPrimitive.Item value={`${i + 1}`} asChild>
              <li className="group relative pl-2 pr-2 pt-5 text-sm font-medium text-foreground @lg:pl-0 @lg:pt-10 @lg:text-lg">
                <AccordionPrimitive.Header>
                  <AccordionPrimitive.Trigger asChild>
                    <div className="flex w-full cursor-pointer items-center justify-between @lg:pr-5">
                      <div className="flex-grow text-left font-body">{accordion.title}</div>
                      <ChevronDownIcon
                        className="shrink-0 text-foreground group-data-[state=open]:rotate-180"
                        height={16}
                        width={16}
                      />
                    </div>
                  </AccordionPrimitive.Trigger>
                </AccordionPrimitive.Header>
                <AccordionPrimitive.Content className="mt-5 w-full overflow-hidden @lg:pr-5">
                  <div>{accordion.content}</div>
                </AccordionPrimitive.Content>
              </li>
            </AccordionPrimitive.Item>
            <div className="mt-5 h-0.5 w-full bg-foreground @lg:mt-10" />
          </div>
        ))}
      </ul>
    </AccordionPrimitive.Root>
  )
}
