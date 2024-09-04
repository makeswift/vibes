'use client'

import Draggable from '@/components/ui/draggable'
import { Sticker } from '@/components/ui/sticker'
import Transition from '@/components/ui/transition'
import { Vibes3Back, Vibes3Front, Vibes3Shadow } from '@/icons/generated'

export function Vibes3() {
  return (
    <Draggable className="ml-14 mt-6">
      {({ active, hover }) => (
        <Transition
          className="transition-transform duration-1000"
          from="translate-x-[-700px] md:translate-x-[1600px] translate-y-[250px] rotate-[-210deg]"
          to="translate-x-0 translate-y-0 -rotate-12"
        >
          <Sticker
            active={active}
            hover={hover}
            peelAngle={0}
            width={219}
            height={69}
            front={<Vibes3Front />}
            back={<Vibes3Back />}
            shadow={<Vibes3Shadow />}
          />
        </Transition>
      )}
    </Draggable>
  )
}
