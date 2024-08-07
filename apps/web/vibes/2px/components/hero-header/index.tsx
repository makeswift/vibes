import Image from 'next/image'

import { cn } from '@/lib/utils'
import Button from '@/vibes/2px/components/button'

interface Props {
  className?: string
  heading: string
  text: string
  image: { src: string; alt: string; width: number; height: number }
  cta: {
    label: string
    href: string
  }
}

export default function HeroHeader({ className, heading, text, image, cta }: Props) {
  return (
    <section
      className={cn(
        className,
        'flex w-full flex-col items-center justify-center gap-4 border-b-2 border-foreground bg-background text-foreground '
      )}
    >
      <div className="relative aspect-[3/4] w-full @lg:aspect-video">
        <Image
          src={image.src}
          alt={image.alt}
          className="h-full w-full object-cover"
          width={image.width}
          height={image.height}
        />
      </div>
      <div className="px-2 py-4">
        <div className="flex flex-col  gap-3 @lg:flex-row @lg:gap-2">
          <h2 className="w-full font-heading text-3xl font-medium leading-[2.125rem] -tracking-[0.0375rem] @lg:text-6xl @lg:leading-[4rem] @lg:-tracking-[0.0675rem]">
            {heading}
          </h2>
          <span className="text-base font-medium leading-6 @lg:max-w-[50%] @lg:text-lg @lg:leading-[1.875rem] @lg:-tracking-[0.015rem]">
            {text}
          </span>
        </div>
        <Button
          className="mt-6 w-full text-lg font-medium leading-[1.875rem] -tracking-[0.015rem]"
          variant="secondary"
          asChild
        >
          <a href={cta.href}>{cta.label}</a>
        </Button>
      </div>
    </section>
  )
}
