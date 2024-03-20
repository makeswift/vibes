'use client'

import * as Accordion from '@radix-ui/react-accordion'

function AccordionList({ children }: { children: React.ReactNode }) {
  return (
    <Accordion.Root className="mt-5 w-full space-y-5" type="multiple">
      {children}
    </Accordion.Root>
  )
}

function AccordionItem({ children, value }: { children: React.ReactNode; value: string }) {
  return (
    <Accordion.Item
      className="pattern-shadow pattern-shadow-sm group border border-black bg-white p-5"
      value={value}
    >
      {children}
    </Accordion.Item>
  )
}

function AccordionTrigger({ children }: { children: React.ReactNode }) {
  return (
    <Accordion.Header asChild>
      <Accordion.Trigger asChild>
        <div className="flex w-full cursor-pointer items-center gap-x-4">
          <span className="flex-1 text-lg font-bold leading-normal">{children}</span>

          <div className="relative aspect-square w-[21px]">
            <div className="absolute left-1/2 top-1/2 h-full w-[1px] -translate-x-1/2 -translate-y-1/2 bg-black transition-transform duration-300 group-data-[state=open]:rotate-90" />
            <div className="absolute left-1/2 top-1/2 h-[1px] w-full -translate-x-1/2 -translate-y-1/2 bg-black" />
          </div>
        </div>
      </Accordion.Trigger>
    </Accordion.Header>
  )
}

function AccordionContent({ children }: { children: React.ReactNode }) {
  return (
    <Accordion.Content className="data-[state=closed]:animate-collapse data-[state=open]:animate-expand w-full overflow-hidden">
      <div className="pt-3 font-light">{children}</div>
    </Accordion.Content>
  )
}

export { AccordionList, AccordionItem, AccordionTrigger, AccordionContent }
