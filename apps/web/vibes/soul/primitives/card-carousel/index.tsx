import { clsx } from 'clsx';

import { Card, CardProps, CardSkeleton } from '@/vibes/soul/primitives/card';
import {
  Carousel,
  CarouselButtons,
  CarouselContent,
  CarouselItem,
  CarouselScrollbar,
} from '@/vibes/soul/primitives/carousel';

import { Stream, Streamable } from '../../lib/streamable';

export type Card = CardProps & {
  id: string;
};

interface Props {
  cards: Streamable<Card[]>;
  textContrast?: 'light' | 'dark';
  className?: string;
  emptyStateMessage?: string;
}

export function CardCarousel({
  cards: streamableCards,
  textContrast,
  className,
  emptyStateMessage = 'No items found',
}: Props) {
  return (
    <Carousel className={className}>
      <CarouselContent className="mb-10">
        <Stream
          value={streamableCards}
          fallback={<CardCarouselSkeleton className={className} message={emptyStateMessage} />}
        >
          {(cards) => {
            if (cards.length === 0) {
              return <CardCarouselSkeleton className={className} message={emptyStateMessage} />;
            }

            return cards.map((card) => (
              <CarouselItem
                className="basis-full @md:basis-1/2 @lg:basis-1/3 @2xl:basis-1/4"
                key={card.id}
              >
                <Card {...card} textContrast={textContrast} />
              </CarouselItem>
            ));
          }}
        </Stream>
      </CarouselContent>
      <div className="flex w-full items-center justify-between">
        <CarouselScrollbar />
        <CarouselButtons />
      </div>
    </Carousel>
  );
}

export function CardCarouselSkeleton({
  className,
  message,
  count = 8,
}: {
  className?: string;
  message?: string;
  count?: number;
}) {
  return (
    <Carousel className={className}>
      <CarouselContent
        className={clsx(
          'relative mb-10',
          message != null &&
            message !== '' &&
            '[mask-image:radial-gradient(circle,transparent,black)]',
        )}
      >
        {Array.from({ length: count }).map((_, index) => (
          <CarouselItem
            className="basis-full @md:basis-1/2 @lg:basis-1/3 @2xl:basis-1/4"
            key={index}
          >
            <CardSkeleton />
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="flex w-full items-center justify-between">
        <CarouselScrollbar />
        <CarouselButtons />
      </div>
      <div className="absolute inset-0 flex items-center justify-center text-lg">{message}</div>
    </Carousel>
  );
}
