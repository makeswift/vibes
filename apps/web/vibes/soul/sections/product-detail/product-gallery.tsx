'use client';

import { clsx } from 'clsx';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';

interface Props {
  images: Array<{ alt: string; src: string }>;
  className?: string;
  thumbnailLabel?: string;
}

export function ProductGallery({ images, className, thumbnailLabel = 'View image number' }: Props) {
  const [previewImage, setPreviewImage] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel();

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => setPreviewImage(emblaApi.selectedScrollSnap());

    emblaApi.on('select', onSelect);

    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi]);

  const selectImage = (index: number) => {
    setPreviewImage(index);
    if (emblaApi) emblaApi.scrollTo(index);
  };

  return (
    <div className={clsx('sticky top-4 flex flex-col gap-2 @2xl:flex-row', className)}>
      <div
        className="w-full overflow-hidden rounded-xl @xl:rounded-2xl @2xl:order-2"
        ref={emblaRef}
      >
        <div className="flex">
          {images.map((image, idx) => (
            <div className="relative aspect-[4/5] w-full shrink-0 grow-0 basis-full" key={idx}>
              <Image
                alt={image.alt}
                className="object-cover"
                fill
                priority={idx === 0}
                sizes="(min-width: 42rem) 50vw, 100vw"
                src={image.src}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flex max-w-full shrink-0 flex-row gap-2 overflow-x-auto @2xl:order-1 @2xl:flex-col">
        {images.map((image, index) => (
          <button
            aria-label={`${thumbnailLabel} ${index + 1}`}
            className={clsx(
              'relative h-12 w-12 shrink-0 overflow-hidden rounded-lg border transition-all duration-300 hover:opacity-100 @md:h-16 @md:w-16',
              index === previewImage
                ? 'border-foreground opacity-100'
                : 'border-transparent opacity-50',
            )}
            key={index}
            onClick={() => selectImage(index)}
          >
            <Image
              alt={image.alt}
              className="bg-contrast-100 object-cover"
              fill
              sizes="(min-width: 28rem) 4rem, 3rem"
              src={image.src}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
