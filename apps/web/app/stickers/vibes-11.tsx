'use client'

import Draggable from '@/components/ui/draggable'
import { Sticker } from '@/components/ui/sticker'
import Transition from '@/components/ui/transition'
import { Vibes11Back, Vibes11Front, Vibes11Shadow } from '@/icons/generated'

export function Vibes11() {
  return (
    <div className="absolute bottom-24 left-1/2 translate-x-[270px]">
      <Draggable>
        {({ active, hover }) => (
          <Transition
            className="transition-transform duration-1000"
            from="translate-x-32 translate-y-[250px] rotate-90"
            to="translate-x-0 translate-y-0 -rotate-6"
          >
            <Sticker
              active={active}
              hover={hover}
              peelAngle={-95}
              hoverPeel={0.2}
              activePeel={0.3}
              width={203}
              height={73}
              front={<Vibes11Front />}
              back={<Vibes11Back />}
              shadow={<Vibes11Shadow />}
            />
          </Transition>
        )}
      </Draggable>
    </div>
  )
}
