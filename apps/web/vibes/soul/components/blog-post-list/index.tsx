import clsx from 'clsx'

import BlogPostCard, {
  BlogPost,
  BlogPostCardSkeleton,
} from '@/vibes/soul/components/blog-post-card'

interface Props {
  posts: BlogPost[]
  className?: string
}

export const BlogPostList = function BlogPostList({ posts, className = '' }: Props) {
  return (
    <div className={clsx('w-full bg-background pt-0.5 @container', className)}>
      <div className="mx-auto grid max-w-screen-2xl grid-cols-1 gap-x-2 gap-y-10 px-3 @md:grid-cols-2 @xl:gap-x-5 @xl:gap-y-12 @xl:px-6 @4xl:grid-cols-3 @5xl:px-20">
        {posts && posts.length > 0
          ? posts.map(post => <BlogPostCard key={post.id} {...post} />)
          : Array.from({ length: 5 }).map((_, index) => <BlogPostCardSkeleton key={index} />)}
      </div>
    </div>
  )
}

export default BlogPostList
