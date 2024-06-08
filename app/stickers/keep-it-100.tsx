'use client'

import Draggable from '@/components/ui/draggable'
import { Sticker } from '@/components/ui/sticker'
import Transition from '@/components/ui/transition'
import { KeepIt100Back, KeepIt100Front, KeepIt100Shadow } from '@/icons/generated'

export function KeepIt100() {
  return (
    <div className="pointer-events-none absolute left-[-20%] top-[125%] z-10 sm:left-[15%] sm:top-[110%] sm:z-auto md:left-[22%] md:top-[120%]">
      <Draggable>
        {({ active }) => (
          <Transition
            className="transition-transform duration-1000 [transition-delay:1800ms] "
            from="translate-x-[-100px] translate-y-[700px] rotate-[-20deg]"
            to="translate-x-0 translate-y-0 rotate-[-8deg]"
          >
            <Sticker
              active={active}
              peelAngle={15}
              hoverPeel={0.2}
              activePeel={0.3}
              width={258}
              height={289}
              front={<KeepIt100Front />}
              back={<KeepIt100Back />}
              shadow={<KeepIt100Shadow />}
            />
          </Transition>
        )}
      </Draggable>
    </div>
  )
}
