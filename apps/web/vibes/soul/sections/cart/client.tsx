'use client';

import { getFormProps, getInputProps, SubmissionResult, useForm } from '@conform-to/react';
import { parseWithZod } from '@conform-to/zod';
import { clsx } from 'clsx';
import { ArrowRight, Minus, Plus, Trash2 } from 'lucide-react';
import Image from 'next/image';
import {
  ComponentPropsWithoutRef,
  startTransition,
  useActionState,
  useEffect,
  useOptimistic,
} from 'react';
import { useFormStatus } from 'react-dom';

import { Button } from '@/vibes/soul/primitives/button';
import { toast } from '@/vibes/soul/primitives/toaster';
import { StickySidebarLayout } from '@/vibes/soul/sections/sticky-sidebar-layout';

import { CouponCodeForm, CouponCodeFormState } from './coupon-code-form';
import { cartLineItemActionFormDataSchema } from './schema';

import { CartEmptyState } from '.';

type Action<State, Payload> = (state: Awaited<State>, payload: Payload) => State | Promise<State>;

export interface CartLineItem {
  id: string;
  image: { alt: string; src: string };
  title: string;
  subtitle: string;
  quantity: number;
  price: string;
}

export interface CartSummaryItem {
  label: string;
  value: string;
}

export interface CartState<LineItem extends CartLineItem> {
  lineItems: LineItem[];
  lastResult: SubmissionResult | null;
}

export interface Cart<LineItem extends CartLineItem> {
  lineItems: LineItem[];
  summaryItems: CartSummaryItem[];
  total: string;
  totalLabel?: string;
}

interface CouponCode {
  action: Action<CouponCodeFormState, FormData>;
  couponCodes?: string[];
  ctaLabel?: string;
  disabled?: boolean;
  label?: string;
  placeholder?: string;
  removeLabel?: string;
}

export interface CartProps<LineItem extends CartLineItem> {
  title?: string;
  summaryTitle?: string;
  emptyState?: CartEmptyState;
  lineItemAction: Action<CartState<LineItem>, FormData>;
  checkoutAction: Action<SubmissionResult | null, FormData>;
  checkoutLabel?: string;
  deleteLineItemLabel?: string;
  decrementLineItemLabel?: string;
  incrementLineItemLabel?: string;
  cart: Cart<LineItem>;
  couponCode?: CouponCode;
}

const defaultEmptyState = {
  title: 'Your cart is empty',
  subtitle: 'Add some products to get started.',
  cta: { label: 'Continue shopping', href: '#' },
};

/**
 * This component supports various CSS variables for theming. Here's a comprehensive list, along
 * with their default values:
 *
 * ```css
 * :root {
 *   --cart-focus: var(--primary);
 *   --cart-font-family: var(--font-family-body);
 *   --cart-title-font-family: var(--font-family-heading);
 *   --cart-text: var(--foreground);
 *   --cart-subtitle-text: var(--contrast-500);
 *   --cart-subtext-text: var(--contrast-300);
 *   --cart-icon: var(--contrast-300);
 *   --cart-icon-hover: var(--foreground);
 *   --cart-border: var(--contrast-100);
 *   --cart-image-background: var(--contrast-100);
 *   --cart-button-background: var(--contrast-100);
 *   --cart-counter-icon: var(--contrast-300);
 *   --cart-counter-icon-hover: var(--foreground);
 *   --cart-counter-background: var(--background);
 *   --cart-counter-background-hover: color-mix(in oklab, var(--contrast-100) 50%, transparent);
 * }
 * ```
 */
