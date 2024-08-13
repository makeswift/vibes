import Image from 'next/image'
import Link from 'next/link'
import { ComponentPropsWithoutRef } from 'react'

import clsx from 'clsx'

import Badge from '@/vibes/soul/components/badge'
// import Compare from '@/vibes/soul/components/product-card/compare'
import Price, { ProductPrice } from '@/vibes/soul/components/product-card/price'

interface Image {
  altText: string
  src: string
}

export interface Product {
  id: string
  name: string
  href: string
  image?: Image
  price?: ProductPrice
  subtitle?: string
  badge?: string
  className?: string
}

export const ProductCard = function ProductCard({
  id,
  name,
  href,
  image,
  price,
  subtitle,
  badge,
  className,
}: Product & ComponentPropsWithoutRef<'a'>) {
  return (
    <Link
      id={id}
      href={href}
      className={clsx(
        'group relative flex cursor-pointer flex-col gap-2 rounded-xl text-foreground ring-primary focus-visible:outline-0 focus-visible:ring-2',
        className
      )}
    >
      <div className="relative min-h-56 flex-grow overflow-hidden rounded-xl @4xl:max-h-[439px]">
        {badge && (
          <Badge className="absolute left-2.5 top-2.5 @4xl:left-4 @4xl:top-4">{badge}</Badge>
        )}
        {image && (
          <Image
            src={image.src}
            height={600}
            width={467}
            alt="Category card image"
            className="h-full min-h-56 w-full select-none bg-contrast-100 object-cover transition-transform duration-300 ease-in-out group-hover:scale-105 @4xl:max-h-[439px]"
          />
        )}
        {/* {checked !== undefined && setChecked && (
          <Compare label="Compare" checked={checked} setChecked={setChecked} />
        )} */}
      </div>
      <div className="flex h-full max-h-32 flex-col gap-1">
        <h3 className="flex flex-col flex-wrap justify-between gap-1 text-sm font-semibold @sm:pt-3 @4xl:flex-row">
          {name && <span className="line-clamp-2">{name}</span>}
          {subtitle && <span className="font-normal text-contrast-400">{subtitle}</span>}
        </h3>
        {price && <Price price={price} />}
      </div>
    </Link>
  )
}

export default ProductCard
