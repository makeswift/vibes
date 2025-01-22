import { clsx } from 'clsx';
import { ArrowLeft, ArrowRight } from 'lucide-react';

import { Stream, Streamable } from '@/vibes/soul/lib/streamable';
import { Card, CardProps, CardSkeleton } from '@/vibes/soul/primitives/card';
import {
  Carousel,
  CarouselButtons,
  CarouselContent,
  CarouselItem,
  CarouselScrollbar,
} from '@/vibes/soul/primitives/carousel';

export type Card = CardProps & {
  id: string;
};

export interface CardCarouselProps {
  cards: Streamable<Card[]>;
  aspectRatio?: '5:6' | '3:4' | '1:1';
  textColorScheme?: 'light' | 'dark';
  iconColorScheme?: 'light' | 'dark';
  carouselColorScheme?: 'light' | 'dark';
  className?: string;
  emptyStateTitle?: Streamable<string | null>;
  emptyStateSubtitle?: Streamable<string | null>;
  scrollbarLabel?: string;
  previousLabel?: string;
  nextLabel?: string;
  showButtons?: boolean;
  showScrollbar?: boolean;
  hideOverflow?: boolean;
}

export function CardCarousel({
  cards: streamableCards,
  aspectRatio = '5:6',
  textColorScheme,
  iconColorScheme,
  carouselColorScheme,
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
      fallback={<CardCarouselSkeleton className={className} hideOverflow={hideOverflow} pending />}
      value={streamableCards}
    >
      {(cards) => {
        if (cards.length === 0) {
          return (
            <CardCarouselEmptyState
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
              {cards.map((card) => (
                <CarouselItem
                  className="basis-[calc(100%-1rem)] @md:basis-[calc(50%-0.75rem)] @lg:basis-[calc(33%-0.5rem)] @2xl:basis-[calc(25%-0.25rem)]"
                  key={card.id}
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
  pending = false,
  hideOverflow = true,
}: {
  className?: string;
  placeholderCount?: number;
  pending?: boolean;
  hideOverflow?: boolean;
}) {
  return (
    <div
      className={clsx('@container', hideOverflow && 'overflow-hidden', className)}
      data-pending={pending ? '' : undefined}
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
        <div className="h-1 w-full max-w-56 rounded bg-contrast-100" />
        <div className="flex gap-2 text-contrast-200">
          <ArrowLeft className="h-6 w-6" strokeWidth={1.5} />
          <ArrowRight className="h-6 w-6" strokeWidth={1.5} />
        </div>
      </div>
    </div>
  );
}

export function CardCarouselEmptyState({
  className,
  placeholderCount = 4,
  emptyStateTitle,
  emptyStateSubtitle,
  hideOverflow = true,
}: {
  className?: string;
  placeholderCount?: number;
  emptyStateTitle?: Streamable<string | null>;
  emptyStateSubtitle?: Streamable<string | null>;
  hideOverflow?: boolean;
}) {
  return (
    <div className={clsx('relative @container', hideOverflow && 'overflow-hidden', className)}>
      <div className="w-full">
        <div className="-ml-4 flex [mask-image:linear-gradient(to_bottom,_black_0%,_transparent_90%)] @2xl:-ml-5">
          {Array.from({ length: placeholderCount }).map((_, index) => (
            <div
              className="min-w-0 shrink-0 grow-0 basis-[calc(100%-1rem)] pl-4 @md:basis-[calc(50%-0.75rem)] @lg:basis-[calc(33%-0.5rem)] @2xl:basis-[calc(25%-0.25rem)] @2xl:pl-5"
              key={index}
            >
              <CardSkeleton key={index} />
            </div>
          ))}
        </div>
      </div>
      <div className="absolute inset-0 mx-auto px-3 py-16 pb-3 @4xl:px-10 @4xl:pb-10 @4xl:pt-28">
        <div className="mx-auto max-w-xl space-y-2 text-center @4xl:space-y-3">
          <h3 className="@4x:leading-none font-heading text-2xl leading-tight text-foreground @4xl:text-4xl">
            {emptyStateTitle}
          </h3>
          <p className="text-sm text-contrast-500 @4xl:text-lg">{emptyStateSubtitle}</p>
        </div>
      </div>
    </div>
  );
}
