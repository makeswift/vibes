import { Route } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ComponentPropsWithoutRef } from 'react'

import clsx from 'clsx'
import { ArrowUpRight } from 'lucide-react'

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
}: CategoryCard & ComponentPropsWithoutRef<'a'>) {
  return (
    <Link
      href={ctaLink?.href as Route}
      target={ctaLink?.target}
      className="group relative flex aspect-[3/4] w-full min-w-[226px] flex-col gap-2 rounded-xl ring-primary focus:outline-0 focus:ring-2  @xl:min-w-[33%] @4xl:min-w-[300px]"
      {...props}
    >
      <ArrowUpRight
        strokeWidth={1.5}
        className={clsx(
          'absolute right-2.5 top-2.5 z-10 transition-transform duration-300 ease-out group-hover:-translate-y-1.5 group-hover:translate-x-1.5 @4xl:right-5 @4xl:top-5',
          theme === 'dark' ? 'text-background' : 'text-foreground'
        )}
      />
      <div className="relative h-full w-full overflow-hidden rounded-lg @4xl:rounded-xl">
        <Image
          src={image}
          fill
          alt="Category card image"
          className="w-full select-none  bg-contrast-100 object-cover transition-transform duration-300 ease-out group-hover:scale-105"
        />
      </div>
      <span
        className={clsx(
          'line-clamp-1 text-lg font-medium @4xl:absolute @4xl:bottom-5 @4xl:left-5',
          theme === 'dark' ? 'text-background' : 'text-foreground'
        )}
      >
        {label}
      </span>
    </Link>
  )
}

export default CategoryCard
