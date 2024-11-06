import Image from 'next/image'

import { clsx } from 'clsx'

import { Breadcrumbs } from '@/vibes/soul/primitives/breadcrumbs'

interface Image {
  src: string
  alt: string
}

interface Props {
  id: string
  title: string
  author: string
  date: string
  content: string
  image: Image
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
    <section className={clsx('@container', className)}>
      <div className="mx-auto max-w-screen-2xl px-4 py-10 @xl:px-6 @xl:py-14 @4xl:px-8 @4xl:py-20">
        <header className="mx-auto w-full max-w-4xl pb-10 @4xl:pb-16">
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

          <h1 className="mb-4 mt-8 font-heading text-4xl font-medium leading-none @xl:text-5xl @4xl:text-6xl">
            {title}
          </h1>
          <p>
            {date} • {author}
          </p>
        </header>

        <Image
          src={image.src}
          alt={image.alt}
          height={780}
          width={1280}
          className="aspect-video w-full rounded-2xl bg-contrast-100 object-cover"
        />

        <article
          dangerouslySetInnerHTML={{ __html: content }}
          className="prose mx-auto w-full max-w-4xl space-y-4 pt-10 @4xl:pt-16 [&_h2]:font-heading [&_h3]:font-semibold [&_h4]:font-semibold [&_h5]:font-semibold [&_h6]:font-semibold [&_img]:mx-auto [&_img]:max-h-[600px] [&_img]:w-fit [&_img]:rounded-2xl [&_img]:object-cover"
        />
      </div>
    </section>
  )
}
