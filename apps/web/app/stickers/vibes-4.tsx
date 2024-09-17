'use client'

import Draggable from '@/components/ui/draggable'
import { Sticker } from '@/components/ui/sticker'
import Transition from '@/components/ui/transition'
import { Vibes4Back, Vibes4Front, Vibes4Shadow } from '@/icons/generated'

export function Vibes4() {
  return (
    <div className="absolute -bottom-2 left-1/2 translate-x-16">
      <Draggable>
        {({ active, hover }) => (
          <Transition
            className="transition-transform duration-1000"
            from="translate-x-[-700px] translate-y-[250px] rotate-[-210deg]"
            to="translate-x-0 translate-y-0 rotate-[16deg]"
          >
            <Sticker
              active={active}
              hover={hover}
              peelAngle={0}
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
