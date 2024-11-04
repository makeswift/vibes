import Link from 'next/link'

import { Card, CardCarousel } from '@/vibes/soul/primitives/card-carousel'

interface Link {
  label: string
  href: string
}

interface Props {
  title: string
  description?: string
  cta?: Link
  cards: Card[]
}

export function FeaturedCardCarousel({ title, description, cta, cards }: Props) {
  return (
    <section className="overflow-hidden @container">
      <div className="mx-auto w-full max-w-screen-2xl px-4 py-10 @4xl:py-24">
        <div className="mb-6 flex w-full flex-row flex-wrap justify-between gap-5 text-foreground @4xl:mb-8 @4xl:items-end">
          <div className="flex flex-col gap-5">
            <h2 className="font-heading text-2xl font-medium leading-none">{title}</h2>
            {description != null && description !== '' && (
              <p className="max-w-md text-contrast-400">{description}</p>
            )}
          </div>
          {cta != null && cta.href !== '' && cta.label !== '' && (
            <Link
              href={cta.href}
              className="rounded-lg font-semibold text-foreground ring-primary focus-visible:outline-0 focus-visible:ring-2"
            >
              {cta.label}
            </Link>
          )}
        </div>
        <CardCarousel cards={cards} />
      </div>
    </section>
  )
}
