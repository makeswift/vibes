import React, { ComponentPropsWithRef, useCallback, useEffect, useState } from 'react'

import clsx from 'clsx'
import { EmblaCarouselType } from 'embla-carousel'

type UseDotButtonType = {
  selectedIndex: number
  scrollSnaps: number[]
  onDotButtonClick: (index: number) => void
}

export const useDotButton = (emblaApi: EmblaCarouselType | undefined): UseDotButtonType => {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

  const onDotButtonClick = useCallback(
    (index: number) => {
      if (!emblaApi) return
      emblaApi.scrollTo(index)
    },
    [emblaApi]
  )

  const onInit = useCallback((emblaApi: EmblaCarouselType) => {
    setScrollSnaps(emblaApi.scrollSnapList())
  }, [])

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    onInit(emblaApi)
    onSelect(emblaApi)
    emblaApi.on('reInit', onInit).on('reInit', onSelect).on('select', onSelect)
  }, [emblaApi, onInit, onSelect])

  return {
    selectedIndex,
    scrollSnaps,
    onDotButtonClick,
  }
}

interface CustomButtonProps extends ComponentPropsWithRef<'button'> {
  totalItems: number
  selected: boolean
  index: number
}

export const DotButton: React.FC<CustomButtonProps> = props => {
  const { totalItems, selected, index, children, ...restProps } = props

  return (
    <button className="px-1.5 py-2" type="button" {...restProps}>
      <div className="relative overflow-hidden">
        {/* White Bar - Current Index Indicator / Progress Bar */}
        <div
          className={clsx(
            'absolute h-0.5 bg-background opacity-100 ease-linear',
            selected ? 'translate-x-0' : '-translate-x-[101%]'
          )}
          style={{
            transitionDuration: `${selected ? '4s' : '0s'}`,
            width: `${190 / totalItems}px`,
          }}
        />

        {/* Grey Bar */}
        <div
          className="p h-0.5 bg-background opacity-30"
          style={{ width: `${190 / totalItems}px` }}
        />
      </div>
    </button>
  )
}
