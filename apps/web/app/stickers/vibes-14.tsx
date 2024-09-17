'use client'

import Draggable from '@/components/ui/draggable'
import { Sticker } from '@/components/ui/sticker'
import Transition from '@/components/ui/transition'
import { Vibes14Back, Vibes14Front, Vibes14Shadow } from '@/icons/generated'

export function Vibes14() {
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
            width={200}
            height={72}
            front={<Vibes14Front />}
            back={<Vibes14Back />}
            shadow={<Vibes14Shadow />}
          />
        </Transition>
      )}
    </Draggable>
  )
}
