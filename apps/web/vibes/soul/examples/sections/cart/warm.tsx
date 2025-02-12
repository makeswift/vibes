import { SubmissionResult } from '@conform-to/react';
import { parseWithZod } from '@conform-to/zod';
import Form from 'next/form';
import { cookies } from 'next/headers';
import { z } from 'zod';

import { Button } from '@/vibes/soul/primitives/button';
import { Cart, CartLineItem } from '@/vibes/soul/sections/cart';
import { cartLineItemActionFormDataSchema } from '@/vibes/soul/sections/cart/schema';

import { couponCodeAction } from './actions';

export default async function Preview() {
  return (
    <div className="p-4">
      <Form action={resetCart}>
        <Button type="submit" variant={'ghost'}>
          Reset cart
        </Button>
      </Form>
      <Cart
        cart={getCartWithDelay()}
        checkoutAction={checkoutAction}
        key={await getCartId()}
        lineItemAction={lineItemAction}
      />
    </div>
  );
}

const defaultLineItems: CartLineItem[] = [
  {
    id: '1',
    title: 'Rolltop Saddlebag',
    subtitle: 'Orange',
    price: '$50',
    image: {
      src: 'https://rstr.in/monogram/vibes/4Mo9ulLGcbL/DfL7Hp4ix9B',
      alt: 'Rolltop Saddlebag',
    },
    quantity: 1,
  },
  {
    id: '2',
    title: 'Mini Bar Bag',
    subtitle: 'Camo',
    price: '$60',
    image: {
      src: 'https://rstr.in/monogram/vibes/JFeKAqWOECR',
      alt: 'Mini Bar Bag',
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
  const lineItems = (await getCart()).lineItems;

  return {
    lineItems,
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
  summaryItems: z.array(
    z.object({
      label: z.string(),
      value: z.string(),
    }),
  ),
  total: z.string(),
});

type SummaryItems = Array<{ label: string; value: string }>;
interface Cart<CartLineItem> {
  id: string;
  lineItems: CartLineItem[];
  summaryItems: SummaryItems;
  total: string;
}

async function getCartWithDelay(): Promise<Cart<CartLineItem>> {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return getCart();
}

async function getCart() {
  const cookiesStore = await cookies();

  const cart = cartSchema.parse(
    JSON.parse(
      cookiesStore.get('cart-warm')?.value ??
        JSON.stringify(generateCartFromLineItems(defaultLineItems)),
    ),
  );
  return { ...cart, couponCodeAction: couponCodeAction };
}

async function setCart(cart: Cart<CartLineItem>) {
  const cookiesStore = await cookies();

  cookiesStore.set('cart-warm', JSON.stringify(cart));
}

async function getCartId(): Promise<string> {
  const cart = await getCart();

  return cart.id;
}

function getSummary(subtotal: number, shipping: number, tax: number): SummaryItems {
  return [
    { label: 'Subtotal', value: `$${subtotal.toFixed(2)}` },
    { label: 'Shipping', value: `$${shipping.toFixed(2)}` },
    { label: 'Tax', value: `$${tax.toFixed(2)}` },
  ];
}

async function resetCart() {
  'use server';
  await setCart(generateCartFromLineItems(defaultLineItems));
}

function generateCartFromLineItems(lineItems: CartLineItem[], id?: string): Cart<CartLineItem> {
  const subtotal = getSubtotal(lineItems);
  const shipping = getShipping(subtotal);
  const tax = getTax(subtotal);
  const total = subtotal + shipping + tax;
  const summary = getSummary(subtotal, shipping, tax);
  return {
    id: id ?? crypto.randomUUID(),
    lineItems,
    summaryItems: summary,
    total: `$${total.toFixed(2)}`,
  };
}

async function incrementLineItem(id: string) {
  const cart = await getCart();

  cart.lineItems = cart.lineItems.map((item) =>
    item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
  );
  const updatedCart = generateCartFromLineItems(cart.lineItems, cart.id);
  await setCart(updatedCart);
}

async function decrementLineItem(id: string) {
  const cart = await getCart();

  cart.lineItems = cart.lineItems.map((item) =>
    item.id === id ? { ...item, quantity: item.quantity - 1 } : item,
  );

  const updatedCart = generateCartFromLineItems(cart.lineItems, cart.id);
  await setCart(updatedCart);
}

async function deleteLineItem(id: string) {
  const cart = await getCart();

  cart.lineItems = cart.lineItems.filter((item) => item.id !== id);

  const updatedCart = generateCartFromLineItems(cart.lineItems, cart.id);
  await setCart(updatedCart);
}

function getSubtotal(lineItems: CartLineItem[]): number {
  return lineItems.reduce(
    (acc, item) => acc + Number(item.price.replace(/^\$/, '')) * item.quantity,
    0,
  );
}

function getShipping(subtotal: number): number {
  return subtotal > 100 ? 0 : 10;
}

function getTax(subtotal: number): number {
  return subtotal * 0.08;
}
