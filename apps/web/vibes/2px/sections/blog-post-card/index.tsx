interface Props {
  publishedAt: string
  author: { name: string; href: string }
  href: string
  image?: string
  title: string
  children: React.ReactNode
}

export default function BlogPostCard({ publishedAt, author, href, image, title, children }: Props) {
  return (
    <section className="flex h-fit flex-col overflow-hidden bg-primary p-2 font-medium text-foreground @lg:h-[38.5rem] @lg:flex-row">
      <div className="flex min-h-[25rem] w-full flex-col items-center justify-center gap-6 px-2 py-10 text-center @lg:h-[37.5rem] @lg:max-w-[90rem]">
        <span className="font-mono text-xs uppercase leading-[1.125rem] @lg:text-sm @lg:leading-[1.375rem] @lg:tracking-[0.0225rem]">
          {publishedAt} BY{' '}
          <a className="underline" href={author.href}>
            {author.name}
          </a>
        </span>
        {image && (
          <img
            src={image}
            alt={title}
            className="h-[14.375rem] w-[14.375rem] @lg:h-[15.625rem] @lg:w-[15.625rem]"
          />
        )}
        <h2 className="-mt-1 font-heading text-lg leading-[2rem] -tracking-[0.015rem] @lg:text-6xl @lg:leading-[4rem] @lg:-tracking-[0.0675]">
          {title}
        </h2>
        <a
          href={href}
          className="font-mono text-xs uppercase leading-[1.125rem] underline  @lg:text-sm @lg:leading-[1.375rem] @lg:tracking-[0.0225rem]"
        >
          READ MORE
        </a>
      </div>
      <div className="flex max-h-[400px] flex-col items-center overflow-hidden text-ellipsis font-body text-lg leading-[1.875rem] -tracking-[0.015] @lg:h-[37.5rem] @lg:max-h-full @lg:max-w-[44.5rem] @lg:items-center @lg:text-2xl @lg:leading-[2.25rem] @lg:-tracking-[0.0175rem]">
        {children}
      </div>
    </section>
  )
}
