'use client'

import clsx from 'clsx'

import Draggable from '@/components/ui/draggable'
import { Sticker } from '@/components/ui/sticker'
import Transition from '@/components/ui/transition'
import { ShoppingBagBack, ShoppingBagFront, ShoppingBagShadow } from '@/icons/generated'

export function ShoppingBag() {
  return (
    <div className="absolute -bottom-36 left-1/4 z-10 origin-top-left scale-110 select-none sm:-bottom-28 sm:left-1/3 md:-top-2 md:bottom-auto md:left-full md:scale-75 xl:scale-100">
      <Draggable>
        {({ active, hover }) => (
          <Transition
            className="transition-transform duration-1000 [transition-delay:850ms]"
            from="translate-x-[300px] translate-y-[1000px] rotate-[-100deg]"
            to="translate-x-0 translate-y-0 rotate-12"
          >
            <Sticker
              active={active}
              hover={hover}
              peelAngle={-40}
              hoverPeel={0.2}
              activePeel={0.3}
              width={227}
              height={242}
              front={<ShoppingBagFront />}
              back={<ShoppingBagBack />}
              shadow={<ShoppingBagShadow />}
            />
          </Transition>
        )}
      </Draggable>
    </div>
  )
}
