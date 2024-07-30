'use client'

import { Route } from 'next'
import Image from 'next/image'

import { Link } from '@/components/navigation/link'
import { useBrandContext } from '@/components/preview/brand-context'
import Compare from '@/vibes/soul/components/compare'
import getBrandShade from '@/vibes/soul/getBrandShade'

export type ProductCard = {
  name: string
  tags?: string[]
  label?: string
  price?: number
  image: string
  ctaLink?: {
    href: string
    target?: '_self' | '_blank'
  }
  checked?: boolean
  setChecked?: (checked: boolean) => void
  className?: string
}

export const ProductCard = function ProductCard({
  name,
  tags,
  label,
  price,
  image,
  ctaLink,
  checked,
  setChecked,
  className,
  ...props
}: ProductCard & React.HTMLAttributes<HTMLAnchorElement>) {
  const { activeBrand } = useBrandContext()

  return (
    <Link
      href={ctaLink?.href as Route}
      target={ctaLink?.target}
      className="group relative flex h-full flex-col gap-2 text-foreground"
      {...props}
    >
      <div className="relative flex-grow overflow-hidden">
        {label && (
          // TODO @cortez: apply monospace font
          <span
            style={{ background: getBrandShade(activeBrand?.name, 100) }}
            className="absolute left-2.5 top-2.5 z-10 rounded-md bg-background px-2.5 py-[3px] text-xs uppercase @4xl:left-4 @4xl:top-4"
          >
            {label}
          </span>
        )}

        <Image
          src={image}
          height={600}
          width={467}
          alt="Category card image"
          className={`h-full w-full bg-contrast-100 object-cover transition-transform duration-500 ease-out group-hover:scale-105 ${className}`}
        />

        {checked !== undefined && setChecked && (
          <Compare
            label="Compare"
            checked={checked}
            setChecked={setChecked}
            className="absolute right-2.5 top-2.5 z-10 @4xl:bottom-4 @4xl:right-4 @4xl:top-auto"
          />
        )}
      </div>

      <h3 className="flex flex-col justify-between pt-3 text-sm font-semibold @4xl:flex-row @4xl:text-base">
        {name}
        {tags && <span className="font-normal text-contrast-400">{tags.join('/')}</span>}
      </h3>

      <span className="text-sm font-semibold @4xl:text-xl @4xl:font-medium">${price}</span>
    </Link>
  )
}

export default ProductCard
