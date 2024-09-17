'use client'

import Draggable from '@/components/ui/draggable'
import { Sticker } from '@/components/ui/sticker'
import Transition from '@/components/ui/transition'
import { Vibes15Back, Vibes15Front, Vibes15Shadow } from '@/icons/generated'

export function Vibes15() {
  return (
    <div className="absolute bottom-16 left-1/2 -translate-x-[530px]">
      <Draggable>
        {({ active, hover }) => (
          <Transition
            className="transition-transform delay-500 duration-1000"
            from="-translate-x-48 translate-y-[250px] -rotate-180"
            to="translate-x-0 translate-y-0 -rotate-6"
          >
            <Sticker
              active={active}
              hover={hover}
              peelAngle={0}
              width={167}
              height={65}
              front={<Vibes15Front />}
              back={<Vibes15Back />}
              shadow={<Vibes15Shadow />}
            />
          </Transition>
        )}
      </Draggable>
    </div>
  )
}
