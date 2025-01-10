'use client';

import { getFormProps, getInputProps, SubmissionResult, useForm } from '@conform-to/react';
import { parseWithZod } from '@conform-to/zod';
import { clsx } from 'clsx';
import { ArrowRight, Minus, Plus, Trash2 } from 'lucide-react';
import Image from 'next/image';
import { startTransition, useActionState, useEffect, useOptimistic } from 'react';
import { useFormStatus } from 'react-dom';

import { Stream, Streamable } from '@/vibes/soul/lib/streamable';
import { Button } from '@/vibes/soul/primitives/button';
import { ButtonLink } from '@/vibes/soul/primitives/button-link';
import { SectionLayout } from '@/vibes/soul/sections/section-layout';
import { StickySidebarLayout } from '@/vibes/soul/sections/sticky-sidebar-layout';

import { cartLineItemActionFormDataSchema } from './schema';

type Action<State, Payload> = (state: Awaited<State>, payload: Payload) => State | Promise<State>;

export interface CartLineItem {
  id: string;
  image: { alt: string; src: string };
  title: string;
  subtitle: string;
  quantity: number;
  price: string;
}

interface CartSummaryLineItem {
  label: string;
  value: string;
}

interface CartEmptyState {
  title: string;
  subtitle: string;
  cta: {
    label: string;
    href: string;
  };
}

interface CartState<LineItem extends CartLineItem> {
  lineItems: LineItem[];
  lastResult: SubmissionResult | null;
}

export interface Cart<LineItem extends CartLineItem> {
  lineItems: LineItem[];
  summaryLineItems: CartSummaryLineItem[];
  total: string;
}

interface CartProps<LineItem extends CartLineItem> {
  title?: string;
  summaryTitle?: string;
  emptyState?: CartEmptyState;
  lineItemAction: Action<CartState<LineItem>, FormData>;
  checkoutAction: Action<SubmissionResult | null, FormData>;
  checkoutLabel?: string;
  summaryTotalLabel?: string;
  deleteLineItemLabel?: string;
  decrementLineItemLabel?: string;
  incrementLineItemLabel?: string;
}

const defaultEmptyState = {
  title: 'Your cart is empty',
  subtitle: 'Add some products to get started.',
  cta: { label: 'Continue shopping', href: '#' },
};

export function Cart<LineItem extends CartLineItem>({
  cart: streamableCart,
  title = 'Cart',
  summaryTitle = 'Summary',
  ...rest
}: CartProps<LineItem> & { cart: Streamable<Cart<LineItem>> }) {
  return (
    <Stream
      fallback={<CartSkeleton summaryTitle={summaryTitle} title={title} />}
      value={streamableCart}
    >
      {(cart) => <CartInner {...rest} cart={cart} summaryTitle={summaryTitle} title={title} />}
    </Stream>
  );
}

