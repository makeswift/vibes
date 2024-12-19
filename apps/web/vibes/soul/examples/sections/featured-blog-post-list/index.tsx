import { posts } from '@/vibes/soul/examples/sections/blog-post-list';
import { BlogPost } from '@/vibes/soul/primitives/blog-post-card';
import { FeaturedBlogPostList } from '@/vibes/soul/sections/featured-blog-post-list';

export default function Preview() {
  const blogPostsPromise = new Promise<BlogPost[]>((resolve) => {
    setTimeout(() => resolve(posts), 1000);
  });

  return (
    <FeaturedBlogPostList
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
      paginationInfo={{
        startCursor: '1',
        endCursor: '5',
      }}
      posts={blogPostsPromise}
      title="Plant Life"
    />
  );
}
