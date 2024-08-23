'use client'

import Draggable from '@/components/ui/draggable'
import { Sticker } from '@/components/ui/sticker'
import Transition from '@/components/ui/transition'
import { OpenSourceBack, OpenSourceFront, OpenSourceShadow } from '@/icons/generated'

export function OpenSource() {
  return (
    <div className="pointer-events-none absolute -top-8 left-6">
      <Draggable>
        {({ active, hover }) => (
          <Transition
            className="transition-transform duration-1000 [transition-delay:1700ms]"
            from="translate-x-[-700px] translate-y-[700px] rotate-[-90deg]"
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
    </div>
  )
}
