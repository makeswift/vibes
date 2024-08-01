'use client'

import EmblaCarousel from '@/vibes/soul/components/hero/EmblaCarousel'
import '@/vibes/soul/styles.css'

export type HeroProps = {
  slides: {
    heading: string
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
export const Hero = function Hero({ slides }: HeroProps) {
  return (
    <header className="bg-primary-900 relative h-[100dvh] max-h-[880px] @container">
      <EmblaCarousel slides={slides} />
    </header>
  )
}

export default Hero
