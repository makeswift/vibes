import { Stream, Streamable } from '@/vibes/soul/lib/streamable';
import { CursorPagination, CursorPaginationInfo } from '@/vibes/soul/primitives/cursor-pagination';
import { Rating } from '@/vibes/soul/primitives/rating';
import { StickySidebarLayout } from '@/vibes/soul/sections/sticky-sidebar-layout';
import * as Skeleton from '@/vibes/soul/primitives/skeleton';

interface Review {
  id: string;
  rating: number;
  review: string;
  name: string;
  date: string;
}

export interface ReviewsProps {
  reviews: Streamable<Review[]>;
  averageRating: Streamable<number>;
  totalCount?: Streamable<number>;
  paginationInfo?: Streamable<CursorPaginationInfo>;
  nextLabel?: Streamable<string>;
  previousLabel?: Streamable<string>;
  emptyStateMessage?: string;
  reviewsLabel?: string;
}

/**
 * This component supports various CSS variables for theming. Here's a comprehensive list, along
 * with their default values:
 *
 * ```css
 * :root {
 *   --reviews-font-family: var(--font-family-body);
 *   --reviews-title-font-family: var(--font-family-heading);
 *   --reviews-border: hsl(var(--contrast-100));
 *   --reviews-count: hsl(var(--contrast-300));
 *   -reviews-average: hsl(var(--foreground));
 *   --reviews-name: hsl(var(--foreground));
 *   --reviews-review: hsl(var(--contrast-500));
 *   --reviews-date: hsl(var(--contrast-500));
 *   --reviews-empty-message: hsl(var(--foreground));
 * }
 * ```
 */
export function Reviews({
  reviews: streamableReviews,
  averageRating: streamableAverageRating,
  totalCount: streamableTotalCount,
  paginationInfo: streamablePaginationInfo,
  nextLabel,
  previousLabel,
  emptyStateMessage,
  reviewsLabel = 'Reviews',
}: Readonly<ReviewsProps>) {
  return (
    <Stream fallback={<ReviewsSkeleton reviewsLabel={reviewsLabel} />} value={streamableReviews}>
      {(reviews) => {
        if (reviews.length === 0)
          return <ReviewsEmptyState message={emptyStateMessage} reviewsLabel={reviewsLabel} />;

        return (
          <StickySidebarLayout
            className="group/reviews font-[family-name:var(--button-font-family,var(--font-family-body))]"
            sidebar={
              <div>
                <div className="mb-4 mt-0 flex items-center gap-x-1.5 font-[family-name:var(--reviews-title-font-family,var(--font-family-heading))] text-xl font-medium @xl:my-5 @xl:text-2xl">
                  <h2>{reviewsLabel}</h2>
                  <Stream fallback={<TotalCountSkeleton />} value={streamableTotalCount}>
                    {(totalCount) => (
                      <p className="text-[var(--reviews-count,hsl(var(--contrast-300)))]">
                        {totalCount}
                      </p>
                    )}
                  </Stream>
                </div>
                <div className="space-y-2">
                  <Stream fallback={<AverageRatingSkeleton />} value={streamableAverageRating}>
                    {(averageRating) => (
                      <>
                        <p className="font-[family-name:var(--reviews-title-font-family,var(--font-family-heading))] text-5xl leading-none tracking-tighter text-[var(--reviews-average,hsl(var(--foreground)))] @2xl:text-6xl">
                          {averageRating}
                        </p>
                        <Rating rating={averageRating} showRating={false} />
                      </>
                    )}
                  </Stream>
                </div>
              </div>
            }
            sidebarSize="md"
          >
            <div className="flex-1 border-t border-[var(--reviews-border,hsl(var(--contrast-100)))]">
              {reviews.map(({ id, rating, review, name, date }) => {
                return (
                  <div
                    className="border-b border-[var(--reviews-border,hsl(var(--contrast-100)))] py-6"
                    key={id}
                  >
                    <Rating rating={rating} />
                    <p className="mt-5 text-lg font-semibold text-[var(--reviews-name,hsl(var(--foreground)))]">
                      {name}
                    </p>
                    <p className="mb-8 mt-2 leading-normal text-[var(--reviews-review,hsl(var(--contrast-500)))]">
                      {review}
                    </p>
                    <p className="text-sm text-[var(--reviews-date,hsl(var(--contrast-500)))]">
                      {date}
                    </p>
                  </div>
                );
              })}
              <Stream value={streamablePaginationInfo}>
                {(paginationInfo) =>
                  paginationInfo && (
                    <CursorPagination
                      info={paginationInfo}
                      nextLabel={nextLabel}
                      previousLabel={previousLabel}
                      scroll={false}
                    />
                  )
                }
              </Stream>
            </div>
          </StickySidebarLayout>
        );
      }}
    </Stream>
  );
}

