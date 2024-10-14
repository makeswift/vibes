import Image from 'next/image'
import Link from 'next/link'
import { Suspense } from 'react'

import { clsx } from 'clsx'

import { Button } from '@/vibes/soul/components/button'
import { DeleteLineItemButton } from '@/vibes/soul/components/cart/delete-line-item-button'
import { Counter } from '@/vibes/soul/components/counter'

interface Image {
  altText: string
  src: string
}

export interface CartLineItem {
  id: string
  image: Image
  title: string
  subtitle: string
  quantity: number
  price: string
}

interface CartSummary {
  title?: string
  caption?: string
  subtotalLabel?: string
  subtotal: string | Promise<string>
  shippingLabel?: string
  taxLabel?: string
  tax: string | Promise<string>
  grandTotalLabel?: string
  grandTotal: string | Promise<string>
  // TODO: summary.ctaLabel is in the Linear doc... Looks like we also need Checkout CTA Label so I added it here
  ctaLabel?: string
}

interface CartEmptyState {
  title: string
  subtitle: string
  cta: {
    label: string
    href: string
  }
}

interface CartProps {
  title?: string
  lineItems: CartLineItem[] | Promise<CartLineItem[]>
  summary: CartSummary
  emptyState: CartEmptyState
  removeLineItemAction(id: string): Promise<void> //formData.get('id')
  updateLineItemQuantityAction({ id, quantity }: { id: string; quantity: number }): Promise<void> //formData.get('id'), formData.get('quantity')
  // redirectToCheckoutAction(): Promise<void>
}

export const Cart = function Cart({
  title = 'Cart',
  lineItems,
  summary,
  emptyState,
  removeLineItemAction,
  updateLineItemQuantityAction,
  // redirectToCheckoutAction,
}: CartProps) {
  return (
    <Suspense fallback={<CartSkeleton title={title} />}>
      <CartUI
        title={title}
        lineItems={lineItems}
        summary={summary}
        emptyState={emptyState}
        removeLineItemAction={removeLineItemAction}
        updateLineItemQuantityAction={updateLineItemQuantityAction}
        // redirectToCheckoutAction={redirectToCheckoutAction}
      />
    </Suspense>
  )
}

