'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Suspense, startTransition, use, useActionState, useEffect, useOptimistic } from 'react'

import { SubmissionResult, getFormProps, getInputProps, useForm } from '@conform-to/react'
import { parseWithZod } from '@conform-to/zod'
import clsx from 'clsx'
import { Minus, Plus, Trash2 } from 'lucide-react'

import { Button } from '@/vibes/soul/primitives/button'

// import { CheckoutButton } from './redirect-to-checkout-button'
import { schema } from './schema'

type Action<State, Payload> = (state: Awaited<State>, payload: Payload) => State | Promise<State>

export type CartLineItem = {
  id: string
  image: { alt: string; src: string }
  title: string
  subtitle: string
  quantity: number
  price: string
}

type CartSummary = {
  title?: string
  caption?: string
  subtotalLabel?: string
  subtotal: string | Promise<string>
  shippingLabel?: string
  shipping?: string
  taxLabel?: string
  tax?: string | Promise<string>
  grandTotalLabel?: string
  grandTotal?: string | Promise<string>
  ctaLabel?: string
}

type CartEmptyState = {
  title: string
  subtitle: string
  cta: {
    label: string
    href: string
  }
}

type CartState = {
  lineItems: CartLineItem[]
  lastResult: SubmissionResult | null
}

type CartProps = {
  title?: string
  lineItems: CartLineItem[] | Promise<CartLineItem[]>
  summary: CartSummary
  emptyState: CartEmptyState
  lineItemAction: Action<CartState, FormData>
  checkoutAction: Action<SubmissionResult | null, FormData>
  deleteLineItemLabel?: string
  decrementLineItemLabel?: string
  incrementLineItemLabel?: string
}

export function Cart({
  title = 'Cart',
  lineItems,
  lineItemAction,
  checkoutAction,
  summary,
  emptyState,
  deleteLineItemLabel,
  decrementLineItemLabel,
  incrementLineItemLabel,
}: CartProps) {
  return (
    <Suspense fallback={<CartSkeleton title={title} />}>
      <CartInner
        title={title}
        lineItems={lineItems}
        lineItemAction={lineItemAction}
        checkoutAction={checkoutAction}
        summary={summary}
        emptyState={emptyState}
        deleteLineItemLabel={deleteLineItemLabel}
        decrementLineItemLabel={decrementLineItemLabel}
        incrementLineItemLabel={incrementLineItemLabel}
      />
    </Suspense>
  )
}