export function ReviewsEmptyState({
  message = 'No reviews have been added for this product',
  reviewsLabel = 'Reviews',
}: {
  message?: string;
  reviewsLabel?: string;
}) {
  return (
    <StickySidebarLayout
      sidebar={
        <div>
          <div className="mb-4 mt-0 flex items-center gap-x-1.5 font-[family-name:var(--reviews-title-font-family,var(--font-family-heading))] text-xl font-medium @xl:my-5 @xl:text-2xl">
            <h2 className="">{reviewsLabel}</h2>
            <p className="text-[var(--reviews-count,hsl(var(--contrast-300)))]">0</p>
          </div>
          <div className="space-y-2">
            <p className="font-[family-name:var(--reviews-title-font-family,var(--font-family-heading))] text-5xl leading-none tracking-tighter text-[var(--reviews-average,hsl(var(--foreground)))] @2xl:text-6xl">
              0
            </p>
            <Rating rating={0} showRating={false} />
          </div>
        </div>
      }
      sidebarSize="md"
    >
      <div className="flex-1 border-t border-[var(--reviews-border,hsl(var(--contrast-100)))] py-12">
        <p className="text-center text-[var(--reviews-empty-message,hsl(var(--foreground)))]">
          {message}
        </p>
      </div>
    </StickySidebarLayout>
  );
}

export function ReviewsSkeleton({ reviewsLabel = 'Reviews' }: Pick<ReviewsProps, 'reviewsLabel'>) {
  return (
    <StickySidebarLayout
      className="group/reviews"
      sidebar={
        <div>
          <div className="mb-4 mt-0 flex items-center gap-x-1.5 font-[family-name:var(--reviews-title-font-family,var(--font-family-heading))] text-xl font-medium @xl:my-5 @xl:text-2xl">
            <h2 className="">{reviewsLabel}</h2>
            <TotalCountSkeleton />
          </div>
          <div className="space-y-2">
            <AverageRatingSkeleton />
          </div>
        </div>
      }
      sidebarSize="md"
    >
      <Skeleton.Root
        className="flex-1 border-t border-[var(--reviews-border,hsl(var(--contrast-100)))] group-has-[[data-pending]]/reviews:animate-pulse"
        pending
      >
        <div data-pending>
          {Array.from({ length: 3 }).map((_, index) => (
            <div
              className="border-b border-[var(--reviews-border,hsl(var(--contrast-100)))] py-6"
              key={index}
            >
              <Skeleton.Box className="h-6 w-32 rounded-md" />
              <Skeleton.Text characterCount={10} className="mt-5 rounded-md text-lg" />
              <div className="mt-2 text-base">
                <Skeleton.Text characterCount="full" className="rounded" />
                <Skeleton.Text characterCount={70} className="rounded" />
                <Skeleton.Text characterCount={40} className="rounded" />
              </div>
              <Skeleton.Text characterCount={8} className="mt-8 rounded text-sm" />
            </div>
          ))}
        </div>
      </Skeleton.Root>
    </StickySidebarLayout>
  );
}

function TotalCountSkeleton() {
  return (
    <Skeleton.Root className="w-full group-has-[[data-pending]]/reviews:animate-pulse" pending>
      <Skeleton.Text
        data-pending
        characterCount={3}
        className="rounded-md text-xl @xl:my-5 @xl:text-2xl"
      />
    </Skeleton.Root>
  );
}

function AverageRatingSkeleton() {
  return (
    <>
      <Skeleton.Root className="w-full group-has-[[data-pending]]/reviews:animate-pulse" pending>
        <Skeleton.Text
          characterCount={2}
          className="rounded-md text-5xl @2xl:text-6xl"
          data-pending
        />
      </Skeleton.Root>
      <RatingSkeleton />
    </>
  );
}

function RatingSkeleton() {
  return (
    <Skeleton.Root className="w-full group-has-[[data-pending]]/reviews:animate-pulse" pending>
      <Skeleton.Box data-pending className="h-6 w-32 rounded-md" />
    </Skeleton.Root>
  );
}
