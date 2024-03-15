import * as Accordion from '@radix-ui/react-accordion'

export function AccordionList({ children }: { children: React.ReactNode }) {
  return (
    <Accordion.Root className="w-full" type="multiple">
      {children}
    </Accordion.Root>
  )
}

export function AccordionItem({ children, value }: { children: React.ReactNode; value: string }) {
  return (
    <Accordion.Item className="group border border-black" value={value}>
      {children}
    </Accordion.Item>
  )
}

export function AccordionTrigger({ children }: { children: React.ReactNode }) {
  return (
    <Accordion.Header>
      <Accordion.Trigger asChild>
        <div className="flex w-full cursor-pointer items-center gap-x-4">
          <span className="flex-1 py-6 text-left font-sans text-2xl font-medium leading-tight text-black md:text-4xl">
            {children}
          </span>

          <div className="relative aspect-square w-[41px] rounded-full border border-black md:w-[51px]">
            <div className="absolute left-1/2 top-1/2 h-1/2 w-[1px] -translate-x-1/2 -translate-y-1/2 bg-black transition-transform duration-300 group-data-[state=open]:rotate-90" />
            <div className="absolute left-1/2 top-1/2 h-[1px] w-1/2 -translate-x-1/2 -translate-y-1/2 bg-black" />
          </div>
        </div>
      </Accordion.Trigger>
    </Accordion.Header>
  )
}

export function AccordionContent({ children }: { children: React.ReactNode }) {
  return (
    <Accordion.Content className="data-[state=closed]:animate-collapse data-[state=open]:animate-expand w-full overflow-hidden">
      <div className="pb-8">
        <p>{children}</p>
      </div>
    </Accordion.Content>
  )
}
