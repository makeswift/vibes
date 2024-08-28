'use client'

import Image from 'next/image'
import Link from 'next/link'

import { Trash2 } from 'lucide-react'

import { Button } from '@/vibes/soul/components/button'
import { Product } from '@/vibes/soul/components/product-card'

interface Image {
  altText: string
  src: string
}

export interface CartProduct extends Product {
  quantity: number
}

interface CartProps {
  products: CartProduct[]
}

export const Cart = function Cart({ products }: CartProps) {
  return (
    <div className="mx-auto max-w-screen-2xl @container">
      <div className="flex w-full flex-col gap-10 px-3 py-10 @xl:px-6 @4xl:flex-row @4xl:gap-20 @4xl:py-20 @5xl:px-20">
        {/* Cart Items */}
        <div className="@4xl:w-2/3">
          <h1 className="mb-10 text-4xl font-medium @xl:text-5xl">
            Your Cart <span className="text-contrast-200">{products.length}</span>
          </h1>

          <ul className="flex flex-col gap-5 gap-y-10">
            {products?.map(({ id, name, href, image, price, subtitle, quantity }) => {
              return (
                <li className="flex  items-center gap-5" key={id}>
                  <Link href={href} className="flex w-full max-w-36 items-center gap-5">
                    {image && (
                      <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg">
                        <Image fill src={image.src} alt={image.altText} className="object-cover" />
                      </div>
                    )}
                  </Link>
                  <div className="flex flex-grow flex-wrap justify-between gap-5">
                    <div className="flex flex-col">
                      <span className="font-medium">{name}</span>
                      <span className="text-contrast-300">{subtitle}</span>
                    </div>
                    <div className="flex items-center gap-5">
                      <span>$123.99</span>
                      <span>Counter</span>
                      {/* TODO: Counter */}
                      {/* TODO: Remove */}
                      <button>
                        <Trash2
                          strokeWidth={1.5}
                          className="text-sm text-contrast-300 transition-colors duration-300 hover:text-foreground"
                        />
                      </button>
                    </div>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>

        {/* Summary */}
        {/* TODO: Need API structure to generate dynamically */}
        <div className="@4xl:w-1/3">
          <h2 className="mb-10 text-4xl font-medium @xl:text-5xl">Summary</h2>
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
                  <button className="font-medium">Add Address</button>
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
      </div>
    </div>
  )
}

export default Cart
