import Image from 'next/image'
import Link from 'next/link'

import { cn } from '@/lib/utils'

interface Image {
  altText: string
  url: string
}

interface Link {
  href: string
  label?: string
}

interface Props {
  author: { name: string; href: string } | string
  className?: string
  content: React.ReactNode | string
  date: string
  image?: Image
  link: Link
  title: string
}

export default function BlogPostCard({
  className,
  date,
  author,
  link,
  image,
  title,
  content,
}: Props) {
  const authorHref = typeof author === 'object' ? author.href : undefined
  const authorName = typeof author === 'object' ? author.name : author

  const Author = authorHref ? (
    <Link className="underline" href={authorHref}>
      {authorName}
    </Link>
  ) : (
    <p className="underline">{authorName}</p>
  )

  return (
    <section
      className={cn(
        'flex w-full flex-col items-center justify-center gap-2 overflow-hidden bg-primary p-2 font-medium text-foreground @2xl:flex-row @2xl:gap-10',
        className
      )}
    >
      <div className="flex aspect-square w-full flex-col items-center justify-center gap-6 px-2 py-10 text-center @2xl:max-w-96">
        <span className="font-mono text-xs uppercase leading-[1.125rem] @2xl:text-sm @2xl:leading-[1.375rem] @2xl:tracking-[0.02em]">
          {date} BY {Author}
        </span>
        {image && (
          <div className="relative aspect-square w-[14.375rem] @2xl:w-[15.625rem]">
            <Image src={image.url} alt={image.altText} fill />
          </div>
        )}
        <h2 className="-mt-1 font-heading text-lg leading-8 -tracking-[0.01em] @2xl:text-6xl @2xl:leading-[4rem] @2xl:-tracking-[0.02em]">
          {title}
        </h2>
        <Link
          href={link.href}
          className="font-mono text-xs uppercase leading-[1.125rem] underline @2xl:text-sm @2xl:leading-[1.375rem] @2xl:tracking-[0.02em]"
        >
          {link.label}
        </Link>
      </div>
      <p className="flex flex-col items-center overflow-hidden text-ellipsis font-body text-lg leading-6 @2xl:max-w-[44.5rem] @2xl:items-center @2xl:text-2xl @2xl:leading-9 @2xl:-tracking-[0.01em]">
        {content}
      </p>
    </section>
  )
}
