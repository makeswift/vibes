import Link from 'next/link'

import { cn } from '@/lib/utils'

interface Image {
  altText: string
  url: string
}
interface Link {
  href: string
}

interface BlogPost {
  author?: string
  className?: string
  content?: string
  date: string
  image?: Image
  link: Link
  title: string
}

interface Props {
  className?: string
  title: string
  posts: BlogPost[]
  cta?: { label: string; href: string }
}

export default function BlogListSection({ className, title, posts, cta }: Props) {
  return (
    <section
      className={cn(
        'flex w-full flex-col gap-20 border-b-2 border-t-2 border-foreground bg-contrast-200 px-2 py-32 text-center text-foreground @lg:py-44',
        className
      )}
    >
      <div className="font-mono text-sm uppercase leading-[1.375rem] tracking-[0.02em]">
        {title}
      </div>
      <div className="flex flex-col items-center gap-8 whitespace-pre-wrap font-body text-sm font-medium leading-6 -tracking-[0.01em] @lg:text-2xl @lg:leading-9">
        {posts.map(({ link, title: postTitle, date }, index) => (
          <Link
            key={index}
            href={link.href}
            className="decoration-foreground decoration-dashed decoration-2 underline-offset-4 hover:underline"
          >
            {postTitle}, {date}
          </Link>
        ))}
      </div>
      {cta && (
        <Link
          className="font-mono text-sm uppercase leading-[1.375rem] tracking-[0.02em] underline"
          href={cta.href}
        >
          {cta.label}
        </Link>
      )}
    </section>
  )
}
