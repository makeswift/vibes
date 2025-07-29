import Link from 'next/link';

import { Streamable } from '@/vibes/soul/lib/streamable';
import { AnimatedUnderline } from '@/vibes/soul/primitives/animated-underline';
import { type CategoryCardContent } from '@/vibes/soul/primitives/category-card';
import { CategoryCardCarousel } from '@/vibes/soul/sections/category-card-carousel';
import { SectionLayout } from '@/vibes/soul/sections/section-layout';

interface Link {
  label: string;
  href: string;
}

export interface FeaturedCardCarouselProps {
  title: string;
  description?: string;
  cta?: Link;
  cards: Streamable<CategoryCardContent[]>;
  scrollbarLabel?: string;
}

/**
 * This component supports various CSS variables for theming. Here's a comprehensive list, along
 * with their default values:
 *
 * ```css
 * :root {
 *   --featured-card-carousel-font-family: var(--font-family-body);
 *   --featured-card-carousel-title-font-family: var(--font-family-body);
 *   --featured-card-carousel-title: var(--foreground);
 *   --featured-card-carousel-description: var(--contrast-500);
 * }
 * ```
 */
export function FeaturedCardCarousel({
  title,
  description,
  cta,
  cards,
  scrollbarLabel,
}: FeaturedCardCarouselProps) {
  return (
    <SectionLayout containerSize="2xl">
      <div className="mb-6 flex w-full flex-row flex-wrap items-end justify-between gap-x-8 gap-y-6 @4xl:mb-8">
        <header className="font-(family-name:--featured-card-carousel-font-family,var(--font-family-body))">
          <h2 className="font-(family-name:--featured-card-carousel-title-font-family,var(--font-family-heading)) text-2xl leading-none font-medium text-(--featured-card-carousel-title,var(--foreground)) @xl:text-3xl @4xl:text-4xl">
            {title}
          </h2>
          {description != null && description !== '' && (
            <p className="mt-3 max-w-xl text-(--featured-card-carousel-description,var(--contrast-500))">
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
      <div className="group/card-carousel">
        <CategoryCardCarousel cards={cards} scrollbarLabel={scrollbarLabel} />
      </div>
    </SectionLayout>
  );
}
