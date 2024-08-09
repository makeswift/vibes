import Image from 'next/image'
import Link from 'next/link'

interface Props {
  publishedAt: string
  author: { name: string; href: string }
  cta: {
    href: string
    label: string
  }
  image?: string
  title: string
  blogPost: React.ReactNode
}

export default function BlogPostCard({ publishedAt, author, cta, image, title, blogPost }: Props) {
  return (
    <section className="flex w-full flex-col items-center justify-center gap-2 overflow-hidden bg-primary p-2 font-medium text-foreground @2xl:flex-row @2xl:gap-10">
      <div className="flex aspect-square w-full flex-col items-center justify-center gap-6 px-2 py-10 text-center @lg:max-w-96">
        <span className="font-mono text-xs uppercase leading-[var(----line-height-xs)] @lg:text-sm @lg:leading-[1.375rem] @lg:tracking-[0.02em]">
          {publishedAt} BY{' '}
          <Link className="underline" href={author.href}>
            {author.name}
          </Link>
        </span>
        {image && (
          <div className="relative aspect-square w-[14.375rem] @lg:w-[15.625rem]">
            <Image src={image} alt={title} fill />
          </div>
        )}
        <h2 className="-mt-1 font-heading text-lg leading-8 -tracking-[0.01em] @lg:text-6xl @lg:leading-[4rem] @lg:-tracking-[0.02em]">
          {title}
        </h2>
        <Link
          href={cta.href}
          className="font-mono text-xs uppercase leading-[var(----line-height-xs)] underline @lg:text-sm @lg:leading-[1.375rem] @lg:tracking-[0.02em]"
        >
          {cta.label}
        </Link>
      </div>
      <p className="flex flex-col items-center overflow-hidden text-ellipsis font-body text-lg leading-6 @lg:max-w-[44.5rem] @lg:items-center @lg:text-2xl @lg:leading-9 @lg:-tracking-[0.01em]">
        {blogPost}
      </p>
    </section>
  )
}
