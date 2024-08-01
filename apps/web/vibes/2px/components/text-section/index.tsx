interface Props {
  heading: string
  text: string
}

export default function TextSection({ heading, text }: Props) {
  return (
    <section className="flex h-fit flex-col bg-primary p-2 font-medium text-foreground @lg:flex-row">
      <div className="flex h-[25rem] w-full items-center justify-center text-center font-heading text-4xl leading-[2.25rem] -tracking-[0.04rem]  @lg:h-[37.5rem] @lg:max-w-[90rem] @lg:text-6xl @lg:leading-[4rem] @lg:-tracking-[0.0675]">
        <h2>{heading}</h2>
      </div>
      <div className="flex font-body text-lg leading-[1.875rem] -tracking-[0.015] @lg:max-w-[44.5rem] @lg:items-center @lg:text-2xl @lg:leading-[2.25rem] @lg:-tracking-[0.0175rem]">
        <p>{text}</p>
      </div>
    </section>
  )
}
