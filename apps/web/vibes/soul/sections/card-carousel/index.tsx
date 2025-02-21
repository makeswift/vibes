import { clsx } from 'clsx';
import { ArrowLeft, ArrowRight } from 'lucide-react';

import { Stream, Streamable } from '@/vibes/soul/lib/streamable';
import { Card, CardSkeleton, CardWithId } from '@/vibes/soul/primitives/card';
import {
  Carousel,
  CarouselButtons,
  CarouselContent,
  CarouselItem,
  CarouselScrollbar,
} from '@/vibes/soul/primitives/carousel';
import * as Skeleton from '@/vibes/soul/primitives/skeleton';

export interface CardCarouselProps {
  cards: Streamable<CardWithId[]>;
  aspectRatio?: '5:6' | '3:4' | '1:1';
  textColorScheme?: 'light' | 'dark';
  iconColorScheme?: 'light' | 'dark';
  carouselColorScheme?: 'light' | 'dark';
  className?: string;
  emptyStateTitle?: Streamable<string>;
  emptyStateSubtitle?: Streamable<string>;
  scrollbarLabel?: string;
  previousLabel?: string;
  nextLabel?: string;
  showButtons?: boolean;
  showScrollbar?: boolean;
  hideOverflow?: boolean;
  placeholderCount?: number;
}

/**
 * This component supports various CSS variables for theming. Here's a comprehensive list, along
 * with their default values:
 *
 * ```css
 * :root {
 *   --card-carousel-light-empty-title: hsl(var(--foreground));
 *   --card-carousel-light-empty-subtitle: hsl(var(--contrast-500));
 *   --card-carousel-dark-empty-title: hsl(var(--background));
 *   --card-carousel-dark-empty-subtitle: hsl(var(--contrast-100));
 * }
 * ```
 */
