import { clsx } from 'clsx';
import { ArrowLeft, ArrowRight } from 'lucide-react';

import { Stream, Streamable } from '@/vibes/soul/lib/streamable';
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

export type CarouselProduct = CardProduct;

interface Props {
  products: Streamable<CarouselProduct[]>;
  className?: string;
  colorScheme?: 'light' | 'dark';
  aspectRatio?: '5:6' | '3:4' | '1:1';
  emptyStateTitle?: Streamable<string | null>;
  emptyStateSubtitle?: Streamable<string | null>;
  scrollbarLabel?: string;
  previousLabel?: string;
  nextLabel?: string;
  placeholderCount?: number;
  showButtons?: boolean;
  showScrollbar?: boolean;
  hideOverflow?: boolean;
}

export function ProductsCarousel({
  products: streamableProducts,
  className,
  colorScheme = 'light',
  aspectRatio = '5:6',
  emptyStateTitle,
  emptyStateSubtitle,
  scrollbarLabel,
  previousLabel,
  nextLabel,
  placeholderCount = 8,
  showButtons = true,
  showScrollbar = true,
  hideOverflow,
}: Props) {
  return (
    <Stream
      fallback={
        <ProductsCarouselSkeleton
          className={className}
          hideOverflow={hideOverflow}
          pending
          placeholderCount={placeholderCount}
        />
      }
      value={streamableProducts}
    >
      {(products) => {
        if (products.length === 0) {
          return (
            <ProductsCarouselEmptyState
              className={className}
              emptyStateSubtitle={emptyStateSubtitle}
              emptyStateTitle={emptyStateTitle}
              hideOverflow={hideOverflow}
              placeholderCount={placeholderCount}
            />
          );
        }

        return (
          <Carousel className={className} hideOverflow={hideOverflow}>
            <CarouselContent className="mb-10">
              {products.map((product) => (
                <CarouselItem
                  className="basis-[calc(100%-1rem)] @md:basis-[calc(50%-0.75rem)] @lg:basis-[calc(33%-0.5rem)] @2xl:basis-[calc(25%-0.25rem)]"
                  key={product.id}
                >
                  <ProductCard
                    aspectRatio={aspectRatio}
                    colorScheme={colorScheme}
                    imageSizes="(min-width: 42rem) 25vw, (min-width: 32rem) 33vw, (min-width: 28rem) 50vw, 100vw"
                    product={product}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            {(showButtons || showScrollbar) && (
              <div className="mt-10 flex w-full items-center justify-between gap-8">
                <CarouselScrollbar
                  className={clsx(!showScrollbar && 'pointer-events-none invisible')}
                  colorScheme={colorScheme}
                  label={scrollbarLabel}
                />
                <CarouselButtons
                  className={clsx(!showButtons && 'pointer-events-none invisible')}
                  colorScheme={colorScheme}
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

export function ProductsCarouselSkeleton({
  className,
  placeholderCount = 8,
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
              className="min-w-0 shrink-0 grow-0 basis-full pl-4 @md:basis-1/2 @lg:basis-1/3 @2xl:basis-1/4 @2xl:pl-5"
              key={index}
            >
              <ProductCardSkeleton />
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

export function ProductsCarouselEmptyState({
  className,
  placeholderCount = 8,
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
              className="min-w-0 shrink-0 grow-0 basis-full pl-4 @md:basis-1/2 @lg:basis-1/3 @2xl:basis-1/4 @2xl:pl-5"
              key={index}
            >
              <ProductCardSkeleton />
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
