import * as Accordion from '@radix-ui/react-accordion'

import { cn } from '@/lib/utils'
import { ChevronDownIcon } from '@/vibes/2px/components/icons/ChevronDownIcon'

type AccordionItem = {
  title: React.ReactNode
  body: React.ReactNode
}

interface Props {
  className?: string
  accordions: AccordionItem[]
  type?: 'single' | 'multiple'
}

const Accordions = ({ className, accordions, type = 'multiple' }: Props) => {
  return (
    <Accordion.Root type={type} className={cn('w-full font-body @container', className)} asChild>
      <ul className="relative w-full ">
        {accordions.map((accordion, i) => (
          <div key={i}>
            <Accordion.Item value={`${i + 1}`} asChild>
              <li className="group relative pl-2 pr-2 pt-5 text-sm font-medium text-foreground @lg:pl-0 @lg:pt-10 @lg:text-lg">
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
              </li>
            </Accordion.Item>
            <div className="mb-5 mt-5 h-[2px] w-full bg-foreground @lg:mt-10" />
          </div>
        ))}
      </ul>
    </Accordion.Root>
  )
}

export default Accordions
