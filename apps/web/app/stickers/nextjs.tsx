'use client'

import Draggable from '@/components/ui/draggable'
import { Sticker } from '@/components/ui/sticker'
import Transition from '@/components/ui/transition'
import { NextjsBack, NextjsFront, NextjsShadow } from '@/icons/generated'

export function Nextjs() {
  return (
    <Draggable className="relative z-10 -mr-4">
      {({ active, hover }) => (
        <Transition
          className="transition-transform duration-1000"
          from="translate-x-[-700px] md:translate-x-[1600px] translate-y-[200px] rotate-[-520deg]"
          to="translate-x-0 translate-y-0 rotate-12"
        >
          <Sticker
            active={active}
            hover={hover}
            peelAngle={20}
            hoverPeel={0.2}
            activePeel={0.3}
            width={244}
            height={244}
            front={<NextjsFront />}
            back={<NextjsBack />}
            shadow={<NextjsShadow />}
          />
        </Transition>
      )}
    </Draggable>
  )
}
