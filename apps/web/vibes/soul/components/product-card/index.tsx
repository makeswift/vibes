import Image from 'next/image'
import Link from 'next/link'
import { ComponentPropsWithoutRef } from 'react'

import { clsx } from 'clsx'

import { Badge } from '@/vibes/soul/components/badge'
import { Compare } from '@/vibes/soul/components/product-card/compare'
import { Price, ProductPrice } from '@/vibes/soul/components/product-card/price'

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
  description?: string
  rating?: number
  className?: string
  compareProducts?: Product[]
  setCompareProducts?: React.Dispatch<React.SetStateAction<Product[]>>
}

export const ProductCard = function ProductCard({
  id,
  name,
  href,
  image,
  price,
  subtitle,
  badge,
  compareProducts,
  setCompareProducts,
  className,
}: Product & ComponentPropsWithoutRef<'a'>) {
  return (
    <Link
      id={id}
      href={href}
      className={clsx(
        'group flex cursor-pointer flex-col gap-2 rounded-xl text-foreground ring-primary ring-offset-4 focus-visible:outline-0 focus-visible:ring-2',
        className
      )}
    >
      <div className="relative aspect-[5/6] overflow-hidden rounded-xl @6xl:min-w-80">
        {badge !== undefined && (
          <Badge className="absolute left-2.5 top-2.5 @4xl:left-4 @4xl:top-4">{badge}</Badge>
        )}
        {image && (
          <Image
            src={image.src}
            fill
            sizes="(max-width: 768px) 70vw, 33vw"
            alt="Category card image"
            className="w-full select-none bg-contrast-100 object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
          />
        )}
        {compareProducts && setCompareProducts && (
          <Compare
            product={{
              id,
              name,
              href,
              image,
              price,
              subtitle,
              badge,
              // description,
              // rating,
              // availability,
            }}
            compareProducts={compareProducts}
            setCompareProducts={setCompareProducts}
          />
        )}
      </div>
      <div className="flex flex-col gap-1">
        <h3 className="flex flex-col flex-wrap justify-between gap-1 text-sm font-semibold @sm:pt-3 @4xl:flex-row">
          {name && <span className="line-clamp-2">{name}</span>}
          {subtitle !== undefined && (
            <span className="font-normal text-contrast-400">{subtitle}</span>
          )}
        </h3>
        {price && <Price price={price} />}
      </div>
    </Link>
  )
}

interface ProductCardSkeletonProps {
  className?: string
}

export const ProductCardSkeleton = function ProductCardSkeleton({
  className,
}: ProductCardSkeletonProps) {
  return (
    <div className={clsx('animate-pulse cursor-pointer rounded-xl', className)}>
      {/* Image */}
      <div className="relative aspect-[5/6] overflow-hidden rounded-xl bg-contrast-100 @6xl:min-w-80"></div>
      <div className="flex flex-col gap-2 @sm:gap-2">
        <h3 className="mt-4 flex flex-col flex-wrap justify-between gap-2 @sm:mt-7 @sm:gap-2 @4xl:flex-row">
          {/* Name */}
          <div className="h-4 w-24 rounded-lg bg-contrast-100" />
          {/* Subtitle */}
          <div className="h-4 w-20 rounded-lg bg-contrast-100" />
        </h3>
        {/* Price */}
        <div className="h-4 w-16 rounded-lg bg-contrast-100 @4xl:h-6" />
      </div>
    </div>
  )
}
