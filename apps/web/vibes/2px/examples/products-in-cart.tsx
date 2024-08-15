'use client'

import { cn } from '@/lib/utils'
import ProductsInCart from '@/vibes/2px/components/products-in-cart'

import MoltenStool from './assets/molten-stool.png'

export default function Preview() {
  const emptyMessage = (
    <div
      className={cn(
        'flex min-h-[26rem] items-center justify-center text-center text-2xl font-medium leading-9 -tracking-[0.0175rem]'
      )}
    >
      Your cart is empty
    </div>
  )
  return (
    <div className="flex min-h-96 items-start justify-center bg-white p-5 @container sm:p-8 lg:p-12">
      <ProductsInCart
        emptyMessage={emptyMessage}
        products={[
          {
            id: '1',
            name: 'Molten stool',
            price: '549,00 €',
            quantity: 1,
            image: {
              src: MoltenStool.src,
              altText: 'Molten stool',
              width: 80,
              height: 80,
            },
          },
          {
            id: '2',
            name: 'Molten stool',
            price: '549,00 €',
            quantity: 1,
            image: {
              src: MoltenStool.src,
              altText: 'Molten stool',
              width: 80,
              height: 80,
            },
          },
        ]}
      />
    </div>
  )
}