function CartInner<LineItem extends CartLineItem>({
  title,
  cart,
  decrementLineItemLabel,
  incrementLineItemLabel,
  deleteLineItemLabel,
  lineItemAction,
  checkoutAction,
  checkoutLabel = 'Checkout',
  emptyState = defaultEmptyState,
  summaryTotalLabel = 'Total',
  summaryTitle,
}: CartProps<LineItem> & { cart: Cart<LineItem> }) {
  const [state, formAction] = useActionState(lineItemAction, {
    lineItems: cart.lineItems,
    lastResult: null,
  });

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
      sidebar={
        <div>
          <h2 className="mb-10 font-heading text-4xl font-medium leading-none @xl:text-5xl">
            {summaryTitle}
          </h2>
          <dl aria-label="Receipt Summary" className="w-full">
            <div className="divide-y divide-contrast-100">
              {cart.summaryLineItems.map((summaryLineItem, index) => (
                <div className="flex justify-between py-4" key={index}>
                  <dt>{summaryLineItem.label}</dt>
                  <dd>{summaryLineItem.value}</dd>
                </div>
              ))}
            </div>

            <div className="flex justify-between border-t border-contrast-100 py-6 text-xl font-bold">
              <dt>{summaryTotalLabel}</dt>
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
        <h1 className="mb-10 font-heading text-4xl font-medium leading-none @xl:text-5xl">
          {title}
          <span className="ml-4 text-contrast-300 contrast-more:text-contrast-500">
            {optimisticQuantity}
          </span>
        </h1>

        {/* Cart Items */}
        <ul className="flex flex-col gap-5">
          {optimisticLineItems.map((lineItem) => (
            <li
              className="flex flex-col items-start gap-x-5 gap-y-4 @container @sm:flex-row"
              key={lineItem.id}
            >
              <div className="relative aspect-square w-full max-w-24 overflow-hidden rounded-xl bg-contrast-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4">
                <Image
                  alt={lineItem.image.alt}
                  className="object-cover"
                  fill
                  sizes="(min-width: 28rem) 9rem, (min-width: 24rem) 6rem, 100vw"
                  src={lineItem.image.src}
                />
              </div>
              <div className="flex flex-grow flex-col flex-wrap justify-between gap-y-2 @xl:flex-row">
                <div className="flex w-full flex-1 flex-col @xl:w-1/2 @xl:pr-4">
                  <span className="font-medium">{lineItem.title}</span>
                  <span className="text-contrast-300 contrast-more:text-contrast-500">
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
        <div className="flex items-center rounded-lg border">
          <button
            aria-label={decrementLabel}
            className={clsx(
              'group rounded-l-lg p-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary',
              lineItem.quantity === 1 ? 'opacity-50' : 'hover:bg-contrast-100/50',
            )}
            disabled={lineItem.quantity === 1}
            name="intent"
            type="submit"
            value="decrement"
          >
            <Minus
              className={clsx(
                'text-contrast-300 transition-colors duration-300',
                lineItem.quantity !== 1 && 'group-hover:text-foreground',
              )}
              size={18}
              strokeWidth={1.5}
            />
          </button>
          <span className="flex w-8 select-none justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">
            {lineItem.quantity}
          </span>
          <button
            aria-label={incrementLabel}
            className={clsx(
              'group rounded-r-lg p-3 transition-colors duration-300 hover:bg-contrast-100/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary',
            )}
            name="intent"
            type="submit"
            value="increment"
          >
            <Plus
              className="text-contrast-300 transition-colors duration-300 group-hover:text-foreground"
              size={18}
              strokeWidth={1.5}
            />
          </button>
        </div>

        <button
          aria-label={deleteLabel}
          className="-ml-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors duration-300 hover:bg-contrast-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4"
          name="intent"
          type="submit"
          value="delete"
        >
          <Trash2 size={20} strokeWidth={1} />
        </button>
      </div>
    </form>
  );
}

function CheckoutButton({
  action,
  ...rest
}: { action: Action<SubmissionResult | null, FormData> } & React.ComponentPropsWithoutRef<
  typeof Button
>) {
  const [lastResult, formAction] = useActionState(action, null);

  useEffect(() => {
    if (lastResult?.error) {
      console.log(lastResult.error);
    }
  }, [lastResult?.error]);

  return (
    <form action={formAction}>
      <SubmitButton {...rest} />
    </form>
  );
}

function SubmitButton(props: React.ComponentPropsWithoutRef<typeof Button>) {
  const { pending } = useFormStatus();

  return <Button {...props} disabled={pending} loading={pending} type="submit" />;
}

interface CartSkeletonProps {
  className?: string;
  pending?: boolean;
  placeholderCount?: number;
  summaryPlaceholderCount?: number;
  title?: string;
  summaryTitle?: string;
}

export function CartSkeleton({
  pending = false,
  title = 'Cart',
  summaryTitle = 'Summary',
  placeholderCount = 2,
  summaryPlaceholderCount = 3,
}: CartSkeletonProps) {
  return (
    <StickySidebarLayout
      sidebar={
        <div data-pending={pending ? '' : undefined}>
          <h2 className="mb-10 font-heading text-4xl font-medium leading-none @xl:text-5xl">
            {summaryTitle}
          </h2>
          <div className="w-full">
            <div className="divide-y divide-contrast-100">
              {Array.from({ length: summaryPlaceholderCount }).map((_, index) => (
                <div className="py-4" key={index}>
                  <div className="flex h-[1lh] w-full items-center justify-between">
                    <div className="h-[1ch] w-16 rounded-md bg-contrast-100" />
                    <div className="h-[1ch] w-9 rounded-md bg-contrast-100" />
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-between border-t border-contrast-100 py-6 text-xl font-bold">
              <div className="flex h-[1lh] w-full items-center">
                <div className="h-[1ex] w-[5ch] rounded-md bg-contrast-100" />
              </div>
              <div className="flex h-[1lh] w-full items-center justify-end">
                <div className="h-[1ex] w-[5ch] rounded-md bg-contrast-100" />
              </div>
            </div>
          </div>

          <div className="mt-4 h-[58px] w-full rounded-full bg-contrast-100" />
        </div>
      }
      sidebarPosition="after"
      sidebarSize="1/3"
    >
      <div data-pending={pending ? '' : undefined}>
        <h1 className="mb-10 font-heading text-4xl font-medium leading-none @xl:text-5xl">
          {title}
        </h1>

        {/* Cart Line Items */}
        <ul className="flex flex-col gap-5">
          {Array.from({ length: placeholderCount }).map((_, index) => (
            <li
              className="flex flex-col items-start gap-x-5 gap-y-4 @container @sm:flex-row"
              key={index}
            >
              {/* Image */}
              <div className="relative aspect-square w-full max-w-24 overflow-hidden rounded-xl bg-contrast-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4" />
              <div className="flex flex-grow flex-col flex-wrap justify-between gap-y-2 @xl:flex-row">
                <div className="flex w-full flex-1 flex-col @xl:w-1/2 @xl:pr-4">
                  {/* Line Item Title */}
                  <div className="flex h-[1lh] w-full items-center">
                    <div className="h-[1ex] w-44 rounded-md bg-contrast-100" />
                  </div>
                  {/* Subtitle */}
                  <div className="flex h-[1lh] w-full items-center">
                    <div className="h-[1ex] w-32 rounded-md bg-contrast-100" />
                  </div>
                </div>
                {/* Counter */}
                <div>
                  <div className="flex w-full flex-wrap items-center gap-x-5 gap-y-2">
                    {/* Price */}
                    <span className="flex h-[1lh] items-center @xl:ml-auto">
                      <div className="h-[1em] w-[3ch] rounded-md bg-contrast-100" />
                    </span>
                    {/* Counter */}
                    <div className="h-[44px] w-[118px] rounded-lg bg-contrast-100" />
                    {/* DeleteLineItemButton */}
                    <div className="-ml-1 h-8 w-8 rounded-full bg-contrast-100" />
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </StickySidebarLayout>
  );
}

function CartEmptyState({ title, subtitle, cta }: CartEmptyState) {
  return (
    <SectionLayout className="text-center">
      <h1 className="mb-3 text-center font-heading text-3xl leading-none text-foreground @xl:text-4xl">
        {title}
      </h1>
      <p className="mb-6 text-center leading-normal text-contrast-500 @3xl:text-lg">{subtitle}</p>
      <ButtonLink href={cta.href}>{cta.label}</ButtonLink>
    </SectionLayout>
  );
}
