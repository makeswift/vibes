import { Cart, CartLineItem } from '@/vibes/soul/sections/cart';

import { checkoutAction, lineItemAction } from './actions';

const lineItems: CartLineItem[] = [
  {
    id: '1',
    title: 'Philodendron Imperial Red',
    subtitle: 'Indoor Plant',
    price: '$46',
    image: {
      src: 'https://rstr.in/monogram/vibes/-kv08IvX08j',
      alt: 'Philodendron Imperial Red',
    },
    quantity: 1,
  },
  {
    id: '2',
    title: 'Caladium',
    subtitle: 'Indoor / Outdoor Plant',
    price: '$24',
    image: {
      src: 'https://rstr.in/monogram/vibes/AaZW4j2VTd4',
      alt: 'Caladium',
    },
    quantity: 2,
  },
];

const subtotal = `$96`;

export default function Preview() {
  const lineItemsPromise = new Promise<CartLineItem[]>((res) =>
    setTimeout(() => res(lineItems), 5000),
  );

  return (
    <Cart
      checkoutAction={checkoutAction}
      emptyState={{
        title: 'Your cart is empty',
        subtitle: 'Add some products to get started.',
        cta: {
          label: 'Continue shopping',
          href: '#',
        },
      }}
      lineItemAction={lineItemAction}
      lineItems={lineItemsPromise}
      summary={{
        title: 'Summary',
        subtotal,
        caption: 'Shipping & taxes calculated at checkout',
        subtotalLabel: 'Subtotal',
        shippingLabel: 'Shipping',
        shipping: 'TBD',
        taxLabel: 'Tax',
        tax: 'TBD',
        // grandTotalLabel: 'Total',
        // grandTotal: '$127.60',
        ctaLabel: 'Checkout',
      }}
      title="Cart"
    />
  );
}

