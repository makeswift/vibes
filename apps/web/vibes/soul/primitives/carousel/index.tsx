'use client';

import { clsx } from 'clsx';
import useEmblaCarousel, { type UseEmblaCarouselType } from 'embla-carousel-react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import {
  ComponentPropsWithoutRef,
  createContext,
  KeyboardEvent,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';

type CarouselApi = UseEmblaCarouselType[1];
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>;
type CarouselOptions = UseCarouselParameters[0];
type CarouselPlugin = UseCarouselParameters[1];

export interface CarouselProps extends ComponentPropsWithoutRef<'div'> {
  opts?: CarouselOptions;
  plugins?: CarouselPlugin;
  setApi?: (api: CarouselApi) => void;
  carouselScrollbarLabel?: string;
  hideOverflow?: boolean;
}

type CarouselContextProps = {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0];
  api: ReturnType<typeof useEmblaCarousel>[1];
  scrollPrev: () => void;
  scrollNext: () => void;
  canScrollPrev: boolean;
  canScrollNext: boolean;
} & CarouselProps;

const CarouselContext = createContext<CarouselContextProps | null>(null);

function useCarousel() {
  const context = useContext(CarouselContext);

  if (!context) {
    throw new Error('useCarousel must be used within a <Carousel />');
  }

  return context;
}

function Carousel({
  opts,
  setApi,
  plugins,
  className,
  children,
  hideOverflow = true,
  ...props
}: CarouselProps) {
  const [carouselRef, api] = useEmblaCarousel(opts, plugins);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  // eslint-disable-next-line @typescript-eslint/no-shadow
  const onSelect = useCallback((api: CarouselApi) => {
    if (!api) return;

    setCanScrollPrev(api.canScrollPrev());
    setCanScrollNext(api.canScrollNext());
  }, []);

  const scrollPrev = useCallback(() => api?.scrollPrev(), [api]);

  const scrollNext = useCallback(() => api?.scrollNext(), [api]);

  const handleKeyDown = useCallback(
    (event: KeyboardEvent<HTMLDivElement>) => {
      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        scrollPrev();
      } else if (event.key === 'ArrowRight') {
        event.preventDefault();
        scrollNext();
      }
    },
    [scrollPrev, scrollNext],
  );

  useEffect(() => {
    if (!api || !setApi) return;

    setApi(api);
  }, [api, setApi]);

  useEffect(() => {
    if (!api) return;

    onSelect(api);
    api.on('reInit', onSelect);
    api.on('select', onSelect);

    return () => {
      api.off('select', onSelect);
    };
  }, [api, onSelect]);

  return (
    <CarouselContext.Provider
      value={{
        carouselRef,
        api,
        opts,
        scrollPrev,
        scrollNext,
        canScrollPrev,
        canScrollNext,
      }}
    >
      <div
        {...props}
        aria-roledescription="carousel"
        className={clsx('@container relative p-1.5', hideOverflow && 'overflow-hidden', className)}
        onKeyDownCapture={handleKeyDown}
        role="region"
      >
        {children}
      </div>
    </CarouselContext.Provider>
  );
}

function CarouselContent({ className, ...props }: ComponentPropsWithoutRef<'div'>) {
  const { carouselRef } = useCarousel();

  return (
    <div className="w-full" ref={carouselRef}>
      <div {...props} className={clsx('-ml-4 flex @2xl:-ml-5', className)} />
    </div>
  );
}

function CarouselItem({ className, ...props }: ComponentPropsWithoutRef<'div'>) {
  return (
    <div
      {...props}
      aria-roledescription="slide"
      className={clsx('min-w-0 shrink-0 grow-0 pl-4 @2xl:pl-5', className)}
      role="group"
    />
  );
}

/**
 * This component supports various CSS variables for theming. Here's a comprehensive list, along
 * with their default values:
 *
 * ```css
 * :root {
    --carousel-focus: var(--primary);
    --carousel-light-button: var(--foreground);
    --carousel-dark-button: var(--background);
 * }
 * ```
 */
