import Image from 'next/image'

import { clsx } from 'clsx'

import { Breadcrumbs } from '@/vibes/soul/primitives/breadcrumbs'

interface Props {
  id: string
  title: string
  author: string
  date: string
  content: string
  image: string
  className?: string
}

export const BlogPostContent = function BlogPostContent({
  title,
  author,
  date,
  content,
  image,
  className = '',
}: Props) {
  return (
    <section className={clsx('w-full bg-background pt-0.5 @container', className)}>
      <div className="px-3 @xl:px-6 @5xl:px-20">
        <div className="mx-auto w-full max-w-4xl space-y-4 pb-12 pt-32 @5xl:pb-16 @5xl:pt-40">
          <Breadcrumbs
            breadcrumbs={[
              {
                label: 'Home',
                href: '#',
              },
              {
                label: 'Blog',
                href: '#',
              },
              {
                label: title,
                href: '#',
              },
            ]}
          />

          <h1 className="mt-2 text-4xl font-medium leading-[1.1] @4xl:text-6xl">{title}</h1>
          <p>
            {date} • {author}
          </p>
        </div>

        <Image
          src={image}
          alt={title}
          height={780}
          width={1280}
          className="mx-auto aspect-[5/3] w-full max-w-7xl rounded-2xl"
        />

        <div
          id={content}
          dangerouslySetInnerHTML={{ __html: content }}
          className="mx-auto w-full max-w-4xl space-y-4 py-20"
        />
      </div>
    </section>
  )
}
