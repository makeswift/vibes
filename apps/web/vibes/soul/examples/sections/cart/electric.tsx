import { SubmissionResult } from '@conform-to/react';
import { parseWithZod } from '@conform-to/zod';
import { cookies } from 'next/headers';
import { z } from 'zod';
import Form from 'next/form';

import { Cart } from '@/vibes/soul/sections/cart';
import { cartLineItemActionFormDataSchema } from '@/vibes/soul/sections/cart/schema';

export default async function Preview() {
  const cartService = new CartService();

  return (
    <div>
      <Form action={clearCart}>
        <button type="submit">Clear cart</button>
      </Form>
      <Cart
        key={await cartService.getCartId()}
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
        lineItems={cartService.getLineItems()}
        summary={{
          title: 'Summary',
          subtotal,
          caption: 'Shipping & taxes calculated at checkout',
          subtotalLabel: 'Subtotal',
          shippingLabel: 'Shipping',
          shipping: 'TBD',
          taxLabel: 'Tax',
          tax: 'TBD',
          grandTotalLabel: 'Total',
          grandTotal: cartService.getGrandTotal(),
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

const subtotal = `$96`;

export async function checkoutAction(
  prevState: Awaited<SubmissionResult | null>,
): Promise<SubmissionResult | null> {
  'use server';

  // Simulate a network request
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return prevState;
}

async function clearCart() {
  'use server';

  await new CartService().clearCart();
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

  const cartService = new CartService();

  switch (submission.value.intent) {
    case 'increment': {
      await cartService.incrementLineItem(submission.value.id);

      break;
    }
    case 'decrement': {
      await cartService.decrementLineItem(submission.value.id);

      break;
    }
    case 'delete': {
      await cartService.deleteLineItem(submission.value.id);

      break;
    }

    default: {
      return prevState;
    }
  }

  return {
    lineItems: await cartService.getLineItems(),
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
type CartLineItem = Cart['lineItems'][number];

/**
 * Replace this with a real implementation
 */
class CartService {
  private async getCart(): Promise<Cart | null> {
    const cookiesStore = await cookies();
    const cart = cartSchema
      .nullable()
      .parse(
        JSON.parse(
          cookiesStore.get('cart')?.value ??
            JSON.stringify({ id: crypto.randomUUID(), lineItems: defaultLineItems }),
        ),
      );

    return cart;
  }

  private async setCart(cart: Cart) {
    const cookiesStore = await cookies();

    cookiesStore.set('cart', JSON.stringify(cart));
  }

  async getCartId(): Promise<string | null> {
    const cart = await this.getCart();

    return cart?.id ?? null;
  }

  async clearCart() {
    await this.setCart({ id: crypto.randomUUID(), lineItems: defaultLineItems });
  }

  async getLineItems(): Promise<CartLineItem[]> {
    const cart = await this.getCart();

    return cart?.lineItems ?? [];
  }

  async incrementLineItem(id: string) {
    const cart = await this.getCart();

    if (!cart) return;

    cart.lineItems = cart.lineItems.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
    );

    await this.setCart(cart);
  }

  async decrementLineItem(id: string) {
    const cart = await this.getCart();

    if (!cart) return;

    cart.lineItems = cart.lineItems.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity - 1 } : item,
    );

    await this.setCart(cart);
  }

  async deleteLineItem(id: string) {
    const cart = await this.getCart();

    if (!cart) return;

    cart.lineItems = cart.lineItems.filter((item) => item.id !== id);

    await this.setCart(cart);
  }

  async getGrandTotal(): Promise<string> {
    const cart = await this.getCart();

    return (
      cart?.lineItems
        .reduce((acc, item) => acc + Number(item.price.replace(/^\$/, '')) * item.quantity, 0)
        .toFixed(2) ?? '$0.00'
    );
  }
}
