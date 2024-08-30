'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

import clsx from 'clsx'
import { Trash2 } from 'lucide-react'

import { Button } from '@/vibes/soul/components/button'
import Counter from '@/vibes/soul/components/counter'
import { Product } from '@/vibes/soul/components/product-card'

interface Image {
  altText: string
  src: string
}

export interface CartProduct extends Product {
  price: string
  quantity: number
}

interface CartProps {
  products: CartProduct[]
}

export const Cart = function Cart({ products }: CartProps) {
  const [isLoading, setIsLoading] = useState(false)

  return (
    <div className="mx-auto max-w-screen-2xl @container">
      <div className="flex w-full flex-col gap-10 px-3 py-10 @xl:px-6 @4xl:flex-row @4xl:gap-20 @4xl:py-20 @5xl:px-20">
        {/* Cart Side */}
        <div className={clsx(products?.length > 0 && '@4xl:w-2/3', 'w-full')}>
          <h1 className="mb-10 text-4xl font-medium leading-none @xl:text-5xl">
            Your Cart
            {!isLoading && products?.length > 0 && (
              <span className="ml-4 text-contrast-200">{products.length}</span>
            )}
          </h1>

          {/* Cart Items */}
          <ul className="flex flex-col gap-5 gap-y-10">
            {isLoading
              ? Array.from({ length: 2 }).map((_, index) => {
                  // Skeleton Loader
                  return (
                    <div key={index} className="flex animate-pulse items-center gap-x-5">
                      <div className="aspect-[3/4] w-full max-w-36 rounded-lg bg-contrast-100" />
                      <div className="flex flex-grow flex-wrap justify-between gap-x-5 gap-y-2">
                        <div className="flex flex-grow flex-col gap-y-2">
                          <div className="h-4 w-32 rounded bg-contrast-100"></div>
                          <div className="h-4 w-44 rounded bg-contrast-100"></div>
                        </div>
                        <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
                          <div className="h-4 w-16 rounded bg-contrast-100"></div>
                          <div className="h-10 w-20 rounded bg-contrast-100"></div>
                          <div className="h-6 w-6 rounded bg-contrast-100"></div>
                        </div>
                      </div>
                    </div>
                  )
                })
              : // Cart Items
                products.map(({ id, name, href, image, price, subtitle, quantity }) => (
                  <li className="flex items-center gap-x-5" key={id}>
                    {image && (
                      <Link
                        href={href}
                        className="relative aspect-[3/4] w-full max-w-36 overflow-hidden rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4"
                      >
                        <Image fill src={image.src} alt={image.altText} className="object-cover" />
                      </Link>
                    )}
                    <div className="flex flex-grow flex-wrap justify-between gap-x-5 gap-y-2">
                      <div className="flex flex-col">
                        <span className="font-medium">{name}</span>
                        <span className="text-contrast-300">{subtitle}</span>
                      </div>
                      <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
                        <span className="font-medium">{price}</span>
                        <Counter current={quantity} />
                        {/* TODO: Remove */}
                        <button className="-ml-1 flex h-8 w-8 items-center justify-center rounded-full transition-colors duration-300 hover:bg-contrast-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4">
                          <Trash2 strokeWidth={1} size={18} />
                        </button>
                      </div>
                    </div>
                  </li>
                ))}

            {products.length === 0 && (
              <div>
                <h2 className="mb-2 text-center text-3xl font-medium text-contrast-300">
                  Your cart is empty
                </h2>
                <p className="mx-auto max-w-sm text-center text-contrast-300">Go ahead & explore</p>
              </div>
            )}
          </ul>
        </div>

        {/* Summary Side */}
        {/* TODO: Need API structure to generate dynamically */}
        {isLoading ? (
          // Skeleton Loader
          <div className="animate-pulse @4xl:w-1/3">
            <div className="mb-20 mt-6 h-10 w-44 rounded bg-contrast-100"></div>
            <div className="h-96 w-full rounded bg-contrast-100"></div>
          </div>
        ) : (
          products.length > 0 && (
            <div className="@4xl:w-1/3">
              <h2 className="mb-10 text-4xl font-medium leading-none @xl:text-5xl">Summary</h2>
              <table aria-label="Receipt Summary" className="w-full">
                <caption className="sr-only">Receipt Summary</caption>
                <tbody>
                  <tr className="border-b border-contrast-100">
                    <td scope="row">Subtotal</td>
                    <td className="py-4 text-right">$50.00</td>
                  </tr>
                  <tr className="border-b border-contrast-100">
                    <td scope="row">Shipping</td>
                    <td className="py-4 text-right">
                      <button className="rounded-lg font-medium ring-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">
                        Add Address
                      </button>
                    </td>
                  </tr>
                  <tr className="border-b border-contrast-100">
                    <td scope="row">Tax</td>
                    <td className="py-4 text-right">$4.50</td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr className="text-xl">
                    <th scope="row" className="text-left">
                      Grand Total
                    </th>
                    <td className="py-10 text-right">$59.50</td>
                  </tr>
                </tfoot>
              </table>
              <Button className="w-full">Checkout</Button>
            </div>
          )
        )}
      </div>
    </div>
  )
}

export default Cart
