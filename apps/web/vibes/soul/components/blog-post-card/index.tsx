import Image from 'next/image'
import Link from 'next/link'

type Props = {
  title: string
  image: string
  description?: string
  link: { href: string; target?: string }
  date?: string
  author?: string
}

export const BlogPostCard = function BlogPostCard({
  title,
  image,
  description,
  link,
  date,
  author,
}: Props) {
  return (
    <Link
      href={link.href}
      target={link.target}
      className="group flex max-w-[466px] flex-col gap-2 text-foreground"
    >
      <div className="overflow-hidden">
        <Image
          src={image}
          height={600}
          width={467}
          alt={title}
          className="scale-105 bg-contrast-100 transition-transform duration-500 ease-out group-hover:scale-100"
        />
      </div>

      <h3 className="pb-1 pt-3 text-lg font-medium">{title}</h3>

      {description && <p className="line-clamp-3 text-contrast-400">{description}</p>}

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
