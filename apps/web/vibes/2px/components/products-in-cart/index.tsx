import Image from 'next/image'

import { cn } from '@/lib/utils'
import Counter from '@/vibes/2px/components/counter'

export interface ProductInCart {
  className?: string
  id: string
  name: string
  price: string
  quantity: number
  image: {
    src: string
    altText: string
    width: number
    height: number
  }
}

export default function ProductsInCart({
  products,
  emptyMessage,
}: {
  products: ProductInCart[]
  emptyMessage: React.ReactNode
}) {
  if (products.length === 0) return emptyMessage
  return (
    <div className="text-body flex w-full flex-col text-sm font-medium leading-[1.375rem]">
      {products.map((product, index) => (
        <div
          key={index}
          className={cn(
            'border-b-2 border-t-2 border-foreground px-2 py-4 @sm:border-transparent',
            product.className
          )}
        >
          <div className="flex gap-5">
            <Image
              src={product.image.src}
              alt={product.image.altText}
              width={product.image.width}
              height={product.image.height}
            />
            <div className="flex w-full flex-col gap-4 @sm:flex-row @sm:justify-between">
              <div className="flex flex-col gap-2">
                <span>{product.name}</span>
                <Counter className={cn('@sm:hidden')} value={product.quantity} min={0} size="md" />
                <Counter
                  className={cn('hidden @sm:block')}
                  value={product.quantity}
                  min={0}
                  size="sm"
                />
              </div>
              <span>{product.price}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
