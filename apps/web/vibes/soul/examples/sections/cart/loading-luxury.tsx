import { getLineItems } from '@/vibes/soul/data/line-items';
import { Cart, CartLineItem } from '@/vibes/soul/sections/cart';

import { checkoutAction, lineItemAction } from './actions';

export default async function Preview() {
  const lineItems = await getLineItems('Luxury');
  const cart = new Promise<Cart<CartLineItem>>((res) =>
    setTimeout(
      () =>
        res({
          lineItems,
          summaryLineItems: [
            { label: 'Subtotal', value: '$100' },
            { label: 'Shipping', value: 'TBD' },
            { label: 'Tax', value: 'TBD' },
          ],
          total: '127.60',
        }),
      10000,
    ),
  );

  return <Cart cart={cart} checkoutAction={checkoutAction} lineItemAction={lineItemAction} />;
}
