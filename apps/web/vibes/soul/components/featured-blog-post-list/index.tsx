import Link from 'next/link'

import { BlogPost } from '@/vibes/soul/components/blog-post-card'
import BlogPostList from '@/vibes/soul/components/blog-post-list'
import Button from '@/vibes/soul/components/button'

interface Link {
  label: string
  href: string
}

interface Props {
  title: string
  description?: string
  cta?: Link
  posts: BlogPost[]
}

export const FeaturedBlogPostList = function FeaturedBlogPostList({
  title,
  description,
  cta,
  posts,
}: Props) {
  return (
    <section className="bg-background @container">
      <div className="relative mx-auto max-w-screen-2xl px-3 py-20 @xl:px-6 @4xl:py-24 @5xl:px-20">
        <h2 className="mb-2 font-heading text-3xl font-semibold leading-none text-foreground @4xl:text-6xl @4xl:font-medium">
          {title}
        </h2>
        {description && <p className="max-w-md text-foreground">{description}</p>}
        <BlogPostList posts={posts} className="mt-6 @4xl:mt-8" />
        {cta && (
          <Button className="mx-auto mt-12 bg-primary @4xl:mt-16" asChild>
            <Link href={cta.href}>{cta.label}</Link>
          </Button>
        )}
      </div>
    </section>
  )
}

export default FeaturedBlogPostList
