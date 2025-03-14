import { clsx } from 'clsx';

import { Button } from '@/vibes/soul/primitives/button';
import {
  ProductCard,
  ProductCardSkeleton,
  ProductCardWithId,
} from '@/vibes/soul/primitives/product-card';
import { Rating } from '@/vibes/soul/primitives/rating';
import * as Skeleton from '@/vibes/soul/primitives/skeleton';

export interface CompareCardWithId extends ProductCardWithId {
  description?: string;
  customFields?: Array<{ name: string; value: string }>;
}

export interface CompareCardProps {
  className?: string;
  product: CompareCardWithId;
  addToCartLabel?: string;
  descriptionLabel?: string;
  ratingLabel?: string;
  otherDetailsLabel?: string;
  addToCartAction?: (id: string) => Promise<void>;
  imageSizes?: string;
}

/**
 * This component supports various CSS variables for theming. Here's a comprehensive list, along
 * with their default values:
 *
 * ```css
 * :root {
 *   --compare-card-divider: hsl(var(--contrast-100));
 *   --compare-card-label: hsl(var(--foreground));
 *   --compare-card-description: hsl(var(--contrast-400));
 *   --compare-card-field: hsl(var(--foreground));
 *   --compare-card-font-family-primary: var(--font-family-body);
 *   --compare-card-font-family-secondary: var(--font-family-mono);
 * }
 * ```
 */
export function CompareCard({
  className,
  product,
  addToCartAction,
  addToCartLabel = 'Add to cart',
  descriptionLabel = 'Description',
  ratingLabel = 'Rating',
  otherDetailsLabel = 'Other details',
  imageSizes,
}: CompareCardProps) {
  return (
    <div
      className={clsx(
        'w-full max-w-md divide-y divide-[var(--compare-card-divider,hsl(var(--contrast-100)))] font-[family-name:var(--compare-card-font-family-primary,var(--font-family-body))] font-normal @container',
        className,
      )}
    >
      <div className="mb-2 space-y-4 pb-4">
        <ProductCard imageSizes={imageSizes} product={product} />
        {addToCartAction && (
          <form action={addToCartAction.bind(null, product.id)}>
            <Button className="w-full" size="medium" type="submit">
              {addToCartLabel}
            </Button>
          </form>
        )}
      </div>
      <div className="space-y-4 py-4">
        <div className="font-[family-name:var(--compare-card-font-family-secondary,var(--font-family-mono))] text-xs font-normal uppercase text-[var(--compare-card-label,hsl(var(--foreground)))]">
          {ratingLabel}
        </div>
        {product.rating != null ? (
          <Rating rating={product.rating} />
        ) : (
          <p className="text-sm text-[var(--compare-card-description,hsl(var(--contrast-400)))]">
            {' '}
            There are no reviews.
          </p>
        )}
      </div>
      <div className="space-y-4 py-4">
        <div className="font-[family-name:var(--compare-card-font-family-secondary,var(--font-family-mono))] text-xs font-normal uppercase text-[var(--compare-card-label,hsl(var(--foreground)))]">
          {descriptionLabel}
        </div>
        {product.description != null && product.description !== '' ? (
          <p className="text-sm text-[var(--compare-card-description,hsl(var(--contrast-400)))]">
            {product.description}
          </p>
        ) : (
          <p className="text-sm text-[var(--compare-card-description,hsl(var(--contrast-400)))]">
            {' '}
            There is no description available.
          </p>
        )}
      </div>
      {product.customFields != null ? (
        <div className="space-y-4 py-4">
          <div className="font-[family-name:var(--compare-card-font-family-secondary,var(--font-family-mono))] text-xs font-normal uppercase text-[var(--compare-card-label,hsl(var(--foreground)))]">
            {otherDetailsLabel}
          </div>
          {product.customFields.map((field, index) => (
            <div key={index}>
              <p className="text-xs font-normal text-[var(--compare-card-field,hsl(var(--foreground)))]">
                <strong>{field.name}</strong>: {field.value}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <div className="space-y-4 py-4">
          <div className="font-[family-name:var(--compare-card-font-family-secondary,var(--font-family-mono))] text-xs font-normal uppercase text-[var(--compare-card-label,hsl(var(--foreground)))]">
            {otherDetailsLabel}
          </div>
          <p className="text-sm text-[var(--compare-card-description,hsl(var(--contrast-400)))]">
            {' '}
            There are no other details available.
          </p>
        </div>
      )}
    </div>
  );
}

export function CompareCardSkeleton({ className }: { className?: string }) {
  return (
    <div
      className={clsx(
        'w-full max-w-md divide-y divide-[var(--skeleton,hsl(var(--contrast-300)/15%))] @container',
        className,
      )}
    >
      <div className="mb-2 space-y-4 pb-4">
        <ProductCardSkeleton />
        <Skeleton.Box className="h-12 rounded-full" />
      </div>
      <div className="space-y-4 py-4 text-xs">
        <Skeleton.Text characterCount={10} className="rounded" />
        <Skeleton.Box className="h-6 w-32 rounded" />
      </div>
      <div className="space-y-4 py-4 text-xs">
        <Skeleton.Text characterCount={12} className="rounded" />
        <div className="text-sm">
          <Skeleton.Text characterCount="full" className="rounded" />
          <Skeleton.Text characterCount={45} className="rounded" />
          <Skeleton.Text characterCount={40} className="rounded" />
        </div>
      </div>
    </div>
  );
}
