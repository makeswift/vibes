import { posts } from '@/vibes/soul/examples/sections/blog-post-list';
import { BlogPostWithId } from '@/vibes/soul/primitives/blog-post-card';
import { FeaturedBlogPostList } from '@/vibes/soul/sections/featured-blog-post-list';

export default function Preview() {
  const blogPostsPromise = new Promise<BlogPostWithId[]>((resolve) => {
    setTimeout(() => resolve(posts), 1000);
  });

  return (
    <FeaturedBlogPostList
      blogPosts={blogPostsPromise}
      breadcrumbs={[
        {
          label: 'Home',
          href: '#',
        },
        {
          label: 'Blog',
          href: '#',
        },
      ]}
      description="Expert Tips & Inspiration for Every Plant Lover"
      emptyStateSubtitle="Check back later for more content"
      emptyStateTitle="No blog posts found"
      paginationInfo={{
        startCursor: '1',
        endCursor: '5',
      }}
      placeholderCount={6}
      title="Plant Life"
    />
  );
}
