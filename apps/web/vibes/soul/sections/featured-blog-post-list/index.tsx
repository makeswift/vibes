import { Streamable } from '@/vibes/soul/lib/streamable';
import { BlogPostWithId } from '@/vibes/soul/primitives/blog-post-card';
import { CursorPagination, CursorPaginationInfo } from '@/vibes/soul/primitives/cursor-pagination';
import { BlogPostList } from '@/vibes/soul/sections/blog-post-list';
import { Breadcrumbs, BreadcrumbWithId } from '@/vibes/soul/sections/breadcrumbs';
import { SectionLayout } from '@/vibes/soul/sections/section-layout';

interface Props {
  title: string;
  description?: string;
  blogPosts: Streamable<BlogPostWithId[]>;
  paginationInfo?: Streamable<CursorPaginationInfo>;
  breadcrumbs?: Streamable<BreadcrumbWithId[]>;
  emptyStateSubtitle?: Streamable<string>;
  emptyStateTitle?: Streamable<string>;
  placeholderCount?: number;
}

export function FeaturedBlogPostList({
  title,
  description,
  blogPosts,
  paginationInfo,
  breadcrumbs,
  emptyStateSubtitle,
  emptyStateTitle,
  placeholderCount,
}: Props) {
  return (
    <SectionLayout>
      {breadcrumbs && <Breadcrumbs breadcrumbs={breadcrumbs} />}

      <div className="pt-6">
        <h1 className="mb-3 font-heading text-4xl font-medium leading-none text-foreground @xl:text-5xl @4xl:text-6xl">
          {title}
        </h1>

        {description != null && description !== '' && (
          <p className="max-w-lg text-lg text-contrast-500">{description}</p>
        )}

        <BlogPostList
          blogPosts={blogPosts}
          className="mb-8 mt-8 @4xl:mb-10 @4xl:mt-10"
          emptyStateSubtitle={emptyStateSubtitle}
          emptyStateTitle={emptyStateTitle}
          placeholderCount={placeholderCount}
        />

        {paginationInfo && <CursorPagination info={paginationInfo} />}
      </div>
    </SectionLayout>
  );
}
