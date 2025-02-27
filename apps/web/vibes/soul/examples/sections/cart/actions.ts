import { SubmissionResult } from '@conform-to/react';
import { parseWithZod } from '@conform-to/zod';

import { CouponCodeFormState } from '@/vibes/soul/sections/cart/coupon-code-form';
import {
  cartLineItemActionFormDataSchema,
  couponCodeActionFormDataSchema,
  shippingActionFormDataSchema,
} from '@/vibes/soul/sections/cart/schema';
import { ShippingFormState } from '@/vibes/soul/sections/cart/shipping-form';

interface CartLineItem {
  id: string;
  image: { src: string; alt: string };
  title: string;
  subtitle: string;
  quantity: number;
  price: string;
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

  // Simulate a network request
  await new Promise((resolve) => setTimeout(resolve, 1000));

  switch (submission.value.intent) {
    case 'increment': {
      // const item = await incrementLineItem(submission.value)
      const item = submission.value;

      return {
        lineItems: prevState.lineItems.map((lineItem) =>
          lineItem.id === item.id ? { ...lineItem, quantity: lineItem.quantity + 1 } : lineItem,
        ),
        lastResult: submission.reply({ resetForm: true }),
      };
    }
    case 'decrement': {
      // const item = await decrementLineItem(submission.value)
      const item = submission.value;

      return {
        lineItems: prevState.lineItems.map((lineItem) =>
          lineItem.id === item.id ? { ...lineItem, quantity: lineItem.quantity - 1 } : lineItem,
        ),
        lastResult: submission.reply({ resetForm: true }),
      };
    }
    case 'delete': {
      // const deletedItem = await deleteLineItem(submission.value)
      const deletedItem = submission.value;

      return {
        lineItems: prevState.lineItems.filter((item) => item.id !== deletedItem.id),
        lastResult: submission.reply({ resetForm: true }),
      };
    }
    default: {
      return prevState;
    }
  }
}

export async function checkoutAction(
  prevState: Awaited<SubmissionResult | null>,
): Promise<SubmissionResult | null> {
  'use server';

  // Simulate a network request
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // const cartId = await cookie.get('cartId')
  // return redirect('/checkout')

  return prevState;
}

export async function couponCodeAction(
  prevState: Awaited<CouponCodeFormState>,
  formData: FormData,
): Promise<CouponCodeFormState> {
  'use server';

  const submission = parseWithZod(formData, { schema: couponCodeActionFormDataSchema({}) });

  if (submission.status !== 'success') {
    return {
      ...prevState,
      lastResult: submission.reply(),
    };
  }

  // Simulate a network request
  await new Promise((resolve) => setTimeout(resolve, 1000));

  switch (submission.value.intent) {
    case 'apply': {
      const couponCode = submission.value.couponCode;

      return {
        couponCodes: [...prevState.couponCodes, couponCode],
        lastResult: submission.reply({ resetForm: true }),
      };
    }
    case 'delete': {
      return {
        couponCodes: [...prevState.couponCodes].filter(
          (code) => code !== submission.value.couponCode,
        ),
        lastResult: submission.reply({ resetForm: true }),
      };
    }
  }
}

export async function shippingAction(
  prevState: Awaited<ShippingFormState>,
  formData: FormData,
): Promise<ShippingFormState> {
  'use server';

  const submission = parseWithZod(formData, { schema: shippingActionFormDataSchema });

  if (submission.status !== 'success') {
    return {
      ...prevState,
      lastResult: submission.reply(),
    };
  }

  // Simulate a network request
  await new Promise((resolve) => setTimeout(resolve, 1000));

  switch (submission.value.intent) {
    case 'add-address': {
      return {
        shippingOptions: [
          { label: 'Standard - $5.99', value: 'standard' },
          { label: '2-3 business days - $8.99', value: 'express' },
          { label: 'Overnight - $22.50', value: 'overnight' },
        ],
        shippingOption: null,
        address: {
          country: submission.value.country,
          city: submission.value.city,
          state: submission.value.state,
          postalCode: submission.value.postalCode,
        },
        lastResult: submission.reply({ resetForm: true }),
        form: 'address',
      };
    }
    case 'add-shipping': {
      const shippingOption = submission.value.shippingOption;

      return {
        address: prevState.address,
        shippingOptions: prevState.shippingOptions,
        shippingOption:
          prevState.shippingOptions?.find((option) => option.value === shippingOption) ?? null,
        lastResult: submission.reply({ resetForm: true }),
        form: 'shipping',
      };
    }
  }
}
