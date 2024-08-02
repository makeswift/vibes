'use client'

import EmblaCarousel from '@/vibes/soul/components/hero/EmblaCarousel'
import HeroMediaContainedLayout from '@/vibes/soul/components/hero/HeroMediaContainedLayout'
import '@/vibes/soul/styles.css'

export type HeroProps = {
  heading?: string
  slides: {
    heading?: string
    image: {
      url: string
      dimensions: {
        width: number
        height: number
      }
      alt: string
    }
    link: {
      href: string
      target: string
    }
  }[]
  containedMediaLayout?: boolean
}

// Hero Full Width Layout
export const Hero = function Hero({ heading, slides, containedMediaLayout }: HeroProps) {
  // TODO: what is the best way to organize and type these hero variants components?
  if (containedMediaLayout) {
    return <HeroMediaContainedLayout heading={heading || ''} slides={slides} />
  }

  return (
    <header className="bg-primary-900 relative h-[100dvh] max-h-[880px] @container">
      <EmblaCarousel slides={slides} className="h-full" />
    </header>
  )
}

export default Hero
