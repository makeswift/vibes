import { Streamable } from '@/vibes/soul/lib/streamable';
import { type BlogPost } from '@/vibes/soul/primitives/blog-post-card';
import { CursorPagination, CursorPaginationInfo } from '@/vibes/soul/primitives/cursor-pagination';
import { BlogPostList } from '@/vibes/soul/sections/blog-post-list';
import { type Breadcrumb, Breadcrumbs } from '@/vibes/soul/sections/breadcrumbs';
import { SectionLayout } from '@/vibes/soul/sections/section-layout';

export interface FeaturedBlogPostListProps {
  title: string;
  description?: string | null;
  blogPosts: Streamable<BlogPost[]>;
  paginationInfo?: Streamable<CursorPaginationInfo>;
  breadcrumbs?: Streamable<Breadcrumb[]>;
  emptyStateSubtitle?: Streamable<string>;
  emptyStateTitle?: Streamable<string>;
  placeholderCount?: number;
}

/**
 * This component supports various CSS variables for theming. Here's a comprehensive list, along
 * with their default values:
 *
 * ```css
 * :root {
 *   --featured-blog-post-list-font-family: var(--font-family-body);
 *   --featured-blog-post-list-title-font-family: var(--font-family-body);
 *   --featured-blog-post-list-title: var(--foreground);
 *   --featured-blog-post-list-description: var(--contrast-500);
 * }
 * ```
 */
export function FeaturedBlogPostList({
  title,
  description,
  blogPosts,
  paginationInfo,
  breadcrumbs,
  emptyStateSubtitle,
  emptyStateTitle,
  placeholderCount,
}: FeaturedBlogPostListProps) {
  return (
    <SectionLayout>
      {breadcrumbs && <Breadcrumbs breadcrumbs={breadcrumbs} />}
      <div className="pt-6">
        <header className="font-(family-name:--featured-blog-post-list-font-family,var(--font-family-body))">
          <h1 className="mb-3 font-(family-name:--featured-blog-post-list-title-font-family,var(--font-family-heading)) text-4xl leading-none font-medium text-(--featured-blog-post-list-title,var(--foreground)) @xl:text-5xl @4xl:text-6xl">
            {title}
          </h1>
          {description != null && description !== '' && (
            <p className="max-w-lg text-lg text-(--featured-blog-post-list-description,var(--contrast-500))">
              {description}
            </p>
          )}
        </header>
        <div className="group/blog-post-list">
          <BlogPostList
            blogPosts={blogPosts}
            className="mt-8 mb-8 @4xl:mt-10 @4xl:mb-10"
            emptyStateSubtitle={emptyStateSubtitle}
            emptyStateTitle={emptyStateTitle}
            placeholderCount={placeholderCount}
          />
        </div>
        {paginationInfo && <CursorPagination info={paginationInfo} />}
      </div>
    </SectionLayout>
  );
}