function CarouselButtons({
  className,
  colorScheme = 'light',
  previousLabel = 'Previous',
  nextLabel = 'Next',
  ...props
}: ComponentPropsWithoutRef<'div'> & {
  colorScheme?: 'light' | 'dark';
  previousLabel?: string;
  nextLabel?: string;
}) {
  const { scrollPrev, scrollNext, canScrollPrev, canScrollNext } = useCarousel();

  return (
    <div
      {...props}
      className={clsx(
        'flex gap-2',
        {
          light: 'text-(--carousel-light-button,var(--foreground))',
          dark: 'text-(--carousel-dark-button,var(--background))',
        }[colorScheme],
        className,
      )}
    >
      <button
        className="rounded-lg ring-(--carousel-focus,var(--primary)) transition-colors duration-300 focus-visible:ring-2 focus-visible:outline-0 disabled:pointer-events-none disabled:opacity-25"
        disabled={!canScrollPrev}
        onClick={scrollPrev}
        title={previousLabel}
      >
        <ArrowLeft className="h-6 w-6" strokeWidth={1.5} />
      </button>
      <button
        className="rounded-lg ring-(--carousel-focus,var(--primary)) transition-colors duration-300 focus-visible:ring-2 focus-visible:outline-0 disabled:pointer-events-none disabled:opacity-25"
        disabled={!canScrollNext}
        onClick={scrollNext}
        title={nextLabel}
      >
        <ArrowRight className="h-6 w-6" strokeWidth={1.5} />
      </button>
    </div>
  );
}

/**
 * This component supports various CSS variables for theming. Here's a comprehensive list, along
 * with their default values:
 *
 * ```css
 * :root {
    --carousel-light-scrollbar: var(--foreground);
    --carousel-dark-scrollbar: var(--background);
 * }
 * ```
 */
function CarouselScrollbar({
  className,
  colorScheme = 'light',
  label = 'Carousel scrollbar',
}: ComponentPropsWithoutRef<'div'> & { label?: string; colorScheme?: 'light' | 'dark' }) {
  const { api, canScrollPrev, canScrollNext } = useCarousel();
  const [progress, setProgress] = useState(0);
  const [scrollbarPosition, setScrollbarPosition] = useState({ width: 0, left: 0 });

  const findClosestSnap = useCallback(
    (nextProgress: number) => {
      if (!api) return 0;

      const point = nextProgress / 100;
      const snapList = api.scrollSnapList();

      if (snapList.length === 0) return -1;

      const closestSnap = snapList.reduce((prev, curr) =>
        Math.abs(curr - point) < Math.abs(prev - point) ? curr : prev,
      );

      return snapList.findIndex((snap) => snap === closestSnap);
    },
    [api],
  );

  useEffect(() => {
    if (!api) return;

    const snapList = api.scrollSnapList();
    const closestSnapIndex = findClosestSnap(progress);
    const scrollbarWidth = 100 / snapList.length;
    const scrollbarLeft = (closestSnapIndex / snapList.length) * 100;

    setScrollbarPosition({ width: scrollbarWidth, left: scrollbarLeft });

    api.scrollTo(closestSnapIndex);
  }, [progress, api, findClosestSnap]);

  useEffect(() => {
    if (!api) return;

    function onScroll() {
      if (!api) return;

      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setProgress(api.scrollSnapList()[api.selectedScrollSnap()]! * 100);
    }

    api.on('select', onScroll);
    api.on('scroll', onScroll);
    api.on('reInit', onScroll);

    return () => {
      api.off('select', onScroll);
      api.off('scroll', onScroll);
      api.off('reInit', onScroll);
    };
  }, [api]);

  return (
    <div
      className={clsx(
        'relative flex h-6 w-full max-w-56 items-center overflow-hidden',
        !canScrollPrev && !canScrollNext && 'pointer-events-none invisible',
        className,
      )}
    >
      <input
        aria-label={label}
        aria-orientation="horizontal"
        aria-valuenow={progress}
        aria-valuetext={`${Math.round(progress)}%`}
        className="absolute h-full w-full cursor-pointer appearance-none bg-transparent opacity-0"
        max={100}
        min={0}
        onChange={(e) => setProgress(e.currentTarget.valueAsNumber)}
        type="range"
        value={progress}
      />
      {/* Track */}
      <div
        className={clsx(
          'pointer-events-none absolute h-1 w-full rounded-full opacity-10',
          {
            light: 'bg-(--carousel-light-scrollbar,var(--foreground))',
            dark: 'bg-(--carousel-dark-scrollbar,var(--background))',
          }[colorScheme],
        )}
      />

      {/* Bar */}
      <div
        className={clsx(
          'pointer-events-none absolute h-1 rounded-full transition-all ease-out',
          {
            light: 'bg-(--carousel-light-scrollbar,var(--foreground))',
            dark: 'bg-(--carousel-dark-scrollbar,var(--background))',
          }[colorScheme],
        )}
        style={{
          width: `${scrollbarPosition.width}%`,
          left: `${scrollbarPosition.left}%`,
        }}
      />
    </div>
  );
}

export {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselButtons,
  CarouselScrollbar,
};
