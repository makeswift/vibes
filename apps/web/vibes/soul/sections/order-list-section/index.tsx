import { CursorPagination, CursorPaginationInfo } from '@/vibes/soul/primitives/cursor-pagination'

import { OrderList } from './order-list'

type OrderProduct = {
  id: string
  title: string
  subtitle?: string
  price: string
  href: string
  image?: { src: string; alt: string }
}

type Order = {
  id: string
  totalPrice: string
  status: string
  products: OrderProduct[]
}

type Props = {
  title?: string
  orders: Order[] | Promise<Order[]>
  orderReturnAction({ id }: { id: string }): Promise<void>
  orderTrackAction({ id }: { id: string }): Promise<void>
  paginationInfo?: CursorPaginationInfo | Promise<CursorPaginationInfo>
}

export function OrderListSection({
  title = 'Orders',
  orders,
  orderReturnAction,
  orderTrackAction,
  paginationInfo,
}: Props) {
  return (
    <div className="space-y-8">
      <h1 className="text-xl">{title}</h1>
      <div>
        <OrderList orders={orders} />
      </div>
      {paginationInfo && <CursorPagination info={paginationInfo} />}
    </div>
  )
}
