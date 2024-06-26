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

export const PricingCards = forwardRef(function PricingCards(
  { className, cards }: Props,
  ref: Ref<HTMLDivElement>
) {
  const [isAnnual, setIsAnnual] = useState(true)

  return (
    <div ref={ref} className={clsx(className, '@container')}>
      <div className="flex flex-col gap-6 @4xl:flex-row @6xl:gap-8">
        {cards?.map((card, index) => (
          <div
            key={index}
            className="relative flex w-full flex-1 flex-col items-start justify-between rounded-2xl bg-muted-background/50 p-8 text-foreground ring-1 ring-foreground/20 @sm:rounded-3xl @6xl:flex-row"
          >
            {card.topGlow && (
              <div className="absolute inset-x-6 bottom-full hidden h-20 overflow-hidden before:mx-auto before:mt-14 before:block before:h-full before:w-3/5 before:rounded-full before:bg-primary before:opacity-25 before:blur-xl after:absolute after:bottom-0 after:h-[1px] after:w-full after:bg-gradient-to-r after:from-primary/0 after:via-primary after:to-primary/0 after:mix-blend-overlay @4xl:block" />
            )}

            <div className="w-full">
              <div className="mb-2 text-xl font-medium leading-normal text-primary">
                {card.name}
              </div>

              <div className="flex items-center gap-3">
                <div className="text-2xl font-medium tabular-nums tracking-tight text-foreground @2xl:text-3xl @3xl:text-4xl">
                  {isAnnual ? card.annualPrice : card.monthlyPrice}
                  {!card.hidePrice && (
                    <span className="text-xl text-foreground/50 @5xl:text-2xl">/mo</span>
                  )}
                </div>

                <div
                  className={clsx(
                    'rounded-full bg-primary px-2 py-1 text-xs font-bold text-background transition-all duration-300 ease-linear',
                    isAnnual && !card.hidePrice
                      ? 'translate-y-0 opacity-100'
                      : 'translate-y-2 opacity-0'
                  )}
                >
                  -{card.discount}%
                </div>
              </div>

              <ul className="mb-7 mt-5 space-y-2 text-lg text-foreground">
                {card.mainFeatures?.map((feature, index) => (
                  <li key={index} className="">
                    {feature.text}
                  </li>
                ))}
              </ul>

              {card.children}
            </div>

            <Button link={card.ctaLink} className="mt-5" variant="primary" borderGlow={false}>
              {card.ctaText}
            </Button>
          </div>
        ))}
      </div>
    </div>
  )
})
export default PricingCards
