'use client'

import Draggable from '@/components/ui/draggable'
import { Sticker } from '@/components/ui/sticker'
import Transition from '@/components/ui/transition'
import { Vibes6Back, Vibes6Front, Vibes6Shadow } from '@/icons/generated'

export function Vibes6() {
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
            width={221}
            height={86}
            front={<Vibes6Front />}
            back={<Vibes6Back />}
            shadow={<Vibes6Shadow />}
          />
        </Transition>
      )}
    </Draggable>
  )
}
