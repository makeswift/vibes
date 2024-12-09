import { clsx } from 'clsx';

import {
  Carousel,
  CarouselButtons,
  CarouselContent,
  CarouselItem,
  CarouselScrollbar,
} from '@/vibes/soul/primitives/carousel';
import {
  CardProduct,
  ProductCard,
  ProductCardSkeleton,
} from '@/vibes/soul/primitives/product-card';

import { Stream, Streamable } from '../../lib/streamable';

export type CarouselProduct = CardProduct;

interface Props {
  products: Streamable<CarouselProduct[]>;
  className?: string;
  emptyStateTitle?: string;
  emptyStateDescription?: string;
}

export function ProductsCarousel({
  products: streamableProducts,
  className,
  emptyStateTitle,
  emptyStateDescription,
}: Props) {
  return (
    <Stream
      fallback={
        <Carousel className={className}>
          <CarouselContent className="mb-10">
            {Array.from({ length: 8 }).map((_, index) => (
              <CarouselItem
                className="basis-full @md:basis-1/2 @lg:basis-1/3 @2xl:basis-1/4"
                key={index}
              >
                <ProductCardSkeleton />
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex w-full items-center justify-between">
            <CarouselScrollbar />
            <CarouselButtons />
          </div>
        </Carousel>
      }
      value={streamableProducts}
    >
      {(products) => {
        if (products.length === 0) {
          return (
            <Carousel className={clsx(className, 'relative')}>
              <CarouselContent
                className={clsx(
                  'mb-10 [mask-image:linear-gradient(to_top,_transparent_0%,_hsl(var(--background))_75%)]',
                )}
              >
                {Array.from({ length: 8 }).map((_, index) => (
                  <CarouselItem
                    className="basis-full @md:basis-1/2 @lg:basis-1/3 @2xl:basis-1/4"
                    key={index}
                  >
                    <ProductCardSkeleton loading={false} />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="absolute inset-0 mx-auto px-3 py-16 pb-3 @4xl:px-10 @4xl:pb-10 @4xl:pt-28">
                <div className="mx-auto max-w-xl space-y-2 text-center @4xl:space-y-3">
                  <h3 className="@4x:leading-none font-heading text-2xl leading-tight text-foreground @4xl:text-4xl">
                    {emptyStateTitle}
                  </h3>
                  <p className="text-sm text-contrast-500 @4xl:text-lg">{emptyStateDescription}</p>
                </div>
              </div>
            </Carousel>
          );
        }

        return (
          <Carousel className={clsx(className)}>
            <CarouselContent className="mb-10">
              {products.map((product) => (
                <CarouselItem
                  className="basis-full @md:basis-1/2 @lg:basis-1/3 @2xl:basis-1/4"
                  key={product.id}
                >
                  <ProductCard product={product} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex w-full items-center justify-between">
              <CarouselScrollbar />
              <CarouselButtons />
            </div>
          </Carousel>
        );
      }}
    </Stream>
  );
}
