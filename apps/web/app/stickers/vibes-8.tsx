'use client'

import Draggable from '@/components/ui/draggable'
import { Sticker } from '@/components/ui/sticker'
import Transition from '@/components/ui/transition'
import { Vibes8Back, Vibes8Front, Vibes8Shadow } from '@/icons/generated'

export function Vibes8() {
  return (
    <Draggable>
      {({ active, hover }) => (
        <Transition
          className="transition-transform duration-1000"
          from="translate-x-[-700px] translate-y-[250px] rotate-[-210deg]"
          to="translate-x-0 translate-y-0 -rotate-12"
        >
          <Sticker
            active={active}
            hover={hover}
            peelAngle={0}
            width={197}
            height={65}
            front={<Vibes8Front />}
            back={<Vibes8Back />}
            shadow={<Vibes8Shadow />}
          />
        </Transition>
      )}
    </Draggable>
  )
}
