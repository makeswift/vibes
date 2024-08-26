'use client'

import Draggable from '@/components/ui/draggable'
import { Sticker } from '@/components/ui/sticker'
import Transition from '@/components/ui/transition'
import { ReactjsBack, ReactjsFront, ReactjsShadow } from '@/icons/generated'

export function Reactjs() {
  return (
    <div className="absolute z-10 hidden origin-right scale-75 md:-left-36 md:bottom-16 md:right-auto md:top-auto md:-mr-8 md:block xl:scale-100">
      <Draggable>
        {({ active, hover }) => (
          <Transition
            className="transition-transform duration-1000 [transition-delay:500ms]"
            from="translate-x-[-600px] translate-y-[100px] rotate-[-120deg]"
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
