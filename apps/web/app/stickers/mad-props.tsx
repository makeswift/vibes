'use client'

import Draggable from '@/components/ui/draggable'
import { Sticker } from '@/components/ui/sticker'
import Transition from '@/components/ui/transition'
import { PropsBack, PropsFront, PropsShadow } from '@/icons/generated'

export function MadProps() {
  return (
    <Draggable className="-mt-5">
      {({ active, hover }) => (
        <Transition
          className="transition-transform duration-1000"
          from="translate-x-[-700px] translate-y-[100px] rotate-[20deg]"
          to="translate-x-0 translate-y-0 rotate-12"
        >
          <Sticker
            active={active}
            hover={hover}
            peelAngle={20}
            hoverPeel={0.2}
            activePeel={0.3}
            width={250}
            height={302}
            front={<PropsFront />}
            back={<PropsBack />}
            shadow={<PropsShadow />}
          />
        </Transition>
      )}
    </Draggable>
  )
}
