import Link from 'next/link'

import { cn } from '@/lib/utils'

interface Props {
  className?: string
  text: string
  blogPosts: {
    title: string
    link: string
  }[]
  cta: { label: string; href: string }
}

export default function BlogListSection({ className, text, blogPosts, cta }: Props) {
  return (
    <section
      className={cn(
        'flex w-full flex-col gap-20 border-b-2 border-t-2 border-foreground bg-contrast-200 px-2 py-32 text-center text-foreground @lg:py-44',
        className
      )}
    >
      <div className="font-mono text-sm uppercase leading-[1.375rem] tracking-[0.02em]">{text}</div>
      <div className="flex flex-col items-center gap-8 whitespace-pre-wrap font-body text-sm font-medium leading-6 -tracking-[0.01em] @lg:text-2xl @lg:leading-9">
        {blogPosts.map(({ link, title }, index) => (
          <Link
            key={index}
            href={link}
            className="decoration-foreground decoration-dashed decoration-2 underline-offset-4 hover:underline"
          >
            {title}
          </Link>
        ))}
      </div>
      <Link
        className="font-mono text-sm uppercase leading-[1.375rem] tracking-[0.02em] underline"
        href={cta.href}
      >
        {cta.label}
      </Link>
    </section>
  )
}
