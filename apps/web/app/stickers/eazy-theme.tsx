'use client'

import Draggable from '@/components/ui/draggable'
import { Sticker } from '@/components/ui/sticker'
import Transition from '@/components/ui/transition'
import { ThemesBack, ThemesFront, ThemesShadow } from '@/icons/generated'

export function EazyTheme() {
  return (
    <Draggable className="mx-12 -mt-16 select-none">
      {({ active, hover }) => (
        <Transition
          className="transition-transform duration-1000"
          from="translate-x-[700px] md:translate-x-[1600px] -translate-y-20 rotate-[270deg]"
          to="translate-x-0 translate-y-0 rotate-[-16deg]"
        >
          <Sticker
            active={active}
            hover={hover}
            peelAngle={15}
            hoverPeel={0.2}
            width={168}
            height={382}
            front={<ThemesFront />}
            back={<ThemesBack />}
            shadow={<ThemesShadow />}
          />
        </Transition>
      )}
    </Draggable>
  )
}
