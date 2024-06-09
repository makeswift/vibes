'use client'

import Draggable from '@/components/ui/draggable'
import { Sticker } from '@/components/ui/sticker'
import Transition from '@/components/ui/transition'
import { PropsBack, PropsFront, PropsShadow } from '@/icons/generated'

export function MadProps() {
  return (
    <div className="pointer-events-none absolute right-[12%] top-[116%] hidden sm:block">
      <Draggable>
        {({ active, hover }) => (
          <Transition
            className="transition-transform duration-1000 [transition-delay:1700ms]"
            from="translate-x-[200px] translate-y-[700px] rotate-[20deg]"
            to="translate-x-0 translate-y-0 rotate-[20deg]"
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
    </div>
  )
}
