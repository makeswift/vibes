import { OrderProduct } from './order-product'

export type Order = {
  id: string
  totalPrice: string
  status: string
  products: OrderProduct[]
}

type Props = {
  className?: string
  order: Order
}

export function OrderItem({ className, order }: Props) {
  return (
    <div className={className}>
      <div>
        <div>
          <span>{order.id}</span>
          <span>{order.totalPrice}</span>
          <span>{order.status}</span>
        </div>
        <div className="flex gap-4">
          {order.products.map(product => (
            <div className="basis-1/4">
              <OrderProduct key={product.id} product={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
