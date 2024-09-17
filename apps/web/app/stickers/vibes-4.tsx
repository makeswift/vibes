'use client'

import Draggable from '@/components/ui/draggable'
import { Sticker } from '@/components/ui/sticker'
import Transition from '@/components/ui/transition'
import { Vibes4Back, Vibes4Front, Vibes4Shadow } from '@/icons/generated'

export function Vibes4() {
  return (
    <div className="absolute -bottom-6 left-1/2 translate-x-6 sm:-bottom-2 sm:translate-x-20">
      <Draggable>
        {({ active, hover }) => (
          <Transition
            className="transition-transform delay-500 duration-700"
            from="translate-x-12 translate-y-[250px] rotate-90"
            to="translate-x-0 translate-y-0 rotate-[16deg]"
          >
            <Sticker
              active={active}
              hover={hover}
              peelAngle={-70}
              hoverPeel={0.2}
              activePeel={0.3}
              width={172}
              height={76}
              front={<Vibes4Front />}
              back={<Vibes4Back />}
              shadow={<Vibes4Shadow />}
            />
          </Transition>
        )}
      </Draggable>
    </div>
  )
}
