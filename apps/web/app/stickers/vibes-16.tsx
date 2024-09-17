'use client'

import Draggable from '@/components/ui/draggable'
import { Sticker } from '@/components/ui/sticker'
import Transition from '@/components/ui/transition'
import { Vibes16Back, Vibes16Front, Vibes16Shadow } from '@/icons/generated'

export function Vibes16() {
  return (
    <Draggable>
      {({ active, hover }) => (
        <Transition
          className="transition-transform duration-1000"
          from="translate-x-[-700px] translate-y-[250px] rotate-[-210deg]"
          to="translate-x-0 translate-y-0 -rotate-14"
        >
          <Sticker
            active={active}
            hover={hover}
            peelAngle={0}
            width={230}
            height={77}
            front={<Vibes16Front />}
            back={<Vibes16Back />}
            shadow={<Vibes16Shadow />}
          />
        </Transition>
      )}
    </Draggable>
  )
}
