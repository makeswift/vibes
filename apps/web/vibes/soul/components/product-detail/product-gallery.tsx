'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

import clsx from 'clsx'
import useEmblaCarousel from 'embla-carousel-react'

export interface ProductGallery {
  images: string[]
}

const ProductGallery = ({ images }: ProductGallery) => {
  const [previewImage, setPreviewImage] = useState(0)
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })

  useEffect(() => {
    if (!emblaApi) return

    const onSelect = () => setPreviewImage(emblaApi.selectedScrollSnap())
    emblaApi.on('select', onSelect)

    return () => {
      emblaApi.off('select', onSelect)
    }
  }, [emblaApi])

  const selectImage = (index: number) => {
    setPreviewImage(index)
    if (emblaApi) emblaApi.scrollTo(index)
  }

  return (
    <div className="relative flex w-full items-center overflow-hidden bg-contrast-200 @3xl:sticky @3xl:top-24">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex items-center">
          {images.map((image, index) => (
            <Image
              key={index}
              src={image}
              alt={`Product ${index + 1}`}
              height={1000}
              width={1000}
              className="h-full w-full flex-shrink-0 object-contain"
            />
          ))}
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-1.5 @3xl:gap-3 @4xl:bottom-16">
        {images.map((image, index) => (
          <button
            key={index}
            className={clsx(
              'h-10 w-10 overflow-hidden rounded-lg border transition-colors duration-300 @4xl:h-14 @4xl:w-14',
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