function CartInner({
  title,
  lineItems,
  summary = {
    title: 'Summary',
    subtotalLabel: 'Subtotal',
    subtotal: '$0.00',
    shippingLabel: 'Shipping',
    shipping: '$0.00',
    taxLabel: 'Tax',
    tax: '$0.00',
    grandTotalLabel: 'Grand Total',
    grandTotal: '$0.00',
  },
  emptyState,
  decrementLineItemLabel,
  incrementLineItemLabel,
  deleteLineItemLabel,
  lineItemAction,
  checkoutAction,
}: CartProps) {
  const resolvedLineItems = lineItems instanceof Promise ? use(lineItems) : lineItems

  const [state, formAction, isPending] = useActionState(lineItemAction, {
    lineItems: resolvedLineItems,
    lastResult: null,
  })

  const [optimisticLineItems, setOptimisticLineItems] = useOptimistic<CartLineItem[], FormData>(
    state.lineItems,
    (prevState, formData) => {
      const intent = formData.get('intent')
      const submission = parseWithZod(formData, { schema })

      if (submission.status !== 'success') return prevState

      switch (intent) {
        case 'increment': {
          const { id } = submission.value

          return prevState.map(item =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
          )
        }
        case 'decrement': {
          const { id } = submission.value

          return prevState.map(item =>
            item.id === id ? { ...item, quantity: item.quantity - 1 } : item
          )
        }
        case 'delete': {
          const { id } = submission.value

          return prevState.filter(item => item.id !== id)
        }
        default:
          return prevState
      }
    }
  )

  const optimisticQuantity = optimisticLineItems.reduce((total, item) => total + item.quantity, 0)

  if (optimisticLineItems.length === 0) {
    return <CartEmptyState {...emptyState} />
  }

  return (
    <div className="mx-auto max-w-screen-2xl @container">
      <div className="flex w-full flex-col gap-10 px-3 pb-10 pt-24 @xl:px-6 @4xl:flex-row @4xl:gap-20 @4xl:pb-20 @4xl:pt-32 @5xl:px-20">
        {/* Cart Side */}
        <div className="w-full">
          <h1 className="mb-10 font-heading text-4xl font-medium leading-none @xl:text-5xl">
            {title}
            <span className="ml-4 text-contrast-200">{optimisticQuantity}</span>
          </h1>

          {/* Cart Items */}
          <ul className="flex flex-col gap-5">
            {optimisticLineItems.map(lineItem => (
              <li
                className="flex flex-col items-start gap-x-5 gap-y-6 @sm:flex-row @sm:items-center @sm:gap-y-4"
                key={lineItem.id}
              >
                <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-contrast-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 @sm:max-w-36">
                  <Image
                    fill
                    src={lineItem.image.src}
                    alt={lineItem.image.alt}
                    sizes="(max-width: 400px) 100vw, 144px"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-grow flex-wrap justify-between gap-y-2">
                  <div className="flex flex-col @xl:w-1/2 @xl:pr-4">
                    <span className="font-medium">{lineItem.title}</span>
                    <span className="text-contrast-300">{lineItem.subtitle}</span>
                  </div>
                  <CounterForm
                    lineItem={lineItem}
                    action={formAction}
                    onSubmit={formData => {
                      startTransition(async () => {
                        formAction(formData)
                        setOptimisticLineItems(formData)
                      })
                    }}
                    incrementLabel={incrementLineItemLabel}
                    decrementLabel={decrementLineItemLabel}
                    deleteLabel={deleteLineItemLabel}
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Summary Side */}
        <div className="@4xl:w-1/3">
          <h2 className="mb-10 font-heading text-4xl font-medium leading-none @xl:text-5xl">
            {summary.title}
          </h2>
          <table aria-label="Receipt Summary" className="w-full">
            <caption className="sr-only">{summary.caption}</caption>
            <tbody>
              <tr className="border-b border-contrast-100">
                <td>{summary.subtotalLabel}</td>
                <td className="py-4 text-right">{summary.subtotal}</td>
              </tr>
              {summary.shipping && (
                <tr className="border-b border-contrast-100">
                  <td>{summary.shippingLabel}</td>
                  <td className="py-4 text-right">{summary.shipping}</td>
                </tr>
              )}
              {summary.tax && (
                <tr>
                  <td>{summary.taxLabel}</td>
                  <td className="py-4 text-right">{summary.tax}</td>
                </tr>
              )}
            </tbody>

            {summary.grandTotal && (
              <tfoot>
                <tr className="text-xl">
                  <th scope="row" className="text-left">
                    {summary.grandTotalLabel}
                  </th>
                  <td className="py-10 text-right">{summary.grandTotal}</td>
                </tr>
              </tfoot>
            )}
          </table>
          <CheckoutButton disabled={isPending} className="mt-10 w-full" action={checkoutAction}>
            {summary.ctaLabel}
          </CheckoutButton>
        </div>
      </div>
    </div>
  )
}

function CounterForm({
  lineItem,
  action,
  onSubmit,
  incrementLabel = 'Increase count',
  decrementLabel = 'Decrease count',
  deleteLabel = 'Remove item',
}: {
  action(payload: FormData): void
  onSubmit(formData: FormData): void
  lineItem: CartLineItem
  incrementLabel?: string
  decrementLabel?: string
  deleteLabel?: string
}) {
  const [form, fields] = useForm({
    defaultValue: lineItem,
    shouldValidate: 'onBlur',
    shouldRevalidate: 'onInput',
    onValidate({ formData }) {
      return parseWithZod(formData, { schema })
    },
    onSubmit(event, { formData }) {
      event.preventDefault()

      onSubmit(formData)
    },
  })

  return (
    <form {...getFormProps(form)} action={action}>
      <input {...getInputProps(fields.id, { type: 'hidden' })} key={fields.id.id} />
      <input {...getInputProps(fields.quantity, { type: 'hidden' })} key={fields.quantity.id} />
      <div className="flex w-full flex-wrap items-center justify-between gap-x-5 gap-y-2 @sm:justify-start @xl:w-1/2 @xl:flex-nowrap">
        <span className="font-medium @xl:ml-auto">{lineItem.price}</span>

        {/* Counter */}
        <div className="flex items-center rounded-lg border">
          <button
            className={clsx(
              'group rounded-l-lg p-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary',
              lineItem.quantity === 1 ? 'opacity-50' : 'hover:bg-contrast-100/50'
            )}
            aria-label={decrementLabel}
            type="submit"
            disabled={lineItem.quantity === 1}
            name="intent"
            value="decrement"
          >
            <Minus
              className={clsx(
                'text-contrast-300 transition-colors duration-300 ',
                lineItem.quantity !== 1 && 'group-hover:text-foreground'
              )}
              strokeWidth={1.5}
              size={18}
            />
          </button>
          <span className="flex w-8 select-none justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ">
            {lineItem.quantity}
          </span>
          <button
            className={clsx(
              'group rounded-r-lg p-3 transition-colors duration-300 hover:bg-contrast-100/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary'
            )}
            aria-label={incrementLabel}
            type="submit"
            name="intent"
            value="increment"
          >
            <Plus
              className="text-contrast-300 transition-colors duration-300 group-hover:text-foreground"
              strokeWidth={1.5}
              size={18}
            />
          </button>
        </div>

        <button
          type="submit"
          aria-label={deleteLabel}
          className="-ml-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors duration-300 hover:bg-contrast-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4"
          name="intent"
          value="delete"
        >
          <Trash2 strokeWidth={1} size={18} />
        </button>
      </div>
    </form>
  )
}

function CheckoutButton({
  action,
  ...rest
}: { action: Action<SubmissionResult | null, FormData> } & React.ComponentPropsWithoutRef<
  typeof Button
>) {
  const [lastResult, formAction, isPending] = useActionState(action, null)

  useEffect(() => {
    if (lastResult?.error) return console.log(lastResult.error)
  }, [lastResult?.error])

  return (
    <form action={formAction}>
      <Button {...rest} type="submit" loading={isPending} />
    </form>
  )
}

function CartEmptyState({ title, subtitle, cta }: CartEmptyState) {
  return (
    <div className="mt-20 flex min-h-96 flex-col items-center justify-center @container">
      <span className="mb-3 text-center font-heading text-2xl font-medium leading-none text-foreground @lg:text-4xl @3xl:text-5xl ">
        {title}
      </span>
      <h2 className="mb-10 text-center leading-none text-contrast-300 @3xl:text-lg">{subtitle}</h2>
      <Button asChild>
        <Link href={cta.href}>{cta.label}</Link>
      </Button>
    </div>
  )
}

function CartSkeleton({ title }: { title: string }) {
  return (
    <div className="mx-auto w-full max-w-screen-2xl animate-pulse @container">
      <div className="flex w-full flex-col gap-10 px-3 pb-10 pt-24 @xl:px-6 @4xl:flex-row @4xl:gap-20 @4xl:pb-20 @4xl:pt-32 @5xl:px-20">
        {/* Cart Side */}
        <div className="w-full">
          <h1 className="mb-10 font-heading text-4xl font-medium leading-none @xl:text-5xl">
            {title}
          </h1>

          {/* Cart Line Items */}
          <ul className="flex flex-col gap-5">
            {Array.from({ length: 2 }).map((_, index) => (
              <li
                className="flex flex-col items-start gap-x-5 gap-y-8 @sm:flex-row @sm:items-center @sm:gap-y-4"
                key={index}
              >
                {/* Image */}
                <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-contrast-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 @sm:max-w-36"></div>
                <div className="flex flex-grow flex-wrap justify-between gap-y-3.5">
                  <div className="flex flex-col gap-3 @xl:w-1/2 @xl:pr-4">
                    {/* Line Item Title */}
                    <div className="h-4 w-44 rounded-md bg-contrast-100" />
                    {/* Subtitle */}
                    <div className="h-3 w-36 rounded-md bg-contrast-100" />
                  </div>
                  <div className="flex w-full flex-wrap items-center justify-between gap-x-5 gap-y-2 @sm:justify-start @xl:w-1/2 @xl:flex-nowrap @xl:justify-end">
                    {/* Price */}
                    <div className="h-4 w-8 rounded-md bg-contrast-100" />
                    {/* Counter */}
                    <div className="h-[44px] w-[120px] rounded-lg bg-contrast-100" />
                    {/* DeleteLineItemButton */}
                    <div className="mr-1 h-6 w-6 rounded-full bg-contrast-100" />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Summary Side */}
        <div className="@4xl:w-1/3">
          {/* Summary Title */}
          <div className="mt-3.5 h-4 w-40 rounded-lg bg-contrast-100 @xl:h-7 @xl:w-52" />

          {/* Subtotal */}
          <div className="mt-[66px] flex justify-between border-b border-contrast-100/50 pb-5">
            <div className="h-4 w-16 rounded-md bg-contrast-100" />
            <div className="h-4 w-9 rounded-md bg-contrast-100" />
          </div>

          {/* Shipping */}
          <div className="mt-5 flex justify-between border-b border-contrast-100/50 pb-5">
            <div className="h-4 w-[70px] rounded-md bg-contrast-100" />
            <div className="h-4 w-8 rounded-md bg-contrast-100" />
          </div>

          {/* Tax */}
          <div className="mt-5 flex justify-between border-b border-contrast-100/50 pb-5">
            <div className="h-4 w-8 rounded-md bg-contrast-100" />
            <div className="h-4 w-8 rounded-md bg-contrast-100" />
          </div>

          {/* Grand Total */}
          {/* <div className="mt-10 flex justify-between border-b border-contrast-100/50 pb-5">
            <div className="h-6 w-20 rounded-lg bg-contrast-100" />
            <div className="h-6 w-16 rounded-lg bg-contrast-100" />
          </div> */}

          {/* Checkout Button */}
          <div className="mt-10 h-[50px] w-full rounded-full bg-contrast-100" />
        </div>
      </div>
    </div>
  )
}
