import Accordions, { AccordionItem } from '@/vibes/2px/components/accordions'

interface Props {
  title: string
  items: AccordionItem[]
}

export default function FAQSection({ title, items }: Props) {
  return (
    <section className="flex w-full flex-col items-center bg-background text-foreground @lg:flex-row">
      <div className="flex h-[15rem] items-center justify-center text-center font-heading text-3xl leading-[2.125rem] -tracking-[0.0375rem]  @lg:h-full @lg:w-full @lg:max-w-[90rem] @lg:text-6xl @lg:leading-[4rem] @lg:-tracking-[0.0675rem]">
        <h2>{title}</h2>
      </div>
      <div className="h-[2px] w-full bg-foreground @lg:hidden" />
      <div className="@lg:w-max-[90rem] w-full">
        <Accordions accordions={items} />
      </div>
    </section>
  )
}
