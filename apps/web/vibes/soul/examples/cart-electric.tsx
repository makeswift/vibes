import { Cart, CartLineItem } from '@/vibes/soul/components/cart'

export const products: CartLineItem[] = [
  {
    id: '1',
    title: 'Philodendron Imperial Red',
    subtitle: 'Indoor Plant',
    price: '$46',
    image: {
      src: 'https://rstr.in/monogram/vibes/-kv08IvX08j',
      altText: 'Philodendron Imperial Red',
    },
    // href: '#',
    quantity: 1,
  },
  {
    id: '2',
    title: 'Caladium',
    subtitle: 'Indoor / Outdoor Plant',
    price: '$24',
    image: {
      src: 'https://rstr.in/monogram/vibes/AaZW4j2VTd4',
      altText: 'Caladium',
    },
    // href: '#',
    quantity: 2,
  },
]

export default function Preview() {
  return (
    <Cart
      title="Cart"
      lineItems={products}
      summary={{
        title: 'Cart',
        subtotal: '$116',
        caption: 'Shipping & taxes calculated at checkout',
        subtotalLabel: 'Subtotal',
        shippingLabel: 'Shipping',
        taxLabel: 'Tax',
        tax: '$11.60',
        grandTotalLabel: 'Total',
        grandTotal: '$127.60',
        cta: {
          label: 'Checkout',
          href: '#',
        },
      }}
      emptyState={{
        title: 'Your cart is empty',
        subtitle: 'Add some products to get started.',
        cta: {
          label: 'Continue shopping',
          href: '#',
        },
      }}
    />
  )
}
