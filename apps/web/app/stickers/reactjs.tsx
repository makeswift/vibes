'use client'

import Draggable from '@/components/ui/draggable'
import { Sticker } from '@/components/ui/sticker'
import Transition from '@/components/ui/transition'
import { ReactjsBack, ReactjsFront, ReactjsShadow } from '@/icons/generated'

export function Reactjs() {
  return (
    <div className="absolute -bottom-20 -left-16 z-10 origin-right scale-100 sm:-right-12 sm:left-auto sm:top-96 sm:scale-110 md:-left-48 md:bottom-6 md:right-auto md:top-auto md:scale-75 xl:-left-36 xl:bottom-16 xl:scale-100">
      <Draggable>
        {({ active, hover }) => (
          <Transition
            className="transition-transform duration-1000 [transition-delay:700ms]"
            from="translate-x-[-1000px] translate-y-[100px] rotate-[-270deg]"
            to="translate-x-0 translate-y-0 rotate-12"
          >
            <Sticker
              active={active}
              hover={hover}
              peelAngle={-0}
              hoverPeel={0.25}
              activePeel={0.35}
              width={229}
              height={207}
              front={<ReactjsFront />}
              back={<ReactjsBack />}
              shadow={<ReactjsShadow />}
            />
          </Transition>
        )}
      </Draggable>
    </div>
  )
}
