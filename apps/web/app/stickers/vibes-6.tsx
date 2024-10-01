'use client'

import Draggable from '@/components/ui/draggable'
import { Sticker } from '@/components/ui/sticker'
import Transition from '@/components/ui/transition'
import { Vibes6Back, Vibes6Front, Vibes6Shadow } from '@/icons/generated'

export function Vibes6() {
  return (
    <div className="absolute bottom-0 left-1/2 -translate-x-[240px] sm:-translate-x-[360px]">
      <Draggable>
        {({ active, hover }) => (
          <Transition
            className="transition-transform delay-300 duration-1000"
            from="-translate-x-20 translate-y-[250px] rotate-90"
            to="translate-x-0 translate-y-5 -rotate-6"
          >
            <Sticker
              active={active}
              hover={hover}
              peelAngle={-150}
              hoverPeel={0.2}
              activePeel={0.3}
              width={221}
              height={86}
              front={<Vibes6Front />}
              back={<Vibes6Back />}
              shadow={<Vibes6Shadow />}
            />
          </Transition>
        )}
      </Draggable>
    </div>
  )
}
