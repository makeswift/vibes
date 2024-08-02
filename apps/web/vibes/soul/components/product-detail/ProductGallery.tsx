'use client'

import Image from 'next/image'
import { useCallback, useEffect, useState } from 'react'

import clsx from 'clsx'
import useEmblaCarousel from 'embla-carousel-react'

export interface ProductGallery {
  images: string[]
}

const ProductGallery = ({ images }: ProductGallery) => {
  const [previewImage, setPreviewImage] = useState(0)
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })

  const selectImage = (index: number) => {
    setPreviewImage(index)
    if (emblaApi) emblaApi.scrollTo(index)
  }

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setPreviewImage(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    emblaApi.on('select', onSelect)
  }, [emblaApi, onSelect])

  return (
    <div className="relative flex w-full items-center overflow-hidden bg-contrast-200">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex items-center">
          {images.map((image, index) => (
            <Image
              src={image}
              alt={`Product ${index + 1}`}
              height={1000}
              width={1000}
              className="h-full w-full flex-shrink-0 object-contain"
            />
          ))}
        </div>
      </div>

      <div className="absolute bottom-[10%] left-1/2 flex -translate-x-1/2 gap-3">
        {images.map((image, index) => (
          <button
            key={index}
            className={clsx(
              'h-14 w-14 overflow-hidden rounded-lg border transition-colors duration-300',
              index === previewImage ? 'border-foreground' : 'border-transparent'
            )}
            onClick={() => selectImage(index)}
          >
            <Image
              src={image}
              alt={`Thumbnail ${index + 1}`}
              height={256}
              width={256}
              className="h-full w-full bg-contrast-100 object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  )
}

export default ProductGallery
