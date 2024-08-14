import { cn } from '@/lib/utils'

interface Props {
  className?: string
  title: string
  subtitle?: string
  headline?: string
}

export default function SectionHeader({ className, title, headline, subtitle }: Props) {
  return (
    <section
      className={cn(
        'flex w-full flex-col items-center justify-center gap-20 border-b-2 border-foreground bg-background px-2.5 py-28 text-center text-foreground @lg:py-20',
        className
      )}
    >
      <p className="font-mono text-xs uppercase leading-[1.125rem] @lg:text-sm @lg:leading-tight @lg:tracking-[0.02em]">
        {headline}
      </p>
      <h2 className="w-full font-heading text-3xl font-medium leading-[2.125rem] -tracking-[0.02em] @lg:text-6xl @lg:leading-[4rem]">
        {title}
      </h2>
      <p className="font-mono text-xs uppercase leading-[1.125rem] @lg:text-sm @lg:leading-tight @lg:tracking-[0.02em]">
        {subtitle}
      </p>
    </section>
  )
}
