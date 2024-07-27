import { Route } from 'next'
import Image from 'next/image'

import clsx from 'clsx'

import { Link } from '@/components/navigation/link'
import ArrowUpRight from '@/vibes/soul/components/icons/ArrowUpRight'

export type CategoryCard = {
  label: string
  image: string
  theme?: 'light' | 'dark'
  ctaLink?: {
    href: string
    target?: '_self' | '_blank'
  }
}

export const CategoryCard = function CategoryCard({
  label,
  image,
  theme = 'light',
  ctaLink,
  ...props
}: CategoryCard & React.HTMLAttributes<HTMLAnchorElement>) {
  return (
    <Link
      href={ctaLink?.href as Route}
      target={ctaLink?.target}
      className="group relative flex h-full min-w-[226px] snap-start flex-col gap-2 @4xl:min-w-[467px]"
      {...props}
    >
      <ArrowUpRight
        className={clsx(
          'absolute right-2.5 top-2.5 z-10 transition-transform duration-300 ease-out group-hover:-translate-y-1.5 group-hover:translate-x-1.5 @4xl:right-5 @4xl:top-5',
          theme === 'dark' ? 'text-background' : 'text-foreground'
        )}
      />
      <div className="relative overflow-hidden rounded-lg @4xl:rounded-2xl">
        <Image
          src={image}
          height={600}
          width={467}
          alt="Category card image"
          className="h-[291px] w-[226px] bg-contrast-100 object-cover transition-transform duration-500 ease-out group-hover:scale-105 @4xl:h-[600px] @4xl:w-[467px]"
        />
      </div>
      <span
        className={clsx(
          'text-lg font-medium @4xl:absolute @4xl:bottom-5 @4xl:left-5',
          theme === 'dark' ? 'text-background' : 'text-foreground'
        )}
      >
        {label}
      </span>
    </Link>
  )
}

export default CategoryCard
