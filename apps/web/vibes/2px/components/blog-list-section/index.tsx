import { cn } from '@/lib/utils'

interface Props {
  className?: string
  text: string
  blogPosts: {
    title: string
    date: string
  }[]
  cta: { label: string; href: string }
}

export default function BlogListSection({ className, text, blogPosts, cta }: Props) {
  return (
    <section
      className={cn(
        'flex w-full flex-col gap-20 border-b-2 border-t-2 border-foreground bg-contrast-200 px-2 py-[11.38rem] text-center text-foreground',
        className
      )}
    >
      <div className="font-mono text-sm uppercase leading-[1.375rem] tracking-[0.0225rem]">
        {text}
      </div>
      <div className="flex flex-col gap-8 whitespace-pre-wrap font-body text-sm font-medium leading-6 -tracking-[0.0175rem] @lg:text-2xl @lg:leading-[2.25rem]">
        {blogPosts.map((post, index) => (
          <span key={index} className="">
            {post.title}, {post.date}
          </span>
        ))}
      </div>
      <a
        className="font-mono text-sm uppercase leading-[1.375rem] tracking-[0.0225rem] underline"
        href={cta.href}
      >
        {cta.label}
      </a>
    </section>
  )
}
