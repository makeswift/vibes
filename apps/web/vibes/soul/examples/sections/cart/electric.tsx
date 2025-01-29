import { SubmissionResult } from '@conform-to/react';
import { parseWithZod } from '@conform-to/zod';
import Form from 'next/form';
import { cookies } from 'next/headers';
import { z } from 'zod';

import { Button } from '@/vibes/soul/primitives/button';
import { Cart, CartLineItem } from '@/vibes/soul/sections/cart';
import { cartLineItemActionFormDataSchema } from '@/vibes/soul/sections/cart/schema';

export default async function Preview() {

  return (
    <div className="p-4">
      <Form action={clearCart}>
        <Button type="submit" variant={'ghost'}>Reset cart</Button>
      </Form>
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
        key={await getCartId()}
        lineItemAction={lineItemAction}
        lineItems={getLineItems()}
        summary={{
          title: 'Summary',
          subtotal: await getSubtotal(),
          caption: 'Shipping & taxes calculated at checkout',
          subtotalLabel: 'Subtotal',
          shippingLabel: 'Shipping',
          shipping: await getShipping(),
          taxLabel: "Tax",
          tax: getTax(),
          grandTotalLabel: 'Total',
          grandTotal: getGrandTotal(),
          ctaLabel: 'Checkout',
        }}
        title="Cart"
      />
    </div>
  );
}

const defaultLineItems: CartLineItem[] = [
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

export async function checkoutAction(
  prevState: Awaited<SubmissionResult | null>,
): Promise<SubmissionResult | null> {
  'use server';

  // Simulate a network request
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return prevState;
}

export async function lineItemAction(
  prevState: Awaited<{
    lineItems: CartLineItem[];
    lastResult: SubmissionResult | null;
  }>,
  formData: FormData,
): Promise<{
  lineItems: CartLineItem[];
  lastResult: SubmissionResult | null;
}> {
  'use server';

  const submission = parseWithZod(formData, { schema: cartLineItemActionFormDataSchema });

  if (submission.status !== 'success') {
    return {
      ...prevState,
      lastResult: submission.reply({ formErrors: ['Boom!'] }),
    };
  }

  switch (submission.value.intent) {
    case 'increment': {
      await incrementLineItem(submission.value.id);

      break;
    }
    case 'decrement': {
      await decrementLineItem(submission.value.id);

      break;
    }
    case 'delete': {
      await deleteLineItem(submission.value.id);

      break;
    }

    default: {
      return prevState;
    }
  }

  return {
    lineItems: await getLineItems(),
    lastResult: submission.reply({ resetForm: true }),
  };
}

const cartSchema = z.object({
  id: z.string(),
  lineItems: z.array(
    z.object({
      id: z.string(),
      title: z.string(),
      subtitle: z.string(),
      price: z.string(),
      quantity: z.number(),
      image: z.object({
        src: z.string(),
        alt: z.string(),
      }),
    }),
  ),
});
type Cart = z.infer<typeof cartSchema>;

/**
 * Replace these with your own implementation
 */
  async function getCart(): Promise<Cart | null> {
    const cookiesStore = await cookies();
    const cart = cartSchema
      .nullable()
      .parse(
        JSON.parse(
          cookiesStore.get('cart-electric')?.value ??
            JSON.stringify({ id: crypto.randomUUID(), lineItems: defaultLineItems }),
        ),
      );

    return cart;
  }

  async function setCart(cart: Cart) {
    const cookiesStore = await cookies();

    cookiesStore.set('cart-electric', JSON.stringify(cart));
  }

  async function getCartId(): Promise<string | null> {
    const cart = await getCart();

    return cart?.id ?? null;
  }

  async function clearCart() {
    'use server'
    await setCart({ id: crypto.randomUUID(), lineItems: defaultLineItems });
  }

  async function getLineItems(): Promise<CartLineItem[]> {
    const cart = await getCart();

    return cart?.lineItems ?? [];
  }

  async function incrementLineItem(id: string) {
    const cart = await getCart();

    if (!cart) return;

    cart.lineItems = cart.lineItems.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
    );

    await setCart(cart);
  }

  async function decrementLineItem(id: string) {
    const cart = await getCart();

    if (!cart) return;

    cart.lineItems = cart.lineItems.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity - 1 } : item,
    );

    await setCart(cart);
  }

  async function deleteLineItem(id: string) {
    const cart = await getCart();

    if (!cart) return;

    cart.lineItems = cart.lineItems.filter((item) => item.id !== id);

    await setCart(cart);
  }

  async function getSubtotal(): Promise<string> {
    const cart = await getCart();

    const subtotal = cart?.lineItems
      .reduce((acc, item) => acc + Number(item.price.replace(/^\$/, '')) * item.quantity, 0) ?? 0
      .toFixed(2);   
    return `$${subtotal}`;
  }

  async function getShipping(): Promise<string> {
    const subtotal = Number((await getSubtotal()).replace(/^\$/, ''));
    const shipping = (subtotal > 100 ? 0 : 10).toFixed(2);
    return `$${shipping}`;
  }

  async function getTax(): Promise<string> {
    const subtotal = Number((await getSubtotal()).replace(/^\$/, ''));
    const tax = (subtotal * 0.08).toFixed(2);
    return `$${tax}`;
  }

  async function getGrandTotal(): Promise<string> {
    const subtotal = Number((await getSubtotal()).replace(/^\$/, ''));
    const shipping = Number((await getShipping()).replace(/^\$/, ''));
    const tax = Number((await getTax()).replace(/^\$/, ''));
    const grandTotal = (subtotal + shipping + tax).toFixed(2);
    return `$${grandTotal}`;
  }
