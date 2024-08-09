import Image from 'next/image'
import Link from 'next/link'

import clsx from 'clsx'

interface Image {
  altText: string
  url: string
}

interface Props {
  author?: string | null
  content: string
  date: string
  image?: Image | null
  link: { href: string }
  title: string
  className?: string
}

export const BlogPostCard = function BlogPostCard({
  title,
  image,
  content,
  link,
  date,
  author,
  className = '',
}: Props) {
  return (
    <Link
      href={link.href}
      className={clsx('group flex max-w-[466px] flex-col gap-2 text-foreground', className)}
    >
      <div className="overflow-hidden rounded-xl">
        <Image
          src={image?.url ?? ''}
          height={349}
          width={466}
          alt={image?.altText ?? ''}
          className="bg-contrast-100 transition-transform duration-500 ease-out group-hover:scale-105"
        />
      </div>

      <h3 className="pb-1 pt-3 text-lg font-medium">{title}</h3>

      {content && <p className="line-clamp-3 text-contrast-400">{content}</p>}

      <div className="flex flex-wrap items-center">
        {date && (
          <time dateTime={date}>
            {new Date(date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </time>
        )}
        {date && author && <span className="after:mx-2 after:content-['•']" />}
        {author && author}
      </div>
    </Link>
  )
}

export default BlogPostCard
