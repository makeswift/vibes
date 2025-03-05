import { Streamable } from '@/vibes/soul/lib/streamable';
import { ButtonLink } from '@/vibes/soul/primitives/button-link';
import { ListProduct, ProductsList } from '@/vibes/soul/primitives/products-list';
import { StickySidebarLayout } from '@/vibes/soul/sections/sticky-sidebar-layout';

interface Link {
  label: string;
  href: string;
}

export interface FeaturedProductListProps {
  title: string;
  description?: string;
  cta?: Link;
  products: Streamable<ListProduct[]>;
  emptyStateTitle?: Streamable<string>;
  emptyStateSubtitle?: Streamable<string>;
  placeholderCount?: number;
}

/**
 * This component supports various CSS variables for theming. Here's a comprehensive list, along
 * with their default values:
 *
 * ```css
 * :root {
 *   --featured-product-list-font-family: var(--font-family-body);
 *   --featured-product-list-title-font-family: var(--font-family-heading);
 *   --featured-product-list-title: hsl(var(--foreground));
 *   --featured-product-list-description: hsl(var(--contrast-500));
 * }
 * ```
 */
export function FeaturedProductList({
  title,
  description,
  cta,
  products,
  emptyStateTitle,
  emptyStateSubtitle,
  placeholderCount,
}: FeaturedProductListProps) {
  return (
    <StickySidebarLayout
      sidebar={
        <header className="font-[family-name:var(--featured-product-list-font-family,var(--font-family-body))]">
          <h2 className="mb-3 font-[family-name:var(--featured-product-list-title-font-family,var(--font-family-heading))] text-4xl font-medium leading-none text-[var(--featured-product-list-title,hsl(var(--foreground)))] @4xl:text-5xl">
            {title}
          </h2>
          {description != null && description !== '' && (
            <p className="mb-8 max-w-xl text-lg font-light leading-normal text-[var(--featured-product-list-description,hsl(var(--contrast-500)))]">
              {description}
            </p>
          )}
          {cta?.href != null && cta.href !== '' && cta.label !== '' && (
            <ButtonLink href={cta.href} variant="secondary">
              {cta.label}
            </ButtonLink>
          )}
        </header>
      }
      sidebarSize="1/3"
    >
      <div className="group/product-list flex-1">
        <ProductsList
          emptyStateSubtitle={emptyStateSubtitle}
          emptyStateTitle={emptyStateTitle}
          placeholderCount={placeholderCount}
          products={products}
        />
      </div>
    </StickySidebarLayout>
  );
}
