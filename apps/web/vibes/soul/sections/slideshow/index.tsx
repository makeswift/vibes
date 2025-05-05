'use client';

import { clsx } from 'clsx';
import { EmblaCarouselType } from 'embla-carousel';
import Autoplay from 'embla-carousel-autoplay';
import Fade from 'embla-carousel-fade';
import useEmblaCarousel from 'embla-carousel-react';
import { Pause, Play } from 'lucide-react';
import Image from 'next/image';
import { ComponentPropsWithoutRef, useCallback, useEffect, useState } from 'react';

import { ButtonLink } from '@/vibes/soul/primitives/button-link';

type ButtonLinkProps = ComponentPropsWithoutRef<typeof ButtonLink>;

interface Slide {
  title: string;
  description?: string;
  showDescription?: boolean;
  image?: { alt: string; blurDataUrl?: string; src: string };
  cta?: {
    label: string;
    href: string;
    variant?: ButtonLinkProps['variant'];
    size?: ButtonLinkProps['size'];
    shape?: ButtonLinkProps['shape'];
  };
  showCta?: boolean;
}

export interface SlideshowProps {
  slides: Slide[];
  playOnInit?: boolean;
  interval?: number;
  className?: string;
}

interface UseProgressButtonType {
  selectedIndex: number;
  scrollSnaps: number[];
  onProgressButtonClick: (index: number) => void;
}

const useProgressButton = (
  emblaApi: EmblaCarouselType | undefined,
  onButtonClick?: (emblaApi: EmblaCarouselType) => void,
): UseProgressButtonType => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onProgressButtonClick = useCallback(
    (index: number) => {
      if (!emblaApi) return;
      emblaApi.scrollTo(index);
      if (onButtonClick) onButtonClick(emblaApi);
    },
    [emblaApi, onButtonClick],
  );

  const onInit = useCallback((emblaAPI: EmblaCarouselType) => {
    setScrollSnaps(emblaAPI.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaAPI: EmblaCarouselType) => {
    setSelectedIndex(emblaAPI.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);

    emblaApi.on('reInit', onInit).on('reInit', onSelect).on('select', onSelect);
  }, [emblaApi, onInit, onSelect]);

  return {
    selectedIndex,
    scrollSnaps,
    onProgressButtonClick,
  };
};

/**
 * This component supports various CSS variables for theming. Here's a comprehensive list, along
 * with their default values:
 *
 * ```css
 * :root {
 *   --slideshow-focus: var(--primary);
 *   --slideshow-mask: color-mix(in oklab, var(--foreground) 80%, transparent);
 *   --slideshow-background: var(--primary-shadow);
 *   --slideshow-title: var(--background);
 *   --slideshow-title-font-family: var(--font-family-heading);
 *   --slideshow-description: color-mix(in oklab, var(--background) 80%, transparent);
 *   --slideshow-description-font-family: var(--font-family-body);
 *   --slideshow-pagination: var(--background);
 *   --slideshow-play-border: color-mix(in oklab, var(--contrast-300) 50%, transparent);
 *   --slideshow-play-border-hover: color-mix(in oklab, var(--contrast-300) 80%, transparent);
 *   --slideshow-play-text: var(--background);
 *   --slideshow-number: var(--background);
 *   --slideshow-number-font-family: var(--font-family-mono);
 * }
 * ```
 */
