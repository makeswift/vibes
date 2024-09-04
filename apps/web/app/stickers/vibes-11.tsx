'use client'

import Draggable from '@/components/ui/draggable'
import { Sticker } from '@/components/ui/sticker'
import Transition from '@/components/ui/transition'
import { Vibes11Back, Vibes11Front, Vibes11Shadow } from '@/icons/generated'

export function Vibes11() {
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
            width={203}
            height={73}
            front={<Vibes11Front />}
            back={<Vibes11Back />}
            shadow={<Vibes11Shadow />}
          />
        </Transition>
      )}
    </Draggable>
  )
}
