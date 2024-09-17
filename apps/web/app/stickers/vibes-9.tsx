'use client'

import Draggable from '@/components/ui/draggable'
import { Sticker } from '@/components/ui/sticker'
import Transition from '@/components/ui/transition'
import { Vibes9Back, Vibes9Front, Vibes9Shadow } from '@/icons/generated'

export function Vibes9() {
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
            width={196}
            height={73}
            front={<Vibes9Front />}
            back={<Vibes9Back />}
            shadow={<Vibes9Shadow />}
          />
        </Transition>
      )}
    </Draggable>
  )
}
