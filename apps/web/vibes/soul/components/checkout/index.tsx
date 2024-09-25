'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

import { clsx } from 'clsx'

import { Button } from '@/vibes/soul/components/button'
import { CartProduct } from '@/vibes/soul/components/cart'
import { Checkbox } from '@/vibes/soul/components/checkbox'
import { CheckoutForm } from '@/vibes/soul/components/checkout/checkout-form'
import { Input } from '@/vibes/soul/components/input'

export const Checkout = function Checkout({ products }: { products: CartProduct[] }) {
  const [isLoading, setIsLoading] = useState(false)
  const [checked, setChecked] = useState(true)
  const [expandedPanel, setExpandedPanel] = useState<string | null>(null)

  // TODO: Remove this when we have a real API
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000)
    return () => {
      clearTimeout(timer)
    }
  }, [])

  return (
    <div className="mx-auto max-w-screen-2xl @container">
      <div className="flex w-full flex-col gap-10 px-3 pb-10 pt-24 @xl:px-6 @4xl:flex-row @4xl:gap-20 @4xl:pb-20 @4xl:pt-32 @5xl:px-20">
        {/* Cart Side */}
        <div className={clsx(products.length > 0 && '@4xl:w-2/3', 'w-full')}>
          <h1 className="mb-10 font-heading text-4xl font-medium leading-none @xl:text-5xl">
            Checkout
            {!isLoading && products.length > 0 && (
              <span className="ml-4 text-contrast-200">{products.length}</span>
            )}
          </h1>

          <div className="my-4 grid grid-cols-[max-content_1fr_minmax(max-content,auto)] gap-4">
            <ExpansionPanel
              title="Customer"
              preview={<span>email@email.com</span>}
              form={
                <div className="space-y-4">
                  <div className="flex items-end gap-4">
                    <Input label="Email" value="test@test.com" />
                    <Button
                      variant="secondary"
                      size="small"
                      className="h-[48px]"
                      onClick={() => setExpandedPanel(expandedPanel === '1' ? null : '1')}
                    >
                      Continue
                    </Button>
                  </div>
                  <Checkbox
                    checked={checked}
                    setChecked={setChecked}
                    label="Subscribe to our newsletter"
                  />
                  <span className="block text-sm">
                    Already have an account?{' '}
                    <Link href="#" className="font-semibold">
                      Sign in now
                    </Link>
                  </span>
                </div>
              }
              isExpanded={expandedPanel === '1'}
              onToggle={() => setExpandedPanel(expandedPanel === '1' ? null : '1')}
            />

            <ExpansionPanel
              title="Shipping"
              preview={
                <div className="flex flex-col">
                  <span>Jane Jones</span>
                  <span>Monogram</span>
                  <span>+1 (404) 555 0123</span>
                  <span>1234 Main St, Atlanta, GA 30303</span>
                  <span className="mt-1 w-fit border-t pt-1">
                    Free Shipping <span className="font-medium">$0.00</span>
                  </span>
                </div>
              }
              form={
                <CheckoutForm
                  includeSameAsBillingAddress
                  includeOrderComments
                  includeShippingMethod
                />
              }
              isExpanded={expandedPanel === '2'}
              onToggle={() => setExpandedPanel(expandedPanel === '2' ? null : '2')}
            />

            <ExpansionPanel
              title="Billing"
              preview={
                <div className="flex flex-col">
                  <span>Jane Jones</span>
                  <span>Monogram</span>
                  <span>+1 (404) 555 0123</span>
                  <span>1234 Main St, Atlanta, GA 30303</span>
                </div>
              }
              form={<CheckoutForm />}
              isExpanded={expandedPanel === '3'}
              onToggle={() => setExpandedPanel(expandedPanel === '3' ? null : '3')}
            />
          </div>
        </div>

        {/* Summary Side */}
        {isLoading ? (
          // Skeleton Loader
          <div className="animate-pulse @4xl:w-1/3">
            <div className="mb-20 mt-6 h-10 w-44 rounded bg-contrast-100"></div>
            <div className="h-96 w-full rounded bg-contrast-100"></div>
          </div>
        ) : (
          products.length > 0 && (
            <div className="@4xl:w-1/3">
              <div className="mb-10 flex items-end justify-between">
                <h2 className="inline font-heading text-4xl font-medium leading-none @xl:text-5xl">
                  Summary
                </h2>
                <Link
                  href="#"
                  className="mb-0.5 text-sm text-contrast-300 transition-colors duration-300 hover:text-foreground"
                >
                  Edit Cart
                </Link>
              </div>

              {/* Mini Products List in Order Summary */}
              <ul className="flex flex-col gap-y-4">
                {products.map(({ id, name, image, price, quantity }) => (
                  <li key={id} className="flex items-center justify-between gap-x-4">
                    <div className="flex items-center gap-x-4">
                      {image?.src != null && image.src !== '' && (
                        <div className="relative aspect-[3/4] w-16 overflow-hidden rounded-lg bg-contrast-100">
                          <Image
                            src={image.src}
                            alt={image.altText}
                            fill
                            sizes="64px"
                            className="h-full w-full object-cover"
                          />
                        </div>
                      )}
                      <div>
                        <span className="text-sm">{name}</span>
                        <span className="block text-sm text-contrast-300">x{quantity}</span>
                      </div>
                    </div>
                    <span>{price}</span>
                  </li>
                ))}
              </ul>

              <div className="flex items-end gap-2 pb-7 pt-10">
                <Input label="Coupon / Gift Certificate" />
                <Button variant="secondary" size="small" className="h-[48px]">
                  Apply
                </Button>
              </div>

              <table aria-label="Receipt Summary" className="w-full">
                <caption className="sr-only">Receipt Summary</caption>
                <tbody>
                  <tr className="border-b border-contrast-100">
                    <td>Subtotal</td>
                    <td className="py-4 text-right">$50.00</td>
                  </tr>
                  <tr className="border-b border-contrast-100">
                    <td>Shipping</td>
                    <td className="py-4 text-right">
                      {/* Add Address Button and Modal Form */} --
                    </td>
                  </tr>
                  <tr className="border-b border-contrast-100">
                    <td>Tax</td>
                    <td className="py-4 text-right">$4.50</td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr className="text-xl">
                    <th className="text-left">Grand Total</th>
                    <td className="py-10 text-right">$59.50</td>
                  </tr>
                </tfoot>
              </table>
            </div>
          )
        )}
      </div>
    </div>
  )
}

const ExpansionPanel = function ExpansionPanel({
  title,
  preview,
  form,
  isExpanded,
  onToggle,
}: {
  title: string
  preview: React.ReactNode
  form: React.ReactNode
  isExpanded: boolean
  onToggle: () => void
}) {
  return (
    <>
      <h2 className="w-full justify-stretch whitespace-nowrap font-heading text-3xl font-medium">
        {title}
      </h2>
      {!isExpanded && <div className="mt-4 flex w-full flex-col gap-2 text-sm">{preview}</div>}
      {isExpanded && <div className="col-span-3 mb-6 border-b pb-10">{form}</div>}
      {!isExpanded && (
        <Button variant="secondary" size="small" className="h-min" onClick={onToggle}>
          Edit
        </Button>
      )}
    </>
  )
}
