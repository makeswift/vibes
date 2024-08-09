'use client'

import * as AccordionRadix from '@radix-ui/react-accordion'

function AccordionGroup({ children }: { children: React.ReactNode }) {
  return (
    <AccordionRadix.Root className="my-8 w-full space-y-4 md:my-10" type="multiple">
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
      className="group pointer-events-none border border-dashed border-contrast-400 bg-background transition-all hover:border-foreground data-[state=open]:border-solid"
      value={value}
    >
      <AccordionRadix.Header asChild>
        <AccordionRadix.Trigger asChild>
          <div className="pointer-events-auto flex w-full cursor-pointer items-start gap-x-8 p-5">
            <span className="flex-1 font-bold leading-normal">{title}</span>

            <div className="relative aspect-square w-[16px]">
              <div className="absolute left-1/2 top-1/2 h-full w-[1.5px] -translate-x-1/2 -translate-y-1/2 bg-foreground transition-transform duration-300 group-data-[state=open]:rotate-90" />
              <div className="absolute left-1/2 top-1/2 h-[1.5px] w-full -translate-x-1/2 -translate-y-1/2 bg-foreground" />
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
