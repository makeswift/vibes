'use client';

import Draggable from '@/components/ui/draggable';
import { Sticker } from '@/components/ui/sticker';
import Transition from '@/components/ui/transition';
import { ShoppingBagBack, ShoppingBagFront, ShoppingBagShadow } from '@/icons/generated';

export function ShoppingBag() {
  return (
    <div className="absolute -bottom-36 left-1/4 z-10 origin-top-left scale-110 sm:-bottom-28 sm:left-1/3 md:-top-2 md:bottom-auto md:left-full md:scale-75 xl:scale-100">
      <Draggable>
        {({ active, hover }) => (
          <Transition
            className="transition-transform [transition-delay:850ms] duration-1000"
            from="translate-x-[300px] translate-y-[1000px] rotate-[-100deg]"
            to="translate-x-0 translate-y-0 rotate-12"
          >
            <Sticker
              active={active}
              activePeel={0.3}
              back={<ShoppingBagBack />}
              front={<ShoppingBagFront />}
              height={242}
              hover={hover}
              hoverPeel={0.2}
              peelAngle={-40}
              shadow={<ShoppingBagShadow />}
              width={227}
            />
          </Transition>
        )}
      </Draggable>
    </div>
  );
}