export function CardCarousel({
  cards: streamableCards,
  aspectRatio = '5:6',
  textColorScheme,
  iconColorScheme,
  carouselColorScheme = 'light',
  className,
  emptyStateTitle,
  emptyStateSubtitle,
  scrollbarLabel,
  previousLabel,
  nextLabel,
  showButtons = true,
  showScrollbar = true,
  hideOverflow,
}: CardCarouselProps) {
  return (
    <Stream
      fallback={<CardCarouselSkeleton className={className} hideOverflow={hideOverflow} />}
      value={streamableCards}
    >
      {(cards) => {
        if (cards.length === 0) {
          return (
            <CardCarouselEmptyState
              carouselColorScheme={carouselColorScheme}
              className={className}
              emptyStateSubtitle={emptyStateSubtitle}
              emptyStateTitle={emptyStateTitle}
              hideOverflow={hideOverflow}
            />
          );
        }

        return (
          <Carousel className={className} hideOverflow={hideOverflow}>
            <CarouselContent>
              {cards.map(({ id, ...card }) => (
                <CarouselItem
                  className="basis-[calc(100%-1rem)] @md:basis-[calc(50%-0.75rem)] @lg:basis-[calc(33%-0.5rem)] @2xl:basis-[calc(25%-0.25rem)]"
                  key={id}
                >
                  <Card
                    {...card}
                    aspectRatio={aspectRatio}
                    iconColorScheme={iconColorScheme}
                    textColorScheme={textColorScheme}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            {(showButtons || showScrollbar) && (
              <div className="mt-10 flex w-full items-center justify-between gap-8">
                <CarouselScrollbar
                  className={clsx(!showScrollbar && 'pointer-events-none invisible')}
                  colorScheme={carouselColorScheme}
                  label={scrollbarLabel}
                />
                <CarouselButtons
                  className={clsx(!showButtons && 'pointer-events-none invisible')}
                  colorScheme={carouselColorScheme}
                  nextLabel={nextLabel}
                  previousLabel={previousLabel}
                />
              </div>
            )}
          </Carousel>
        );
      }}
    </Stream>
  );
}

export function CardCarouselSkeleton({
  className,
  placeholderCount = 4,
  hideOverflow = true,
}: Pick<
  CardCarouselProps,
  'className' | 'emptyStateTitle' | 'emptyStateSubtitle' | 'hideOverflow' | 'placeholderCount'
>) {
  return (
    <Skeleton.Root
      className={clsx('group-has-[[data-pending]]/card-carousel:animate-pulse', className)}
      hideOverflow={hideOverflow}
      pending
    >
      <div className="w-full">
        <div className="-ml-4 flex @2xl:-ml-5">
          {Array.from({ length: placeholderCount }).map((_, index) => (
            <div
              className="min-w-0 shrink-0 grow-0 basis-[calc(100%-1rem)] pl-4 @md:basis-[calc(50%-0.75rem)] @lg:basis-[calc(33%-0.5rem)] @2xl:basis-[calc(25%-0.25rem)] @2xl:pl-5"
              key={index}
            >
              <CardSkeleton />
            </div>
          ))}
        </div>
      </div>
      <div className="mt-10 flex w-full items-center justify-between gap-8">
        <Skeleton.Box className="h-1 w-full max-w-56 rounded" />
        <div className="flex gap-2 text-contrast-200">
          <Skeleton.Icon icon={<ArrowLeft aria-hidden className="h-6 w-6" strokeWidth={1.5} />} />
          <Skeleton.Icon icon={<ArrowRight aria-hidden className="h-6 w-6" strokeWidth={1.5} />} />
        </div>
      </div>
    </Skeleton.Root>
  );
}

export function CardCarouselEmptyState({
  className,
  placeholderCount = 4,
  emptyStateTitle,
  emptyStateSubtitle,
  hideOverflow = true,
  carouselColorScheme = 'light',
}: Pick<
  CardCarouselProps,
  | 'className'
  | 'emptyStateTitle'
  | 'emptyStateSubtitle'
  | 'hideOverflow'
  | 'placeholderCount'
  | 'carouselColorScheme'
>) {
  return (
    <Skeleton.Root className={clsx('relative', className)} hideOverflow={hideOverflow}>
      <div className="w-full">
        <div className="-ml-4 flex [mask-image:linear-gradient(to_bottom,_black_0%,_transparent_90%)] @2xl:-ml-5">
          {Array.from({ length: placeholderCount }).map((_, index) => (
            <div
              className="min-w-0 shrink-0 grow-0 basis-[calc(100%-1rem)] pl-4 @md:basis-[calc(50%-0.75rem)] @lg:basis-[calc(33%-0.5rem)] @2xl:basis-[calc(25%-0.25rem)] @2xl:pl-5"
              key={index}
            >
              <CardSkeleton />
            </div>
          ))}
        </div>
      </div>
      <div className="absolute inset-0 mx-auto px-3 py-16 pb-3 @4xl:px-10 @4xl:pb-10 @4xl:pt-28">
        <div className="mx-auto max-w-xl space-y-2 text-center @4xl:space-y-3">
          <h3
            className={clsx(
              '@4x:leading-none font-heading text-2xl leading-tight @4xl:text-4xl',
              {
                light: 'text-[var(--card-carousel-light-empty-title,hsl(var(--foreground)))]',
                dark: 'text-[var(--card-carousel-dark-empty-title,hsl(var(--background)))]',
              }[carouselColorScheme],
            )}
          >
            {emptyStateTitle}
          </h3>
          <p
            className={clsx(
              'text-sm @4xl:text-lg',
              {
                light: 'text-[var(--card-carousel-light-empty-subtitle,hsl(var(--contrast-500)))]',
                dark: 'text-[var(--card-carousel-dark-empty-subtitle,hsl(var(--contrast-200)))]',
              }[carouselColorScheme],
            )}
          >
            {emptyStateSubtitle}
          </p>
        </div>
      </div>
    </Skeleton.Root>
  );
}
