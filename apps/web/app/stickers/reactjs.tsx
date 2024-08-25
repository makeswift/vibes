'use client'

import Draggable from '@/components/ui/draggable'
import { Sticker } from '@/components/ui/sticker'
import Transition from '@/components/ui/transition'
import { ReactjsBack, ReactjsFront, ReactjsShadow } from '@/icons/generated'

export function Reactjs() {
  return (
    <div className="absolute right-full top-4 z-10 mr-4">
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
