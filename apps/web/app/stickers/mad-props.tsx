'use client'

import Draggable from '@/components/ui/draggable'
import { Sticker } from '@/components/ui/sticker'
import Transition from '@/components/ui/transition'
import { PropsBack, PropsFront, PropsShadow } from '@/icons/generated'

export function MadProps() {
  return (
    <Draggable className="relative z-10 -mt-5">
      {({ active, hover }) => (
        <Transition
          className="transition-transform duration-1000"
          from="translate-x-[-700px] md:translate-x-[1600px] translate-y-[100px] rotate-[-120deg]"
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
