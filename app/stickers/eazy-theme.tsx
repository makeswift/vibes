'use client'

import Draggable from '@/components/ui/draggable'
import { Sticker } from '@/components/ui/sticker'
import Transition from '@/components/ui/transition'
import { ThemesBack, ThemesFront, ThemesShadow } from '@/icons/generated'

export function EazyTheme() {
  return (
    <div className="pointer-events-none absolute right-[-28%] top-[88%] hidden sm:block lg:right-[-30%] lg:top-[94%]">
      <Draggable>
        {({ active }) => (
          <Transition
            className="transition-transform duration-1000 [transition-delay:1800ms]"
            from="translate-x-[700px] translate-y-[700px] rotate-[20deg]"
            to="translate-x-0 translate-y-0 rotate-[-16deg]"
          >
            <Sticker
              active={active}
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
    </div>
  )
}
