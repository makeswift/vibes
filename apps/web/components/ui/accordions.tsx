'use client'

import * as AccordionRadix from '@radix-ui/react-accordion'

function AccordionGroup({ children }: { children: React.ReactNode }) {
  return (
    <AccordionRadix.Root className="my-8 w-full space-y-4" type="multiple">
      {children}
    </AccordionRadix.Root>
  )
}

function Accordion({
  title,
  children,
  value,
}: {
  title: string
  children: React.ReactNode
  value: string
}) {
  return (
    <AccordionRadix.Item
      className="pattern-shadow hover:pattern-shadow-hover pattern-shadow-sm border-docs-foreground bg-docs-background group pointer-events-none border"
      value={value}
    >
      <AccordionRadix.Header asChild>
        <AccordionRadix.Trigger asChild>
          <div className="pointer-events-auto flex w-full cursor-pointer items-center gap-x-8 p-5">
            <span className="flex-1 font-heading leading-normal">{title}</span>

            <div className="relative aspect-square w-[17px]">
              <div className="bg-docs-foreground absolute left-1/2 top-1/2 h-full w-[1px] -translate-x-1/2 -translate-y-1/2 transition-transform duration-300 group-data-[state=open]:rotate-90" />
              <div className="bg-docs-foreground absolute left-1/2 top-1/2 h-[1px] w-full -translate-x-1/2 -translate-y-1/2" />
            </div>
          </div>
        </AccordionRadix.Trigger>
      </AccordionRadix.Header>

      <AccordionRadix.Content className="w-full overflow-hidden data-[state=closed]:animate-collapse data-[state=open]:animate-expand">
        <div className="not-prose -mt-1 px-5 pb-5 font-light">{children}</div>
      </AccordionRadix.Content>
    </AccordionRadix.Item>
  )
}

export { AccordionGroup, Accordion }
