import { getProducts } from '@/vibes/soul/data'
import { AccountLayout } from '@/vibes/soul/sections/account-layout'
import { OrderListSection } from '@/vibes/soul/sections/order-list-section'

const products = getProducts('Electric')

const orders = [
  {
    id: '1',
    totalPrice: '$100',
    status: 'Delivered',
    href: '/order/1',
    lineItems: products
      .filter(() => Math.random() > 0.5)
      .map(({ id, title, subtitle, image, href }) => ({
        id,
        title,
        subtitle,
        image,
        href,
        price: `$${Math.floor(Math.random() * 500)}`,
      })),
  },
  {
    id: '2',
    totalPrice: '$150',
    status: 'Delivered',
    href: '/order/2',
    lineItems: products
      .filter(() => Math.random() > 0.5)
      .map(({ id, title, subtitle, image, href }) => ({
        id,
        title,
        subtitle,
        image,
        href,
        price: `$${Math.floor(Math.random() * 500)}`,
      })),
  },
  {
    id: '3',
    totalPrice: '$500',
    status: 'Delivered',
    href: '/order/3',
    lineItems: products
      .filter(() => Math.random() > 0.5)
      .map(({ id, title, subtitle, image, href }) => ({
        id,
        title,
        subtitle,
        image,
        href,
        price: `$${Math.floor(Math.random() * 500)}`,
      })),
  },
]

async function orderReturnAction({ id }: { id: string }) {
  'use server'

  console.log('Returning order', id)
}

async function orderTrackAction({ id }: { id: string }) {
  'use server'

  console.log('Tracking order', id)
}

const links = [
  { href: '#', label: 'Orders' },
  { href: '#', label: 'Addresses' },
  { href: '#', label: 'Account' },
]

export default function Preview() {
  return (
    <AccountLayout links={links}>
      <OrderListSection
        orders={orders}
        orderReturnAction={orderReturnAction}
        orderTrackAction={orderTrackAction}
        paginationInfo={{ startCursor: '1', endCursor: '5' }}
      />
    </AccountLayout>
  )
}
