import Button from '../button'

interface Props {
  text: string
  images: { small: { url: string; alt: string }; large: { url: string; alt: string } }
  ctas: [{ label: string; href: string }, { label: string; href: string }]
}

export default function CalloutSection({ text, images, ctas }: Props) {
  return (
    <section className="flex flex-col gap-5 bg-accent px-[0.62rem] py-5 font-body font-medium">
      <div className="w-full text-center text-3xl leading-[2.125rem] -tracking-[0.0375rem] @lg:text-6xl @lg:leading-[4rem] @lg:-tracking-[0.0675rem]">
        <p>{text}</p>
      </div>
      <div className="mx-auto">
        <img src={images.small.url} alt={images.small.alt} className="h-auto w-auto @md:hidden" />
        <img
          src={images.large.url}
          alt={images.large.alt}
          className="hidden h-auto w-auto @md:block"
        />
      </div>
      <div className="flex flex-col gap-4 @lg:flex-row">
        <Button asChild variant="primary" className="w-full py-[1.56rem] text-lg">
          <a href={ctas[0].href}>{ctas[0].label}</a>
        </Button>
        {ctas[1] && (
          <Button asChild variant="secondary" className="w-full bg-accent py-[1.56rem] text-lg">
            <a href={ctas[1].href}>{ctas[1].label}</a>
          </Button>
        )}
      </div>
    </section>
  )
}
