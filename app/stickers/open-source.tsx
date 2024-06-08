'use client'

import Draggable from '@/components/ui/draggable'
import { Sticker } from '@/components/ui/sticker'
import Transition from '@/components/ui/transition'
import { OpenSourceBack, OpenSourceFront, OpenSourceShadow } from '@/icons/generated'

export function OpenSource() {
  return (
    <div className="pointer-events-none absolute left-[-38%] top-[88%] sm:left-[-40%] sm:top-[96%] lg:left-[-35%] lg:top-[100%]">
      <Draggable>
        {({ active }) => (
          <Transition
            className="transition-transform duration-1000 [transition-delay:1700ms]"
            from="translate-x-[-700px] translate-y-[700px] rotate-[-90deg]"
            to="translate-x-0 translate-y-0 rotate-[8deg]"
          >
            <Sticker
              active={active}
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
