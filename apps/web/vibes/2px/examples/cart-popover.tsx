'use client'

import { useState } from 'react'

import { cn } from '@/lib/utils'
import Button from '@/vibes/2px/components/button'
import { MinusSolidIcon } from '@/vibes/2px/components/icons/MinusSolidIcon'
import { PlusSolidIcon } from '@/vibes/2px/components/icons/PlusSolidIcon'

import CartPopover from '../components/cart-popover'
import { CrossIcon } from '../components/icons/CrossIcon'
import MoltenStool from './assets/molten-stool.png'

export default function Preview() {
  const [open, setIsOpen] = useState(false)
  const onOpenChange = (open: boolean) => setIsOpen(open)
  const trigger = (
    <button className="group" onClick={() => setIsOpen(o => !o)}>
      <PlusSolidIcon className={cn('h-8 w-8', open && 'hidden')} />
      <MinusSolidIcon className={cn('hidden h-8 w-8', open && 'block')} />
    </button>
  )
  const buttons = (
    <div className="flex flex-col items-center justify-between gap-4">
      <Button className="w-full" key="checkout" variant="primary" onClick={() => setIsOpen(false)}>
        Checkout
      </Button>
      <Button
        className="w-full"
        key="view-cart"
        variant="secondary"
        onClick={() => setIsOpen(false)}
      >
        View cart
      </Button>
    </div>
  )

  const closeIcon = <CrossIcon className="h-10 w-10 sm:h-5 sm:w-5" />
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
    <div className="flex min-h-96 items-start justify-center bg-white p-5 sm:p-8 lg:p-12">
      <CartPopover
        title="Cart"
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
        trigger={trigger}
        buttons={buttons}
        open={open}
        onOpenChange={onOpenChange}
        closeIcon={closeIcon}
        emptyMessage={emptyMessage}
      />
    </div>
  )
}
