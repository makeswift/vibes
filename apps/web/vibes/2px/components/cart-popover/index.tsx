import Image from 'next/image'

import { ShoppingCart } from 'lucide-react'

import { cn } from '@/lib/utils'

import Counter from '../counter'
import Popover from '../popover'

interface ProductInCart {
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

interface Props {
  className?: string
  title: string
  trigger: React.ReactNode
  products: ProductInCart[]
  buttons?: React.ReactNode
  open?: boolean
  closeIcon?: React.ReactNode
  onOpenChange?: (open: boolean) => void
  emptyMessage?: string
}

export default function CartPopover({
  className,
  title,
  trigger,
  products,
  buttons,
  open,
  closeIcon,
  onOpenChange,
  emptyMessage,
}: Props) {
  return (
    <Popover
      className={cn('@container', className)}
      trigger={trigger}
      title={title}
      open={open}
      content={<ProductsInCart products={products} emptyMessage={emptyMessage} />}
      onOpenChange={onOpenChange}
      buttons={buttons}
      closeIcon={closeIcon}
    />
  )
}

function ProductsInCart({
  products,
  emptyMessage = 'Your cart is empty',
}: {
  products: ProductInCart[]
  emptyMessage?: string
}) {
  if (products.length === 0)
    return (
      <div className="flex min-h-[26rem] items-center justify-center text-center text-2xl font-medium leading-9 -tracking-[0.0175rem]">
        {emptyMessage}
      </div>
    )
  return (
    <div className="text-body flex flex-col text-sm font-medium leading-[1.375rem]">
      {products.map((product, index) => (
        <div
          key={index}
          className="border-b-2 border-t-2 border-foreground px-2 py-4 md:border-transparent"
        >
          <div className="flex gap-5">
            <Image
              src={product.image.src}
              alt={product.image.altText}
              width={product.image.width}
              height={product.image.height}
            />
            <div className="flex w-full flex-col gap-4 md:flex-row md:justify-between">
              <div className="flex flex-col gap-2">
                <span>{product.name}</span>
                <Counter className={cn('md:hidden')} value={product.quantity} min={0} size="md" />
                <Counter
                  className={cn('hidden md:block')}
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
