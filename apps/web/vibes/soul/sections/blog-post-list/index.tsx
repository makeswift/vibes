import { clsx } from 'clsx';

import { Stream, Streamable } from '@/vibes/soul/lib/streamable';
import {
  BlogPostCard,
  BlogPostCardSkeleton,
  BlogPostWithId,
} from '@/vibes/soul/primitives/blog-post-card';
import * as Skeleton from '@/vibes/soul/primitives/skeleton';

export interface BlogPostListProps {
  blogPosts: Streamable<BlogPostWithId[]>;
  className?: string;
  emptyStateSubtitle?: Streamable<string | null>;
  emptyStateTitle?: Streamable<string | null>;
  placeholderCount?: number;
  pending?: boolean;
}

export function BlogPostList({
  blogPosts: streamableBlogPosts,
  className = '',
  emptyStateTitle,
  emptyStateSubtitle,
  placeholderCount = 6,
}: BlogPostListProps) {
  return (
    <Stream
      fallback={
        <BlogPostListSkeleton className={className} pending placeholderCount={placeholderCount} />
      }
      value={streamableBlogPosts}
    >
      {(blogPosts) => {
        if (blogPosts.length === 0) {
          return (
            <BlogPostListEmptyState
              className={className}
              emptyStateSubtitle={emptyStateSubtitle}
              emptyStateTitle={emptyStateTitle}
              placeholderCount={placeholderCount}
            />
          );
        }

        return (
          <div className={clsx('@container', className)}>
            <div className="mx-auto grid grid-cols-1 gap-x-5 gap-y-8 @md:grid-cols-2 @xl:gap-y-10 @3xl:grid-cols-3">
              {blogPosts.map(({ id, ...props }) => (
                <BlogPostCard key={id} {...props} />
              ))}
            </div>
          </div>
        );
      }}
    </Stream>
  );
}

export function BlogPostListSkeleton({
  className,
  placeholderCount = 6,
  pending = false,
}: Pick<BlogPostListProps, 'className' | 'placeholderCount' | 'pending'>) {
  return (
    <Skeleton.Root
      className={clsx('group-has-[[data-pending]]/blog-post-list:animate-pulse', className)}
      pending={pending}
    >
      <div className="mx-auto grid grid-cols-1 gap-x-5 gap-y-8 @md:grid-cols-2 @xl:gap-y-10 @3xl:grid-cols-3">
        {Array.from({ length: placeholderCount }).map((_, index) => (
          <BlogPostCardSkeleton key={index} />
        ))}
      </div>
    </Skeleton.Root>
  );
}

export function BlogPostListEmptyState({
  className,
  placeholderCount = 6,
  emptyStateTitle,
  emptyStateSubtitle,
}: Omit<BlogPostListProps, 'blogPosts'>) {
  return (
    <div className={clsx('relative w-full @container', className)}>
      <div
        className={clsx(
          'mx-auto grid grid-cols-1 gap-x-5 gap-y-8 [mask-image:linear-gradient(to_bottom,_black_0%,_transparent_90%)] @md:grid-cols-2 @xl:gap-y-10 @3xl:grid-cols-3',
        )}
      >
        {Array.from({ length: placeholderCount }).map((_, index) => (
          <BlogPostCardSkeleton key={index} />
        ))}
      </div>
      <div className="absolute inset-0 mx-auto px-3 py-16 pb-3 @4xl:px-10 @4xl:pb-10 @4xl:pt-28">
        <div className="mx-auto max-w-xl space-y-2 text-center @4xl:space-y-3">
          <h3 className="font-heading text-2xl leading-tight text-foreground @4xl:text-4xl @4xl:leading-none">
            {emptyStateTitle}
          </h3>
          <p className="text-sm text-contrast-500 @4xl:text-lg">{emptyStateSubtitle}</p>
        </div>
      </div>
    </div>
  );
}
