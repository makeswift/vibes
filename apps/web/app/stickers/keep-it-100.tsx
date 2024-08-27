'use client'

import Draggable from '@/components/ui/draggable'
import { Sticker } from '@/components/ui/sticker'
import Transition from '@/components/ui/transition'
import { KeepIt100Back, KeepIt100Front, KeepIt100Shadow } from '@/icons/generated'

export function KeepIt100() {
  return (
    <Draggable className="-mt-6 mr-8">
      {({ active, hover }) => (
        <Transition
          className="transition-transform duration-1000"
          from="translate-x-[-700px] md:translate-x-[1600px] translate-y-0 rotate-[180deg]"
          to="translate-x-0 translate-y-0 rotate-12"
        >
          <Sticker
            active={active}
            hover={hover}
            peelAngle={15}
            hoverPeel={0.2}
            activePeel={0.3}
            width={258}
            height={289}
            front={<KeepIt100Front />}
            back={<KeepIt100Back />}
            shadow={<KeepIt100Shadow />}
          />
        </Transition>
      )}
    </Draggable>
  )
}
