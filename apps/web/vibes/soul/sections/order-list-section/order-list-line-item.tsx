import Image from 'next/image'
import Link from 'next/link'

import clsx from 'clsx'

import { PriceLabel } from '@/vibes/soul/primitives/price-label'

export type OrderListLineItem = {
  id: string
  title: string
  subtitle?: string
  price: string
  href: string
  image?: { src: string; alt: string }
}

type Props = {
  className?: string
  lineItem: OrderListLineItem
}

export function OrderListLineItem({ className, lineItem }: Props) {
  return (
    <div className={clsx('@container', className)}>
      <Link
        id={lineItem.id}
        href={lineItem.href}
        className="group flex cursor-pointer flex-col gap-2 rounded-xl ring-primary ring-offset-4 focus-visible:outline-0 focus-visible:ring-2 @md:rounded-2xl"
      >
        <div className="relative aspect-square overflow-hidden rounded-[inherit] bg-contrast-100">
          {lineItem.image?.src != null ? (
            <Image
              src={lineItem.image.src}
              fill
              sizes="(max-width: 768px) 70vw, 33vw"
              alt="Category card image"
              className="w-full scale-100 select-none bg-contrast-100 object-cover transition-transform duration-500 ease-out group-hover:scale-110"
            />
          ) : (
            <div className="pl-2 pt-3 text-7xl font-bold leading-[0.8] tracking-tighter text-contrast-300 transition-transform duration-500 ease-out group-hover:scale-105">
              {lineItem.title}
            </div>
          )}
        </div>
      </Link>
      <div className="mt-2 flex flex-col items-start gap-x-4 gap-y-3 px-1 @xs:mt-3 @xs:flex-row">
        <div className="flex-1">
          <Link tabIndex={-1} href={lineItem.href} className="group text-base">
            <span className="block font-semibold">{lineItem.title}</span>

            {lineItem.subtitle != null && lineItem.subtitle !== '' && (
              <span className="block text-sm font-normal text-contrast-400">
                {lineItem.subtitle}
              </span>
            )}
            {lineItem.price != null && <PriceLabel price={lineItem.price} />}
          </Link>
        </div>
      </div>
    </div>
  )
}