export function Slideshow({
  slides,
  playOnInit = true,
  interval = 5000,
  className,
}: SlideshowProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 20 }, [
    Autoplay({ delay: interval, playOnInit }),
    Fade(),
  ]);
  const { selectedIndex, scrollSnaps, onProgressButtonClick } = useProgressButton(emblaApi);
  const [isPlaying, setIsPlaying] = useState(false);
  const [playCount, setPlayCount] = useState(0);

  const toggleAutoplay = useCallback(() => {
    const autoplay = emblaApi?.plugins().autoplay;

    if (!autoplay) return;

    const playOrStop = autoplay.isPlaying() ? autoplay.stop : autoplay.play;
    playOrStop();
  }, [emblaApi]);

  const resetAutoplay = useCallback(() => {
    const autoplay = emblaApi?.plugins().autoplay;
    if (!autoplay) return;

    autoplay.reset();
  }, [emblaApi]);

  useEffect(() => {
    const autoplay = emblaApi?.plugins().autoplay;
    if (!autoplay) return;

    setIsPlaying(autoplay.isPlaying());
    emblaApi
      .on('autoplay:play', () => {
        setIsPlaying(true);
        setPlayCount(playCount + 1);
      })
      .on('autoplay:stop', () => {
        setIsPlaying(false);
      })
      .on('reInit', () => {
        setIsPlaying(autoplay.isPlaying());
      });
  }, [emblaApi, playCount]);

  return (
    <section
      className={clsx(
        '@container relative h-[80vh] bg-(--slideshow-background,var(--primary-shadow))',
        className,
      )}
    >
      <div className="h-full overflow-hidden" ref={emblaRef}>
        <div className="flex h-full">
          {slides.map(
            ({ title, description, showDescription = true, image, cta, showCta = true }, idx) => {
              return (
                <div
                  className="relative h-full w-full min-w-0 shrink-0 grow-0 basis-full"
                  key={idx}
                >
                  <div className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-(--slideshow-mask,color-mix(in_oklab,var(--foreground)_80%,transparent)) to-transparent">
                    <div className="mx-auto w-full max-w-screen-2xl px-4 pt-12 pb-16 text-balance @xl:px-6 @xl:pt-16 @xl:pb-20 @4xl:px-8 @4xl:pt-20">
                      <h1 className="m-0 max-w-xl font-(family-name:--slideshow-title-font-family,var(--font-family-heading)) text-4xl leading-none font-medium text-(--slideshow-title,var(--background)) @2xl:text-5xl @2xl:leading-[.9] @4xl:text-6xl">
                        {title}
                      </h1>
                      {showDescription && (
                        <p className="mt-2 max-w-xl font-(family-name:--slideshow-description-font-family,var(--font-family-body)) text-base leading-normal text-(--slideshow-description,color-mix(in_oklab,var(--background)_80%,transparent)) @xl:mt-3 @xl:text-lg">
                          {description}
                        </p>
                      )}
                      {showCta && (
                        <ButtonLink
                          className="mt-6 @xl:mt-8"
                          href={cta?.href ?? '#'}
                          shape={cta?.shape ?? 'pill'}
                          size={cta?.size ?? 'large'}
                          variant={cta?.variant ?? 'tertiary'}
                        >
                          {cta?.label ?? 'Learn more'}
                        </ButtonLink>
                      )}
                    </div>
                  </div>

                  {image?.src != null && image.src !== '' && (
                    <Image
                      alt={image.alt}
                      blurDataURL={image.blurDataUrl}
                      className="block h-20 w-full object-cover"
                      fill
                      placeholder={
                        image.blurDataUrl != null && image.blurDataUrl !== '' ? 'blur' : 'empty'
                      }
                      priority={idx === 0}
                      sizes="100vw"
                      src={image.src}
                    />
                  )}
                </div>
              );
            },
          )}
        </div>
      </div>

      {/* Controls */}
      <div className="absolute bottom-4 left-1/2 flex w-full max-w-screen-2xl -translate-x-1/2 flex-wrap items-center px-4 @xl:bottom-6 @xl:px-6 @4xl:px-8">
        {/* Progress Buttons */}
        {scrollSnaps.map((_: number, index: number) => {
          return (
            <button
              aria-label={`View image number ${index + 1}`}
              className="rounded-lg px-1.5 py-2 focus-visible:ring-2 focus-visible:ring-(--slideshow-focus,var(--primary)) focus-visible:outline-0"
              key={index}
              onClick={() => {
                onProgressButtonClick(index);
                resetAutoplay();
              }}
            >
              <div className="relative overflow-hidden">
                {/* White Bar - Current Index Indicator / Progress Bar */}
                <div
                  className={clsx(
                    'absolute h-0.5 bg-(--slideshow-pagination,var(--background))',
                    'fill-mode-forwards opacity-0',
                    isPlaying ? 'running' : 'paused',
                    index === selectedIndex
                      ? 'animate-in slide-in-from-left opacity-100 ease-linear'
                      : 'animate-out fade-out ease-out',
                  )}
                  key={`progress-${playCount}`}
                  style={{
                    animationDuration: index === selectedIndex ? `${interval}ms` : '200ms',
                    width: `${150 / slides.length}px`,
                  }}
                />
                {/* Grey Bar BG */}
                <div
                  className="h-0.5 bg-(--slideshow-pagination,var(--background)) opacity-30"
                  style={{ width: `${150 / slides.length}px` }}
                />
              </div>
            </button>
          );
        })}

        {/* Carousel Count - "01/03" */}
        <span className="mt-px mr-3 ml-auto font-(family-name:--slideshow-number-font-family,var(--font-family-mono)) text-sm text-(--slideshow-number,var(--background))">
          {selectedIndex + 1 < 10 ? `0${selectedIndex + 1}` : selectedIndex + 1}/
          {slides.length < 10 ? `0${slides.length}` : slides.length}
        </span>

        {/* Stop / Start Button */}
        <button
          aria-label={isPlaying ? 'Pause' : 'Play'}
          className="flex h-7 w-7 items-center justify-center rounded-lg border border-(--slideshow-play-border,color-mix(in_oklab,var(--contrast-300)_50%,transparent)) text-(--slideshow-play-text,var(--background)) ring-(--slideshow-focus) transition-opacity duration-300 hover:border-(--slideshow-play-border-hover,color-mix(in_oklab,var(--contrast-300)_80%,transparent)) focus-visible:ring-2 focus-visible:outline-0"
          onClick={toggleAutoplay}
          type="button"
        >
          {isPlaying ? (
            <Pause className="pointer-events-none" size={16} strokeWidth={1.5} />
          ) : (
            <Play className="pointer-events-none" size={16} strokeWidth={1.5} />
          )}
        </button>
      </div>
    </section>
  );
}
