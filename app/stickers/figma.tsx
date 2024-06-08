'use client'

import Draggable from '@/components/ui/draggable'
import { Sticker } from '@/components/ui/sticker'
import Transition from '@/components/ui/transition'
import { FigmaBack, FigmaFront, FigmaShadow } from '@/icons/generated'

export function Figma() {
  return (
    <div className="absolute left-[8%] top-[115%]">
      <Draggable>
        {({ active }) => (
          <Transition
            className="delay-[4000ms] transition-transform duration-1000"
            from="translate-x-[-400px] translate-y-[700px] rotate-[-20deg]"
            to="translate-x-0 translate-y-0 -rotate-12"
          >
            <Sticker
              active={active}
              peelAngle={0}
              width={168}
              height={268}
              front={<FigmaFront />}
              back={<FigmaBack />}
              shadow={<FigmaShadow />}
            />
          </Transition>
        )}
      </Draggable>
    </div>
  )
}
