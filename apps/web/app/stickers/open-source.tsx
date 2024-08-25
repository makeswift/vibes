'use client'

import Draggable from '@/components/ui/draggable'
import { Sticker } from '@/components/ui/sticker'
import Transition from '@/components/ui/transition'
import { OpenSourceBack, OpenSourceFront, OpenSourceShadow } from '@/icons/generated'

export function OpenSource() {
  return (
    <Draggable className="-ml-7 -mt-4">
      {({ active, hover }) => (
        <Transition
          className="transition-transform duration-1000"
          from="translate-x-[-700px] translate-y-[400px] rotate-[-90deg]"
          to="translate-x-0 translate-y-0 rotate-[-8deg]"
        >
          <Sticker
            active={active}
            hover={hover}
            peelAngle={-15}
            hoverPeel={0.15}
            width={350}
            height={329}
            front={<OpenSourceFront />}
            back={<OpenSourceBack />}
            shadow={<OpenSourceShadow />}
          />
        </Transition>
      )}
    </Draggable>
  )
}
