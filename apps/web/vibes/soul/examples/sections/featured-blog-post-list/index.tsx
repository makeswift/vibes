import { posts } from '@/vibes/soul/examples/sections/blog-post-list';
import { FeaturedBlogPostList } from '@/vibes/soul/sections/featured-blog-post-list';

export default function Preview() {
  return (
    <FeaturedBlogPostList
      title="Plant Life"
      description="Expert Tips & Inspiration for Every Plant Lover"
      cta={{ href: '#', label: 'View All' }}
      posts={posts}
    />
  );
}
