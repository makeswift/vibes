import React from 'react'

import * as AccordionsPrimitive from '@radix-ui/react-accordion'

export const Root = AccordionsPrimitive.Root

type Props = React.ComponentPropsWithoutRef<typeof AccordionsPrimitive.Item> & {
  /**
   * The title of the accordion item. It will be added to the accordion's header.
   */
  title: string

  children: React.ReactNode
}

export function Item({ title, children, ...rest }: Props) {
  return (
    <AccordionsPrimitive.Item {...rest}>
      <AccordionsPrimitive.Header>
        <AccordionsPrimitive.Trigger asChild>
          <div className="group w-full cursor-pointer items-start gap-8 py-3 last:flex @md:py-4">
            <h3 className="flex-1 select-none font-mono text-sm uppercase text-contrast-400 transition-colors duration-300 ease-out group-hover:text-foreground">
              {title}
            </h3>
            {/* Animated Chevron */}
            <svg
              viewBox="0 0 10 10"
              width={16}
              className="mt-1 shrink-0 [&>line]:origin-center [&>line]:stroke-contrast-500 [&>line]:transition [&>line]:duration-300 [&>line]:ease-out [&>line]:group-hover:stroke-foreground"
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
          </div>
        </AccordionsPrimitive.Trigger>
      </AccordionsPrimitive.Header>
      <AccordionsPrimitive.Content className="w-full overflow-hidden data-[state=closed]:animate-collapse data-[state=open]:animate-expand">
        <div className="w-full pb-5 font-body font-medium leading-normal text-foreground">
          {children}
        </div>
      </AccordionsPrimitive.Content>
    </AccordionsPrimitive.Item>
  )
}
