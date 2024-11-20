import { Suspense } from 'react'

import { Streamable } from '@/vibes/soul/lib/streamable'
import { mapStreamable } from '@/vibes/soul/lib/streamable/server'
import { CursorPagination, CursorPaginationInfo } from '@/vibes/soul/primitives/cursor-pagination'
import { Rating } from '@/vibes/soul/primitives/rating'
import { StickySidebarLayout } from '@/vibes/soul/sections/sticky-sidebar-layout'

interface Review {
  id: string
  rating: number
  review: string
  name: string
  date: string
}

interface Props {
  reviews: Streamable<Review[]>
  averageRating: Streamable<number>
  totalCount?: Streamable<number>
  paginationInfo?: Streamable<CursorPaginationInfo>
  emptyStateMessage?: string
  reviewsLabel?: string
}

async function ReviewsImpl({
  reviews: streamableReviews,
  averageRating: streamableAverageRating,
  totalCount: streamableTotalCount,
  paginationInfo: streamablePaginationInfo,
  emptyStateMessage,
  reviewsLabel = 'Reviews',
}: Readonly<Props>) {
  const reviews = await mapStreamable(streamableReviews, resolvedReviews => resolvedReviews)

  if (reviews.length === 0) return <ReviewsEmptyState message={emptyStateMessage} />

  return (
    <StickySidebarLayout
      sidebar={
        <>
          <Suspense
            fallback={
              <div className="animate-pulse">
                <h2 className="mb-4 mt-0 text-xl font-medium @xl:my-5 @xl:text-2xl">
                  {reviewsLabel}
                </h2>
              </div>
            }
          >
            {mapStreamable(streamableTotalCount, totalCount => (
              <h2 className="mb-4 mt-0 text-xl font-medium @xl:my-5 @xl:text-2xl">
                {reviewsLabel} <span className="text-contrast-300">{totalCount}</span>
              </h2>
            ))}
          </Suspense>
          <Suspense
            fallback={
              <div className="animate-pulse">
                <div className="mb-2 h-[1lh] w-[3ch] rounded-md bg-contrast-100 font-heading text-5xl leading-none tracking-tighter @2xl:text-6xl" />
                <div className="h-5 w-32 rounded-md bg-contrast-100" />
              </div>
            }
          >
            {mapStreamable(streamableAverageRating, averageRating => (
              <>
                <div className="mb-2 font-heading text-5xl leading-none tracking-tighter @2xl:text-6xl">
                  {averageRating}
                </div>
                <Rating rating={averageRating} showRating={false} />
              </>
            ))}
          </Suspense>
        </>
      }
      sidebarSize="medium"
    >
      <div className="flex-1 border-t border-contrast-100">
        {reviews.map(({ id, rating, review, name, date }) => {
          return (
            <div key={id} className="border-b border-contrast-100 py-6">
              <Rating rating={rating} />
              <p className="mt-5 text-lg font-semibold text-foreground">{name}</p>
              <p className="mb-8 mt-2 leading-normal text-contrast-500">{review}</p>
              <p className="text-sm text-contrast-500">{date}</p>
            </div>
          )
        })}

        <Suspense>
          {mapStreamable(
            streamablePaginationInfo,
            paginationInfo =>
              paginationInfo && <CursorPagination info={paginationInfo} scroll={false} />
          )}
        </Suspense>
      </div>
    </StickySidebarLayout>
  )
}

export function ReviewsEmptyState({
  message = 'No reviews have been added for this product',
  reviewsLabel = 'Reviews',
}: {
  message?: string
  reviewsLabel?: string
}) {
  return (
    <StickySidebarLayout
      sidebar={
        <>
          <h2 className="mb-4 mt-0 text-xl font-medium @xl:my-5 @xl:text-2xl">
            {reviewsLabel} <span className="text-contrast-300">0</span>
          </h2>
          <div className="mb-2 font-heading text-5xl leading-none tracking-tighter @2xl:text-6xl">
            0
          </div>
          <Rating rating={0} />
        </>
      }
      sidebarSize="medium"
    >
      <div className="flex-1 border-t border-contrast-100 py-12">
        <p className="text-center">{message}</p>
      </div>
    </StickySidebarLayout>
  )
}

export function ReviewsSkeleton({ reviewsLabel = 'Reviews' }: { reviewsLabel?: string }) {
  return (
    <StickySidebarLayout
      sidebar={
        <div className="animate-pulse">
          <h2 className="mb-4 mt-0 text-xl font-medium @xl:my-5 @xl:text-2xl">{reviewsLabel}</h2>
          <div className="mb-2 h-[1lh] w-[3ch] rounded-md bg-contrast-100 font-heading text-5xl leading-none tracking-tighter @2xl:text-6xl" />
          <div className="h-5 w-32 rounded-md bg-contrast-100" />
        </div>
      }
      sidebarSize="medium"
    >
      <div className="flex-1 animate-pulse border-t border-contrast-100">
        {Array.from({ length: 3 }).map((_, index) => (
          <div key={index} className="border-b border-contrast-100 py-6">
            <div className="h-5 w-32 rounded-md bg-contrast-100" />
            <div className="mt-5 h-[1lh] rounded-md bg-contrast-100 text-lg font-semibold"></div>
            <div className="mb-8 mt-2 h-[1lh] w-1/2 rounded-md bg-contrast-100 leading-normal"></div>
            <div className="h-[1lh] w-24 rounded-md bg-contrast-100 text-sm"></div>
          </div>
        ))}
      </div>
    </StickySidebarLayout>
  )
}

export function Reviews({ reviewsLabel = 'Reviews', ...props }: Props) {
  return (
    <Suspense fallback={<ReviewsSkeleton />}>
      <ReviewsImpl {...props} reviewsLabel={reviewsLabel} />
    </Suspense>
  )
}