async function CartUI({
  title,
  lineItems,
  summary,
  emptyState,
  removeLineItemAction,
  updateLineItemQuantityAction,
  // redirectToCheckoutAction,
}: CartProps) {
  const resolvedLineItems = await Promise.resolve(lineItems)

  const calculateCartQuantity = (items: CartLineItem[]) => {
    return items.reduce((total, item) => total + item.quantity, 0)
  }

  return (
    <div className="mx-auto max-w-screen-2xl @container">
      <div className="flex w-full flex-col gap-10 px-3 pb-10 pt-24 @xl:px-6 @4xl:flex-row @4xl:gap-20 @4xl:pb-20 @4xl:pt-32 @5xl:px-20">
        {/* Cart Side */}
        <div className={clsx(resolvedLineItems.length > 0 && '@4xl:w-2/3', 'w-full')}>
          <h1 className="mb-10 font-heading text-4xl font-medium leading-none @xl:text-5xl">
            {title}
            {resolvedLineItems.length > 0 && (
              <span className="ml-4 text-contrast-200">
                {calculateCartQuantity(resolvedLineItems)}
              </span>
            )}
          </h1>

          {/* Cart Items */}
          <ul className="flex flex-col gap-5 gap-y-10">
            {resolvedLineItems.map(
              ({ id, title: lineItemTitle, image, price, subtitle, quantity }) => (
                <li
                  className="flex flex-col items-start gap-x-5 gap-y-6 @sm:flex-row @sm:items-center @sm:gap-y-4"
                  key={id}
                >
                  <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg bg-contrast-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 @sm:max-w-36">
                    <Image
                      fill
                      src={image.src}
                      alt={image.altText}
                      sizes="(max-width: 400px) 100vw, 144px"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-grow flex-wrap justify-between gap-y-2">
                    <div className="flex flex-col @xl:w-1/2 @xl:pr-4">
                      <span className="font-medium">{lineItemTitle}</span>
                      <span className="text-contrast-300">{subtitle}</span>
                    </div>
                    <div className="flex w-full flex-wrap items-center justify-between gap-x-5 gap-y-2 @sm:justify-start @xl:w-1/2 @xl:flex-nowrap">
                      <span className="font-medium @xl:ml-auto">{price}</span>
                      <Counter
                        id={id}
                        current={quantity}
                        updateLineItemQuantityAction={updateLineItemQuantityAction}
                      />
                      {/* Remove Line Item Button */}
                      <form action={removeLineItemAction.bind(null, id)}>
                        <input type="hidden" name="line-item-id" value={id} />
                        <DeleteLineItemButton />
                      </form>
                    </div>
                  </div>
                </li>
              )
            )}

            {resolvedLineItems.length === 0 && (
              <div className="flex min-h-96 flex-col items-center justify-center">
                <span className="mb-3 text-center font-heading text-5xl font-medium leading-none text-foreground">
                  {emptyState.title}
                </span>
                <h2 className="mb-10 text-center text-lg leading-none text-contrast-300">
                  {emptyState.subtitle}
                </h2>
                <Button asChild>
                  <Link href={emptyState.cta.href}>{emptyState.cta.label}</Link>
                </Button>
              </div>
            )}
          </ul>
        </div>

        {/* Summary Side */}
        {resolvedLineItems.length > 0 && (
          <div className="@4xl:w-1/3">
            <h2 className="mb-10 font-heading text-4xl font-medium leading-none @xl:text-5xl">
              {summary.title ?? 'Summary'}
            </h2>
            <table aria-label="Receipt Summary" className="w-full">
              <caption className="sr-only">{summary.caption ?? 'Receipt Summary'}</caption>
              <tbody>
                <tr className="border-b border-contrast-100">
                  <td>{summary.subtotalLabel ?? 'Subtotal'}</td>
                  <td className="py-4 text-right">{summary.subtotal}</td>
                </tr>
                <tr className="border-b border-contrast-100">
                  <td>{summary.shippingLabel ?? 'Shipping'}</td>
                  <td className="py-4 text-right">TBD</td>
                </tr>
                <tr>
                  <td>Tax</td>
                  <td className="py-4 text-right">TBD</td>
                </tr>
              </tbody>
              {/* TODO: when shipping and tax are TBD, it doesn’t make sense to display Grand Total here... Commenting out for now. Should I remove it? In that case should we remove the summary.grandTotalLabel & summary.grandTotal prop defs? */}
              {/* <tfoot>
                  <tr className="text-xl">
                    <th scope="row" className="text-left">
                      {summary.grandTotalLabel ?? 'Grand Total'}
                    </th>
                    <td className="py-10 text-right">{summary.grandTotal}</td>
                  </tr>
                </tfoot> */}
            </table>
            <Button className="mt-10 w-full">{summary.ctaLabel ?? 'Checkout'}</Button>
            {/* TODO: Is this supposed to be a form submission as well? with the redirectToCheckoutAction prop passed? */}
          </div>
        )}
      </div>
    </div>
  )
}

function CartSkeleton({ title }: { title: string }) {
  return (
    <div className="mx-auto max-w-screen-2xl @container">
      <div className="flex w-full flex-col gap-10 px-3 pb-10 pt-24 @xl:px-6 @4xl:flex-row @4xl:gap-20 @4xl:pb-20 @4xl:pt-32 @5xl:px-20">
        {/* Cart Side */}
        <div className="w-full">
          <h1 className="mb-10 font-heading text-4xl font-medium leading-none @xl:text-5xl">
            {title}
          </h1>
          {/* Cart Items */}
          <ul className="flex flex-col gap-5 gap-y-10">
            <div className="flex animate-pulse items-center gap-x-5">
              <div className="h-96 w-full rounded-lg bg-contrast-100" />
            </div>
          </ul>
        </div>

        {/* Summary Side */}
        <div className="mt-1 animate-pulse @4xl:w-1/3">
          <div className="mt-20 h-96 w-full rounded bg-contrast-100" />
        </div>
      </div>
    </div>
  )
}
