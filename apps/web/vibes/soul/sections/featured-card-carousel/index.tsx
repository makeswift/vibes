import { Streamable } from '@/vibes/soul/lib/streamable';
import { AnimatedLink } from '@/vibes/soul/primitives/animated-link';
import { type CardContent } from '@/vibes/soul/primitives/card';
import { CardCarousel } from '@/vibes/soul/sections/card-carousel';
import { SectionLayout } from '@/vibes/soul/sections/section-layout';

interface Link {
  label: string;
  href: string;
}

export interface FeaturedCardCarouselProps {
  title: string;
  description?: string;
  cta?: Link;
  cards: Streamable<CardContent[]>;
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
 *   --featured-card-carousel-title: hsl(var(--foreground));
 *   --featured-card-carousel-description: hsl(var(--contrast-500));
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
        <header className="font-[family-name:var(--featured-card-carousel-font-family,var(--font-family-body))]">
          <h2 className="font-[family-name:var(--featured-card-carousel-title-font-family,var(--font-family-heading))] font-heading text-2xl font-medium leading-none text-[var(--featured-card-carousel-title,hsl(var(--foreground)))] @xl:text-3xl @4xl:text-4xl">
            {title}
          </h2>
          {description != null && description !== '' && (
            <p className="mt-3 max-w-xl text-[var(--featured-card-carousel-description,hsl(var(--contrast-500)))]">
              {description}
            </p>
          )}
        </header>
        {cta != null && cta.href !== '' && cta.label !== '' && (
          <AnimatedLink className="mr-3" href={cta.href}>
            {cta.label}
          </AnimatedLink>
        )}
      </div>
      <div className="group/card-carousel">
        <CardCarousel cards={cards} scrollbarLabel={scrollbarLabel} />
      </div>
    </SectionLayout>
  );
}
