'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

import { clsx } from 'clsx'

import { Button } from '@/vibes/soul/components/button'
import { CartProduct } from '@/vibes/soul/components/cart'
import { Input } from '@/vibes/soul/components/input'

export const Checkout = function Checkout({ products }: { products: CartProduct[] }) {
  const [isLoading, setIsLoading] = useState(false)

  return (
    <div className="mx-auto max-w-screen-2xl @container">
      <div className="flex w-full flex-col gap-10 px-3 pb-10 pt-24 @xl:px-6 @4xl:flex-row @4xl:gap-20 @4xl:pb-20 @4xl:pt-32 @5xl:px-20">
        {/* Cart Side */}
        <div className={clsx(products?.length > 0 && '@4xl:w-2/3', 'w-full')}>
          <h1 className="mb-10 font-heading text-4xl font-medium leading-none @xl:text-5xl">
            Checkout
            {!isLoading && products?.length > 0 && (
              <span className="ml-4 text-contrast-200">{products.length}</span>
            )}
          </h1>

          {/* Customer */}
          <div className="flex items-end gap-4">
            <Input label="Email" className="max-w-64" value="test@test.com" />
            <Button variant="secondary" size="small" className="h-[48px]">
              Continue
            </Button>
          </div>

          {/* Shipping */}
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
                  className="text-sm text-contrast-300 transition-colors duration-300 hover:text-foreground"
                >
                  Edit Cart
                </Link>
              </div>

              {/* Mini Products List in Order Summary */}
              <ul className="flex flex-col gap-y-4">
                {products.map(({ id, name, href, image, price, subtitle, quantity }) => (
                  <li key={id} className="flex items-center justify-between gap-x-4">
                    <div className="flex items-center gap-x-4">
                      {image?.src && (
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

              <hr className="my-10 border-contrast-100" />

              <table aria-label="Receipt Summary" className="w-full">
                <caption className="sr-only">Receipt Summary</caption>
                <tbody>
                  <tr className="flex w-full items-end gap-2 pb-10">
                    {/* <span>Coupon / Gift Certificate</span> */}
                    <Input label="Coupon / Gift Certificate" className="" />
                    <Button variant="secondary" size="small" className="h-[48px]">
                      Apply
                    </Button>
                  </tr>
                  <tr className="border-y border-contrast-100">
                    <td scope="row">Subtotal</td>
                    <td className="py-4 text-right">$50.00</td>
                  </tr>
                  <tr className="border-b border-contrast-100">
                    <td scope="row">Shipping</td>
                    <td className="py-4 text-right">
                      {/* Add Address Button and Modal Form */} --
                    </td>
                  </tr>
                  <tr className="border-b border-contrast-100">
                    <td scope="row">Tax</td>
                    <td className="py-4 text-right">$4.50</td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr className=" text-xl">
                    <th scope="row" className="text-left">
                      Grand Total
                    </th>
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
