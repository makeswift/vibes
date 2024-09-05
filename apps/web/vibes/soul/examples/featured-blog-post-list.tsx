import { FeaturedBlogPostList } from '@/vibes/soul/components/featured-blog-post-list'
import { posts } from '@/vibes/soul/examples/blog-post-list'

export default function Preview() {
  return (
    <FeaturedBlogPostList
      title="Plant Life"
      description="Expert Tips & Inspiration for Every Plant Lover"
      cta={{ href: '#', label: 'View All' }}
      posts={posts}
    />
  )
}
