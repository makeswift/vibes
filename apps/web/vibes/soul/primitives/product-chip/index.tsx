import Image from 'next/image'
import Link from 'next/link'

import { clsx } from 'clsx'
import { X } from 'lucide-react'

import { ProductCardProduct } from '../../types'

function getInitials(name: string): string {
  return name
    .split(' ')
    .map(word => word[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)
}

interface Props extends Omit<React.ComponentPropsWithoutRef<'button'>, 'children'> {
  product: ProductCardProduct
}

export function ProductChip({ product, onClick, className, ...rest }: Props) {
  return (
    <div className={clsx('relative', className)}>
      <Link
        href={product.href}
        className="group relative flex max-w-56 items-center whitespace-nowrap rounded-xl border border-contrast-100 bg-background font-semibold ring-primary transition-all duration-150 hover:bg-contrast-100 focus:outline-0 focus:ring-2"
      >
        <div className="bg-primary-highlight/10 relative aspect-square w-12 shrink-0">
          {product.image?.src != null ? (
            <Image
              src={product.image.src}
              alt={product.image.alt}
              fill
              className="rounded-lg object-cover @4xl:rounded-r-none"
            />
          ) : (
            <span className="max-w-full break-all p-1 text-xs text-primary-shadow opacity-20">
              {getInitials(product.title)}
            </span>
          )}
        </div>
        <span className="hidden truncate pl-3 pr-5 text-foreground @4xl:block">
          {product.title}
        </span>
      </Link>

      <button
        onClick={onClick}
        className="absolute -right-2.5 -top-2.5 flex h-7 w-7 items-center justify-center rounded-full border border-contrast-100 bg-background text-contrast-400 transition-colors duration-150 hover:border-contrast-200 hover:bg-contrast-100 hover:text-foreground"
        {...rest}
      >
        <X strokeWidth={1.5} absoluteStrokeWidth size={16} />
      </button>
    </div>
  )
}
