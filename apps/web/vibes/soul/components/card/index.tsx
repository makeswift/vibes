import Image from 'next/image'
import Link from 'next/link'
import { ComponentPropsWithoutRef } from 'react'

import { ArrowUpRight } from 'lucide-react'

export type CardProps = {
  title: string
  image: {
    src: string
    altText: string
  }
  href: string
}

export const Card = function Card({
  title,
  image,
  href,
  ...props
}: CardProps & ComponentPropsWithoutRef<'a'>) {
  return (
    <Link
      href={href}
      className="group relative flex aspect-[3/4] w-full min-w-56 max-w-md flex-col gap-2 rounded-xl ring-primary focus:outline-0 focus:ring-2 @4xl:min-w-72"
      {...props}
    >
      <ArrowUpRight
        strokeWidth={1.5}
        className="absolute right-2.5 top-2.5 z-10 transition-transform duration-300 ease-out group-hover:-translate-y-1.5 group-hover:translate-x-1.5 @4xl:right-5 @4xl:top-5"
      />
      <div className="relative h-full w-full overflow-hidden rounded-lg @4xl:rounded-xl">
        <Image
          src={image.src}
          fill
          alt={image.altText}
          className="w-full select-none bg-contrast-100 object-cover transition-transform duration-300 ease-out group-hover:scale-105"
        />
      </div>
      <span className="line-clamp-1 text-lg font-medium text-foreground @sm:absolute @sm:bottom-5 @sm:left-5">
        {title}
      </span>
    </Link>
  )
}

export default Card
