import clsx from 'clsx'

import { Badge } from '@/vibes/soul/primitives/badge'
import { ButtonLink } from '@/vibes/soul/primitives/button-link'

import { OrderListLineItem } from './order-list-line-item'

export type Order = {
  id: string
  totalPrice: string
  status: string
  href: string
  lineItems: OrderListLineItem[]
}

type Props = {
  className?: string
  order: Order
}

export function OrderListItem({ className, order }: Props) {
  return (
    <div className={clsx('border-t border-contrast-200 pb-4 pt-6 last:border-b', className)}>
      <div className="flex justify-between gap-x-10">
        <div className="flex items-start gap-x-12">
          <div>
            <span className="font-mono text-xs uppercase leading-normal text-contrast-500">
              Order #
            </span>
            <span className="block text-lg font-semibold leading-normal">{order.id}</span>
          </div>
          <div>
            <span className="font-mono text-xs uppercase leading-normal text-contrast-500">
              Total
            </span>
            <span className="block text-lg font-semibold leading-normal">{order.totalPrice}</span>
          </div>
          <Badge className="mt-0.5">{order.status}</Badge>
        </div>

        <ButtonLink href={order.href} size="small">
          View details
        </ButtonLink>
      </div>

      <div className="flex gap-4 overflow-x-auto py-6">
        {order.lineItems.map(lineItem => (
          <OrderListLineItem key={lineItem.id} lineItem={lineItem} />
        ))}
      </div>
    </div>
  )
}
