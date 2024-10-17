import Image from 'next/image'

import { clsx } from 'clsx'
import { X } from 'lucide-react'

import { Product } from '@/vibes/soul/primitives/product-card'

function getInitials(name: string): string {
  return name
    .split(' ')
    .map(word => word[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)
}

interface Props extends Omit<React.ComponentPropsWithoutRef<'button'>, 'children'> {
  product: Product
}

export function ProductChip({ product, className, ...rest }: Props) {
  return (
    <button
      {...rest}
      className={clsx(
        'group relative flex items-center whitespace-nowrap rounded-xl border border-contrast-100 bg-background font-semibold ring-primary transition-all duration-150 hover:bg-contrast-100 focus:outline-0 focus:ring-2',
        className
      )}
    >
      <div className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-[11px] bg-primary-highlight bg-opacity-10 @4xl:rounded-r-none">
        {product.image?.src != null ? (
          <Image
            src={product.image.src}
            alt={product.image.alt}
            width={50}
            height={50}
            className="object-cover"
          />
        ) : (
          <span className="max-w-full break-all p-1 text-xs text-primary-shadow opacity-20">
            {getInitials(product.title)}
          </span>
        )}
      </div>
      <span className="ml-3 hidden text-foreground @4xl:block">{product.title}</span>
      <div className="absolute -right-1.5 -top-1.5 ml-1 flex h-5 w-5 items-center justify-center rounded-full border border-contrast-100 bg-background text-contrast-400 transition-[colors,transform] duration-150 group-hover:scale-110 group-hover:text-foreground @4xl:relative @4xl:right-auto @4xl:top-auto @4xl:mr-2.5 @4xl:border-none @4xl:bg-transparent">
        <X className="hidden @4xl:block" />
        <div className="h-px w-2.5 bg-foreground @4xl:hidden" />
      </div>
    </button>
  )
}
