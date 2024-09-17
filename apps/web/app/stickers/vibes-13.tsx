'use client'

import Draggable from '@/components/ui/draggable'
import { Sticker } from '@/components/ui/sticker'
import Transition from '@/components/ui/transition'
import { Vibes13Back, Vibes13Front, Vibes13Shadow } from '@/icons/generated'

export function Vibes13() {
  return (
    <div className="absolute bottom-16 left-1/2 -translate-x-60">
      <Draggable>
        {({ active, hover }) => (
          <Transition
            className="transition-transform duration-1000"
            from="-translate-x-24 translate-y-[250px] -rotate-180"
            to="translate-x-0 translate-y-0 rotate-3"
          >
            <Sticker
              active={active}
              hover={hover}
              peelAngle={0}
              width={227}
              height={80}
              front={<Vibes13Front />}
              back={<Vibes13Back />}
              shadow={<Vibes13Shadow />}
            />
          </Transition>
        )}
      </Draggable>
    </div>
  )
}
