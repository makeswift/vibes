import Link from 'next/link';

import { Streamable } from '@/vibes/soul/lib/streamable';
import { AnimatedUnderline } from '@/vibes/soul/primitives/animated-underline';
import { CarouselProduct, ProductCarousel } from '@/vibes/soul/sections/product-carousel';
import { SectionLayout } from '@/vibes/soul/sections/section-layout';

interface Link {
  label: string;
  href: string;
}

export interface FeaturedProductCarouselProps {
  title: string;
  description?: string;
  cta?: Link;
  products: Streamable<CarouselProduct[]>;
  emptyStateTitle?: Streamable<string>;
  emptyStateSubtitle?: Streamable<string>;
  placeholderCount?: number;
  scrollbarLabel?: string;
  previousLabel?: string;
  nextLabel?: string;
  hideOverflow?: boolean;
}

/**
 * This component supports various CSS variables for theming. Here's a comprehensive list, along
 * with their default values:
 *
 * ```css
 * :root {
 *   --featured-product-carousel-font-family: var(--font-family-body);
 *   --featured-product-carousel-title-font-family: var(--font-family-heading);
 *   --featured-product-carousel-title: var(--foreground);
 *   --featured-product-carousel-description: var(--contrast-500);
 * }
 * ```
 */
export function FeaturedProductCarousel({
  title,
  description,
  cta,
  products,
  emptyStateTitle,
  emptyStateSubtitle,
  placeholderCount,
  scrollbarLabel,
  previousLabel,
  nextLabel,
  hideOverflow = false,
}: FeaturedProductCarouselProps) {
  return (
    <SectionLayout containerSize="2xl">
      <div className="mb-6 flex w-full flex-row flex-wrap items-end justify-between gap-x-8 gap-y-6 @4xl:mb-8">
        <header className="font-(family-name:--featured-product-carousel-font-family,var(--font-family-body))">
          <h2 className="font-(family-name:--featured-product-carousel-title-font-family,var(--font-family-heading)) text-2xl leading-none text-(--featured-product-carousel-title,var(--foreground)) @xl:text-3xl @4xl:text-4xl">
            {title}
          </h2>
          {description != null && description !== '' && (
            <p className="mt-3 max-w-xl leading-relaxed text-(--featured-product-carousel-description,var(--contrast-500))">
              {description}
            </p>
          )}
        </header>
        {cta != null && cta.href !== '' && cta.label !== '' && (
          <Link className="group/underline focus:outline-hidden" href={cta.href}>
            <AnimatedUnderline className="mr-3">{cta.label}</AnimatedUnderline>
          </Link>
        )}
      </div>
      <div className="group/product-carousel">
        <ProductCarousel
          emptyStateSubtitle={emptyStateSubtitle}
          emptyStateTitle={emptyStateTitle}
          hideOverflow={hideOverflow}
          nextLabel={nextLabel}
          placeholderCount={placeholderCount}
          previousLabel={previousLabel}
          products={products}
          scrollbarLabel={scrollbarLabel}
        />
      </div>
    </SectionLayout>
  );
}
