import { getLineItems } from '@/vibes/soul/data/line-items';
import { Cart } from '@/vibes/soul/sections/cart';

import { checkoutAction, lineItemAction } from './actions';

export default async function Preview() {
  const lineItems = await getLineItems('Luxury');

  return (
    <Cart
      cart={{
        lineItems,
        summaryItems: [
          { label: 'Subtotal', value: '$100' },
          { label: 'Shipping', value: 'TBD' },
          { label: 'Tax', value: 'TBD' },
        ],
        total: '127.60',
      }}
      checkoutAction={checkoutAction}
      lineItemAction={lineItemAction}
    />
  );
}
