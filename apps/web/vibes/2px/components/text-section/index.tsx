import { cn } from '@/lib/utils'

interface Props {
  className?: string
  heading: string
  text: string
}

export default function TextSection({ className, heading, text }: Props) {
  return (
    <section
      className={cn(
        'flex h-fit w-full flex-col justify-center gap-5 bg-primary p-2 font-medium text-foreground @2xl:flex-row',
        className
      )}
    >
      <div className="flex aspect-square w-full items-center justify-center text-center font-heading text-4xl leading-9 -tracking-[0.02em] @2xl:max-w-[90rem] @2xl:text-6xl @2xl:leading-[4rem]">
        <h2>{heading}</h2>
      </div>
      <div className="flex font-body text-lg leading-tight -tracking-[0.01em] @2xl:max-w-[44.5rem] @2xl:items-center @2xl:text-2xl @2xl:leading-9">
        <p>{text}</p>
      </div>
    </section>
  )
}
