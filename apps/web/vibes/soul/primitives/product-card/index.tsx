import Image from 'next/image'
import Link from 'next/link'

import { clsx } from 'clsx'

import { Badge } from '@/vibes/soul/primitives/badge'
import { ProductCardProduct } from '@/vibes/soul/types'

import { Compare } from './compare'
import { Price } from './price'

export interface Props extends ProductCardProduct {
  className?: string
  showCompare?: boolean
  compareLabel?: string
  compareParamName?: string
  href: string
}

export function ProductCard({
  id,
  title,
  href,
  image,
  price,
  subtitle,
  badge,
  className,
  showCompare = false,
  compareLabel,
  compareParamName,
}: Props) {
  return (
    <div>
      <div className="relative">
        <Link
          id={id}
          href={href}
          className={clsx(
            'group flex cursor-pointer flex-col gap-2 rounded-xl text-foreground ring-primary ring-offset-4 focus-visible:outline-0 focus-visible:ring-2',
            className
          )}
        >
          <div className="relative aspect-[5/6] overflow-hidden rounded-xl bg-primary-highlight bg-opacity-10">
            {image?.src != null ? (
              <Image
                src={image.src}
                fill
                sizes="(max-width: 768px) 70vw, 33vw"
                alt="Category card image"
                className="w-full scale-105 select-none bg-contrast-100 object-cover transition-transform duration-700 ease-out group-hover:scale-100"
              />
            ) : (
              <h3 className="pl-2 pt-3 text-7xl font-bold leading-[0.8] tracking-tighter text-primary-shadow opacity-10 transition-transform duration-500 ease-out group-hover:scale-105">
                {title}
              </h3>
            )}
            {badge != null && badge !== '' && (
              <Badge className="absolute left-2.5 top-2.5 @4xl:left-4 @4xl:top-4">{badge}</Badge>
            )}
          </div>
        </Link>
        {showCompare && (
          <Compare productId={id} label={compareLabel} paramName={compareParamName} />
        )}
      </div>
      <div className="flex flex-col gap-1">
        <h3 className="flex flex-col flex-wrap justify-between gap-1 text-sm font-semibold @sm:pt-3 @4xl:flex-row">
          <Link href={href} className="line-clamp-2">
            {title}
          </Link>
          {subtitle != null && subtitle !== '' && (
            <span className="font-normal text-contrast-400">{subtitle}</span>
          )}
        </h3>
        {price != null && <Price price={price} />}
      </div>
    </div>
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
