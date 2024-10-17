import Image from 'next/image'

import Button from '@/vibes/2px/components/button'

interface Props {
  text: string
  image: { src: string; alt: string; width: number; height: number }
  ctas: { primary: { label: string; href: string }; secondary?: { label: string; href: string } }
}

export default function CalloutSection({ text, image, ctas }: Props) {
  return (
    <section className="flex w-full flex-col gap-5 bg-accent px-2.5 py-5 font-body font-medium">
      <h3 className="w-full text-center text-3xl leading-[2.125rem] -tracking-[0.02em] text-foreground @lg:text-6xl @lg:leading-[4rem]">
        {text}
      </h3>
      <Image
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        className="mx-auto h-auto max-h-[21.25rem] w-auto max-w-full object-contain @xl:max-h-[37.5rem] "
      />
      <div className="flex flex-wrap gap-4">
        <Button variant="primary" className="w-full flex-1 py-6 text-lg">
          <a href={ctas.primary.href}>{ctas.primary.label}</a>
        </Button>
        {ctas.secondary && (
          <Button asChild variant="secondary" className="w-full flex-1 bg-accent py-6 text-lg">
            <a href={ctas.secondary?.href}>{ctas.secondary?.label}</a>
          </Button>
        )}
      </div>
    </section>
  )
}
