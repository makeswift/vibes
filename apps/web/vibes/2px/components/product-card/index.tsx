import Image from 'next/image'
import Link from 'next/link'

import { cn } from '@/lib/utils'

interface Props {
  className?: string
  title: string
  price: string
  tag?: string
  image: {
    src: string
    alt: string
    width: number
    height: number
  }
  link: string
}

export default function ProductCard({ className, title, price, tag, image, link }: Props) {
  return (
    <div
      className={cn(
        'group relative flex w-[22.5rem] flex-col gap-4 overflow-hidden border-l-2 border-r-2 border-foreground pb-4 @lg:w-[26.25rem]',
        className
      )}
    >
      <div className="overflow-hidden">
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          className="w-full group-hover:scale-110"
        />
      </div>
      {tag && (
        <p className="absolute right-4 top-4 bg-foreground px-1 font-mono text-xs uppercase leading-[1.125rem] text-background @lg:right-6 @lg:top-6 @lg:text-sm @lg:leading-snug @lg:-tracking-[0.0225rem]">
          {tag}
        </p>
      )}
      <div className="flex flex-col items-start gap-[0.15rem] px-4 text-foreground">
        <Link className="font-mono text-xs uppercase leading-4 @lg:text-sm" href={link}>
          {title}
        </Link>
        <span className="font-body text-base font-medium @lg:text-lg @lg:-tracking-[0.015rem]">
          {price}
        </span>
      </div>
    </div>
  )
}
