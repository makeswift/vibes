interface Props {
  heading: string
  text: string
}

export default function TextSection({ heading, text }: Props) {
  return (
    <section className="flex h-fit w-full flex-col justify-center gap-5 bg-primary p-2 font-medium text-foreground @2xl:flex-row">
      <div className="flex aspect-square w-full items-center justify-center text-center font-heading text-4xl leading-[2.25rem] -tracking-[0.04rem] @2xl:max-w-[90rem] @2xl:text-6xl @2xl:leading-[4rem] @2xl:-tracking-[0.0675]">
        <h2>{heading}</h2>
      </div>
      <div className="flex font-body text-lg leading-[1.875rem] -tracking-[0.015] @2xl:max-w-[44.5rem] @2xl:items-center @2xl:text-2xl @2xl:leading-[2.25rem] @2xl:-tracking-[0.0175rem]">
        <p>{text}</p>
      </div>
    </section>
  )
}