export function CartClient<LineItem extends CartLineItem>({
  title,
  cart,
  couponCode,
  decrementLineItemLabel,
  incrementLineItemLabel,
  deleteLineItemLabel,
  lineItemAction,
  checkoutAction,
  checkoutLabel = 'Checkout',
  emptyState = defaultEmptyState,
  summaryTitle,
}: CartProps<LineItem>) {
  const [state, formAction] = useActionState(lineItemAction, {
    lineItems: cart.lineItems,
    lastResult: null,
  });

  const [form] = useForm({ lastResult: state.lastResult });

  useEffect(() => {
    if (form.errors) {
      form.errors.forEach((error) => {
        toast.error(error);
      });
    }
  }, [form.errors]);

  const [optimisticLineItems, setOptimisticLineItems] = useOptimistic<CartLineItem[], FormData>(
    state.lineItems,
    (prevState, formData) => {
      const submission = parseWithZod(formData, { schema: cartLineItemActionFormDataSchema });

      if (submission.status !== 'success') return prevState;

      switch (submission.value.intent) {
        case 'increment': {
          const { id } = submission.value;

          return prevState.map((item) =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
          );
        }

        case 'decrement': {
          const { id } = submission.value;

          return prevState.map((item) =>
            item.id === id ? { ...item, quantity: item.quantity - 1 } : item,
          );
        }

        case 'delete': {
          const { id } = submission.value;

          return prevState.filter((item) => item.id !== id);
        }

        default:
          return prevState;
      }
    },
  );

  const optimisticQuantity = optimisticLineItems.reduce((total, item) => total + item.quantity, 0);

  if (optimisticQuantity === 0) {
    return <CartEmptyState {...emptyState} />;
  }

  return (
    <StickySidebarLayout
      className="font-[family-name:var(--cart-font-family,var(--font-family-body))] text-(--cart-text,var(--foreground))"
      sidebar={
        <div>
          <h2 className="mb-10 font-[family-name:var(--cart-title-font-family,var(--font-family-heading))] text-4xl leading-none font-medium @xl:text-5xl">
            {summaryTitle}
          </h2>
          <dl aria-label="Receipt Summary" className="w-full">
            <div className="divide-y divide-(--cart-border,var(--contrast-100))">
              {cart.summaryItems.map((summaryItem, index) => (
                <div className="flex justify-between py-4" key={index}>
                  <dt>{summaryItem.label}</dt>
                  <dd>{summaryItem.value}</dd>
                </div>
              ))}
            </div>
            {couponCode && (
              <CouponCodeForm
                action={couponCode.action}
                couponCodes={couponCode.couponCodes}
                ctaLabel={couponCode.ctaLabel}
                disabled={couponCode.disabled}
                label={couponCode.label}
                placeholder={couponCode.placeholder}
                removeLabel={couponCode.removeLabel}
              />
            )}
            <div className="flex justify-between border-t border-(--cart-border,var(--contrast-100)) py-6 text-xl font-bold">
              <dt>{cart.totalLabel ?? 'Total'}</dt>
              <dl>{cart.total}</dl>
            </div>
          </dl>
          <CheckoutButton action={checkoutAction} className="mt-4 w-full">
            {checkoutLabel}
            <ArrowRight size={20} strokeWidth={1} />
          </CheckoutButton>
        </div>
      }
      sidebarPosition="after"
      sidebarSize="1/3"
    >
      <div className="w-full">
        <h1 className="mb-10 font-[family-name:var(--cart-title-font-family,var(--font-family-heading))] text-4xl leading-none font-medium @xl:text-5xl">
          {title}
          <span className="ml-4 text-(--cart-subtext-text,var(--contrast-300)) contrast-more:text-(--cart-subtitle-text,var(--contrast-500))">
            {optimisticQuantity}
          </span>
        </h1>
        {/* Cart Items */}
        <ul className="flex flex-col gap-5">
          {optimisticLineItems.map((lineItem) => (
            <li
              className="@container flex flex-col items-start gap-x-5 gap-y-4 @sm:flex-row"
              key={lineItem.id}
            >
              <div className="relative aspect-square w-full max-w-24 overflow-hidden rounded-xl bg-(--cart-image-background,var(--contrast-100)) focus-visible:ring-2 focus-visible:ring-(--cart-focus,var(--primary)) focus-visible:ring-offset-4 focus-visible:outline-hidden">
                <Image
                  alt={lineItem.image.alt}
                  className="object-cover"
                  fill
                  sizes="(min-width: 28rem) 9rem, (min-width: 24rem) 6rem, 100vw"
                  src={lineItem.image.src}
                />
              </div>
              <div className="flex grow flex-col flex-wrap justify-between gap-y-2 @xl:flex-row">
                <div className="flex w-full flex-1 flex-col @xl:w-1/2 @xl:pr-4">
                  <span className="font-medium">{lineItem.title}</span>
                  <span className="text-(--cart-subtext-text,var(--contrast-300)) contrast-more:text-(--cart-subtitle-text,var(--contrast-500))">
                    {lineItem.subtitle}
                  </span>
                </div>
                <CounterForm
                  action={formAction}
                  decrementLabel={decrementLineItemLabel}
                  deleteLabel={deleteLineItemLabel}
                  incrementLabel={incrementLineItemLabel}
                  lineItem={lineItem}
                  onSubmit={(formData) => {
                    startTransition(() => {
                      formAction(formData);
                      setOptimisticLineItems(formData);
                    });
                  }}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </StickySidebarLayout>
  );
}

function CounterForm({
  lineItem,
  action,
  onSubmit,
  incrementLabel = 'Increase count',
  decrementLabel = 'Decrease count',
  deleteLabel = 'Remove item',
}: {
  lineItem: CartLineItem;
  incrementLabel?: string;
  decrementLabel?: string;
  deleteLabel?: string;
  action: (payload: FormData) => void;
  onSubmit: (formData: FormData) => void;
}) {
  const [form, fields] = useForm({
    defaultValue: { id: lineItem.id },
    shouldValidate: 'onBlur',
    shouldRevalidate: 'onInput',
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: cartLineItemActionFormDataSchema });
    },
    onSubmit(event, { formData }) {
      event.preventDefault();

      onSubmit(formData);
    },
  });

  return (
    <form {...getFormProps(form)} action={action}>
      <input {...getInputProps(fields.id, { type: 'hidden' })} key={fields.id.id} />
      <div className="flex w-full flex-wrap items-center gap-x-5 gap-y-2">
        <span className="font-medium @xl:ml-auto">{lineItem.price}</span>

        {/* Counter */}
        <div className="flex items-center rounded-lg border border-(--cart-counter-border,var(--contrast-100))">
          <button
            aria-label={decrementLabel}
            className={clsx(
              'group rounded-l-lg bg-(--cart-counter-background,var(--background)) p-3 focus-visible:ring-2 focus-visible:ring-(--cart-focus,var(--primary)) focus-visible:outline-hidden disabled:cursor-not-allowed',
              lineItem.quantity === 1
                ? 'opacity-50'
                : 'hover:bg-(--cart-counter-background-hover,color-mix(in_oklab,var(--contrast-100)_50%,transparent))',
            )}
            disabled={lineItem.quantity === 1}
            name="intent"
            type="submit"
            value="decrement"
          >
            <Minus
              className={clsx(
                'text-(--cart-counter-icon,var(--contrast-300)) transition-colors duration-300',
                lineItem.quantity !== 1 &&
                  'group-hover:text-(--cart-counter-icon-hover,var(--foreground))',
              )}
              size={18}
              strokeWidth={1.5}
            />
          </button>
          <span className="flex w-8 justify-center select-none focus-visible:ring-2 focus-visible:ring-(--cart-focus,var(--primary)) focus-visible:outline-hidden">
            {lineItem.quantity}
          </span>
          <button
            aria-label={incrementLabel}
            className={clsx(
              'group rounded-r-lg bg-(--cart-counter-background,var(--background)) p-3 transition-colors duration-300 hover:bg-(--cart-counter-background-hover,color-mix(in_oklab,var(--contrast-100)_50%,transparent)) focus-visible:ring-2 focus-visible:ring-(--cart-focus,var(--primary)) focus-visible:outline-hidden disabled:cursor-not-allowed',
            )}
            name="intent"
            type="submit"
            value="increment"
          >
            <Plus
              className="text-(--cart-counter-icon,var(--contrast-300)) transition-colors duration-300 group-hover:text-(--cart-counter-icon-hover,var(--foreground))"
              size={18}
              strokeWidth={1.5}
            />
          </button>
        </div>

        <button
          aria-label={deleteLabel}
          className="group -ml-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors duration-300 hover:bg-(--cart-button-background,var(--contrast-100)) focus-visible:ring-2 focus-visible:ring-(--cart-focus,var(--primary)) focus-visible:ring-offset-4 focus-visible:outline-hidden"
          name="intent"
          type="submit"
          value="delete"
        >
          <Trash2
            className="text-(--cart-icon,var(--contrast-300)) group-hover:text-(--cart-icon-hover,var(--foreground))"
            size={20}
            strokeWidth={1}
          />
        </button>
      </div>
    </form>
  );
}

function CheckoutButton({
  action,
  ...props
}: { action: Action<SubmissionResult | null, FormData> } & ComponentPropsWithoutRef<
  typeof Button
>) {
  const [lastResult, formAction] = useActionState(action, null);

  const [form] = useForm({ lastResult });

  useEffect(() => {
    if (form.errors) {
      form.errors.forEach((error) => {
        toast.error(error);
      });
    }
  }, [form.errors]);

  return (
    <form action={formAction}>
      <SubmitButton {...props} />
    </form>
  );
}

function SubmitButton(props: ComponentPropsWithoutRef<typeof Button>) {
  const { pending } = useFormStatus();

  return <Button {...props} disabled={pending} loading={pending} type="submit" />;
}
