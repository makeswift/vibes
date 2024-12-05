import { getLineItems, getSubtotal } from '@/vibes/soul/data/line-items';
import { Cart, CartLineItem } from '@/vibes/soul/sections/cart';

import { checkoutAction, lineItemAction } from './actions';

export default function Preview() {
  const lineItems = new Promise<CartLineItem[]>((res) =>
    setTimeout(() => res(getLineItems('Warm')), 5000),
  );
  const subtotal = new Promise<string>((res) => setTimeout(() => res(getSubtotal('Warm')), 10000));

  return (
    <Cart
      title="Cart"
      lineItems={lineItems}
      summary={{
        title: 'Summary',
        subtotal: subtotal,
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
      emptyState={{
        title: 'Your cart is empty',
        subtitle: 'Add some products to get started.',
        cta: {
          label: 'Continue shopping',
          href: '#',
        },
      }}
      lineItemAction={lineItemAction}
      checkoutAction={checkoutAction}
    />
  );
}
