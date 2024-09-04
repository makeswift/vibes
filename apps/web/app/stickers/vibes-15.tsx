'use client'

import Draggable from '@/components/ui/draggable'
import { Sticker } from '@/components/ui/sticker'
import Transition from '@/components/ui/transition'
import { Vibes15Back, Vibes15Front, Vibes15Shadow } from '@/icons/generated'

export function Vibes15() {
  return (
    <Draggable className="ml-14 mt-6">
      {({ active, hover }) => (
        <Transition
          className="transition-transform duration-1000"
          from="translate-x-[-700px] md:translate-x-[1600px] translate-y-[250px] rotate-[-210deg]"
          to="translate-x-0 translate-y-0 -rotate-14"
        >
          <Sticker
            active={active}
            hover={hover}
            peelAngle={0}
            width={167}
            height={65}
            front={<Vibes15Front />}
            back={<Vibes15Back />}
            shadow={<Vibes15Shadow />}
          />
        </Transition>
      )}
    </Draggable>
  )
}
