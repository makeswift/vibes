import { Cart, CartLineItem } from '@/vibes/soul/components/cart'

export const products: CartLineItem[] = [
  {
    id: '1',
    title: 'Rolltop Saddlebag',
    subtitle: 'Orange',
    price: '$50',
    image: {
      src: 'https://rstr.in/monogram/vibes/4Mo9ulLGcbL/DfL7Hp4ix9B',
      altText: 'Rolltop Saddlebag',
    },
    // href: '#',
    quantity: 1,
  },
  {
    id: '2',
    title: 'Mini Bar Bag',
    subtitle: 'Camo',
    price: '$60',
    image: {
      src: 'https://rstr.in/monogram/vibes/JFeKAqWOECR',
      altText: 'Mini Bar Bag',
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
