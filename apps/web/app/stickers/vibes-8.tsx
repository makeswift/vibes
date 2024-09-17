'use client'

import Draggable from '@/components/ui/draggable'
import { Sticker } from '@/components/ui/sticker'
import Transition from '@/components/ui/transition'
import { Vibes8Back, Vibes8Front, Vibes8Shadow } from '@/icons/generated'

export function Vibes8() {
  return (
    <div className="absolute bottom-9 left-1/2 -translate-x-[760px]">
      <Draggable>
        {({ active, hover }) => (
          <Transition
            className="transition-transform delay-300 duration-1000"
            from="-translate-x-40 translate-y-[250px] -rotate-180"
            to="translate-x-0 translate-y-0 -rotate-[22deg]"
          >
            <Sticker
              active={active}
              hover={hover}
              peelAngle={0}
              width={197}
              height={65}
              front={<Vibes8Front />}
              back={<Vibes8Back />}
              shadow={<Vibes8Shadow />}
            />
          </Transition>
        )}
      </Draggable>
    </div>
  )
}
