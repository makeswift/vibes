import { Suspense, use } from 'react'

import { Order, OrderItem } from './order-item'

type Props = {
  orders: Order[] | Promise<Order[]>
}

export function OrderList(props: Props) {
  return (
    <Suspense fallback={<OrderListSkeleton />}>
      <OrderListInner {...props} />
    </Suspense>
  )
}

function OrderListInner({ orders }: Props) {
  const resolved = orders instanceof Promise ? use(orders) : orders

  return (
    <div className="space-y-8">
      {resolved.map(order => (
        <OrderItem key={order.id} order={order} />
      ))}
    </div>
  )
}

export function OrderListSkeleton() {
  return <div>Loading...</div>
}
