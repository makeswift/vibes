import Image from 'next/image'

import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'

import { HeroProps } from '@/vibes/soul/components/hero'

import { DotButton, useDotButton } from './EmblaCarouselProgressButton'

type Props = {
  slides: HeroProps['slides']
  className?: string
}

export const EmblaCarousel = function EmblaCarousel({ slides, className = '' }: Props) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()])

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi)

  return (
    <div className={className}>
      {/* Embla Wrapper*/}
      <div className="h-full flex-grow overflow-hidden" ref={emblaRef}>
        {/* Embla Flex Container */}
        <div className="flex h-full">
          {slides.map(({ heading, image }, idx) => {
            return (
              <div key={idx} className="relative shrink-0 grow-0 basis-full">
                <Image src={image.url} alt={image.alt} fill className="object-cover" />
                {heading && (
                  <h1 className="absolute bottom-10 left-1/2 z-10 w-full max-w-7xl -translate-x-1/2 px-3 text-5xl font-medium leading-none text-background @lg:bottom-24 @lg:px-20 @2xl:text-[90px]">
                    {heading}
                  </h1>
                )}
              </div>
            )
          })}
        </div>
      </div>

      <div className="absolute inset-x-3 bottom-0 flex justify-between pb-2 pt-4 @lg:inset-x-20 @lg:pb-8 @lg:pt-10">
        {/* Progress Buttons  */}
        <div>
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              totalItems={slides.length}
              index={index}
              selected={index === selectedIndex}
            />
          ))}
        </div>
        {/* Carousel Count - "01/03" */}
        <span className="font-mono">
          {selectedIndex + 1 < 10 ? `0${selectedIndex + 1}` : selectedIndex + 1}/
          {slides.length < 10 ? `0${slides.length}` : slides.length}
        </span>
      </div>
    </div>
  )
}

export default EmblaCarousel
