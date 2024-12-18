import { posts } from '@/vibes/soul/examples/sections/blog-post-list';
import { BlogPost } from '@/vibes/soul/primitives/blog-post-card';
import { FeaturedBlogPostList } from '@/vibes/soul/sections/featured-blog-post-list';

export default function Preview() {
  const blogPostsPromise = new Promise<BlogPost[]>((resolve) => {
    setTimeout(() => resolve(posts), 1000);
  });

  return (
    <FeaturedBlogPostList
      cta={{ href: '#', label: 'View All' }}
      description="Expert Tips & Inspiration for Every Plant Lover"
      posts={blogPostsPromise}
      title="Plant Life"
    />
  );
}
