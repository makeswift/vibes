import { cn } from '@/lib/utils'
import Popover from '@/vibes/2px/components/popover'
import ProductsInCart, { ProductInCart } from '@/vibes/2px/components/products-in-cart'

interface Props {
  className?: string
  title: string
  trigger: React.ReactNode
  products: ProductInCart[]
  buttons?: React.ReactNode
  open?: boolean
  closeIcon?: React.ReactNode
  onOpenChange?: (open: boolean) => void
  emptyMessage: React.ReactNode
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
