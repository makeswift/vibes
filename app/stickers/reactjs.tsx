'use client'

import Draggable from '@/components/ui/draggable'
import { Sticker } from '@/components/ui/sticker'
import Transition from '@/components/ui/transition'
import { ReactjsBack, ReactjsFront, ReactjsShadow } from '@/icons/generated'

export function Reactjs() {
  return (
    <div className="pointer-events-none absolute left-[10%] top-[112%] sm:left-[-24%] sm:top-[-32%] md:left-[-18%] md:top-[-24%]">
      <Draggable>
        {({ active }) => (
          <Transition
            className="transition-transform duration-1000 [transition-delay:1700ms]"
            from="translate-x-[-600px] translate-y-[-700px] rotate-[-120deg]"
            to="translate-x-0 translate-y-0 rotate-[4deg] md:rotate-[20deg]"
          >
            <Sticker
              active={active}
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
