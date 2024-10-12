import { Cart, CartLineItem } from '@/vibes/soul/components/cart'

export const products: CartLineItem[] = [
  {
    id: '1',
    title: 'DARYA LUG SOLE FISHERMAN',
    subtitle: 'Cuoro Embossed Snake',
    price: '$40',
    image: {
      src: 'https://rstr.in/monogram/vibes/18bzcr01WWx',
      altText: 'DARYA LUG SOLE FISHERMAN',
    },
    // href: '#',
    quantity: 1,
  },
  {
    id: '2',
    title: 'ROMA ROUND TOE BALLET FLAT',
    subtitle: 'Rust Closed Woven Calf',
    price: '$42',
    image: {
      src: 'https://rstr.in/monogram/vibes/yzjuCwK-5tz',
      altText: 'ROMA ROUND TOE BALLET FLAT',
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
