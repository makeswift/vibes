'use client'

import { ReactNode, Ref, forwardRef, useState } from 'react'

import clsx from 'clsx'

import Button from '../button'
import Card from '../card'

type Feature = {
  text?: ReactNode
}

type Card = {
  name?: ReactNode
  hidePrice?: boolean
  monthlyPrice?: string
  annualPrice?: string
  discount?: ReactNode
  mainFeatures?: Feature[]
  children?: ReactNode
  ctaLink?: {
    href: string
    target?: '_self' | '_blank'
  }
  ctaText?: ReactNode
  topGlow?: boolean
}

type Props = {
  className?: string
  cards?: Card[]
}

const PricingCards = forwardRef(function PricingCards(
  { className }: Props,
  ref: Ref<HTMLDivElement>
) {
  const [isAnnual, setIsAnnual] = useState(true)

  const cards: Card[] = [
    {
      name: 'Basic',
      hidePrice: false,
      monthlyPrice: '$9.99',
      annualPrice: '$99.99',
      discount: '20',
      mainFeatures: [{ text: 'Feature 1' }, { text: 'Feature 2' }, { text: 'Feature 3' }],
      ctaLink: {
        href: '/subscribe/basic',
        target: '_self',
      },
      ctaText: 'Subscribe',
      topGlow: true,
    },
    {
      name: 'Pro',
      hidePrice: false,
      monthlyPrice: '$19.99',
      annualPrice: '$199.99',
      discount: '30',
      mainFeatures: [{ text: 'Feature 1' }, { text: 'Feature 2' }, { text: 'Feature 3' }],
      ctaLink: {
        href: '/subscribe/pro',
        target: '_self',
      },
      ctaText: 'Subscribe',
      topGlow: false,
    },
    {
      name: 'Premium',
      hidePrice: false,
      monthlyPrice: '$29.99',
      annualPrice: '$299.99',
      discount: '40',
      mainFeatures: [{ text: 'Feature 1' }, { text: 'Feature 2' }, { text: 'Feature 3' }],
      ctaLink: {
        href: '/subscribe/premium',
        target: '_self',
      },
      ctaText: 'Subscribe',
      topGlow: true,
    },
  ]

  return (
    <div ref={ref} className={clsx(className, '@container')}>
      <div className="@4xl:flex-row @6xl:gap-10 flex flex-col gap-8">
        {cards?.map((card, index) => (
          <div
            key={index}
            className="card relative flex flex-1 flex-col items-start justify-between p-8"
          >
            {card.topGlow && (
              <div className="before:rounded-circle @4xl:block absolute inset-x-6 bottom-full hidden h-20 overflow-hidden before:mx-auto before:mt-14 before:block before:h-full before:w-3/5 before:bg-primary before:opacity-25 before:blur-xl after:absolute after:bottom-0 after:h-[1px] after:w-full after:bg-gradient-to-r after:from-primary/0 after:via-primary after:to-primary/0 after:mix-blend-overlay" />
            )}

            <div className="w-full">
              <div className="mb-2 text-xl font-medium leading-normal text-primary">
                {card.name}
              </div>

              <div className="flex items-center gap-3">
                <div className="@2xl:text-3xl @3xl:text-4xl text-2xl font-medium tabular-nums tracking-tight text-foreground">
                  {!card.hidePrice && '$'}
                  {isAnnual ? card.annualPrice : card.monthlyPrice}
                  {!card.hidePrice && (
                    <span className="@5xl:text-3xl text-2xl text-foreground/60">/month</span>
                  )}
                </div>

                <div
                  className={clsx(
                    'rounded-full bg-primary px-2 py-1 text-xs transition-all duration-300 ease-linear',
                    isAnnual && !card.hidePrice
                      ? 'translate-y-0 opacity-100'
                      : 'translate-y-2 opacity-0'
                  )}
                >
                  -{card.discount}%
                </div>
              </div>

              <ul className="mb-7 mt-5 space-y-2 text-lg text-muted-foreground">
                {card.mainFeatures?.map((feature, index) => (
                  <li key={index} className="">
                    {feature.text}
                  </li>
                ))}
              </ul>

              {card.children}
            </div>

            <Button link={card.ctaLink} className="mt-8" variant="primary">
              {card.ctaText}
            </Button>
          </div>
        ))}
      </div>
    </div>
  )
})
export default PricingCards
