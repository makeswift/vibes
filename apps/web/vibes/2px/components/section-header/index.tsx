import { cn } from '@/lib/utils'

interface Props {
  className?: string
  heading: string
  tag: string
}

export default function SectionHeader({ className, heading, tag }: Props) {
  return (
    <section
      className={cn(
        className,
        'flex w-full flex-col items-center justify-center gap-20 border-b-2 border-foreground bg-background px-[0.625rem] py-[7.31rem] text-center text-foreground @lg:py-[5.5rem]'
      )}
    >
      <div className="@leading-[1.375rem] flex gap-4 font-mono text-xs uppercase leading-[1.125rem] tracking-[0.0225rem] @lg:text-sm">
        <span>{tag}</span>
        <span>{tag}</span>
        <span>{tag}</span>
      </div>
      <h2 className="w-full font-heading text-3xl font-medium leading-[2.125rem] -tracking-[0.0375rem] @lg:text-6xl @lg:leading-[4rem] @lg:-tracking-[0.0675rem]">
        {heading}
      </h2>
      <div className="@leading-[1.375rem] flex gap-4 font-mono text-xs uppercase leading-[1.125rem] tracking-[0.0225rem] @lg:text-sm">
        <span>{tag}</span>
        <span>{tag}</span>
        <span>{tag}</span>
      </div>
    </section>
  )
}
