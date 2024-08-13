import Image from 'next/image'
import Link from 'next/link'

import { cn } from '@/lib/utils'

interface Image {
  altText: string
  src: string
  width: number
  height: number
}

type Price =
  | string
  | {
      type: 'sale'
      currentValue: string
      previousValue: string
    }
  | {
      type: 'range'
      minValue: string
      maxValue: string
    }

export interface Product {
  badge?: string
  className?: string
  id: string
  image: Image
  href: string
  name: string
  subtitle?: string
  price: Price
}

interface Props extends Product {}

export default function ProductCard({ className, name, price, badge, image, href }: Props) {
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
          alt={image.altText}
          width={image.width}
          height={image.height}
          className="w-full group-hover:scale-110"
        />
      </div>
      {badge && (
        <p className="absolute right-4 top-4 bg-foreground px-1 font-mono text-xs uppercase leading-[var(--line-height-xs)] text-background @lg:right-6 @lg:top-6 @lg:text-sm @lg:leading-[1.375rem] @lg:-tracking-[0.02em]">
          {badge}
        </p>
      )}
      <div className="flex flex-col items-start gap-[0.15rem] px-4 text-foreground">
        <Link className="font-mono text-xs uppercase leading-4 @lg:text-sm" href={href}>
          {name}
        </Link>
        <Price price={price} />
      </div>
    </div>
  )
}

function Price({ price }: { price: Price }) {
  // @TODO: update this when we have the design for the sale and range prices
  const priceValue =
    typeof price === 'string'
      ? price
      : 'currentValue' in price
        ? price.currentValue
        : price.maxValue
  return (
    <span className="font-body text-base font-medium @lg:text-lg @lg:-tracking-[0.01em]">
      {priceValue}
    </span>
  )
}
