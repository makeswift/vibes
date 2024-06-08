'use client'

import Draggable from '@/components/ui/draggable'
import { Sticker } from '@/components/ui/sticker'
import Transition from '@/components/ui/transition'
import { HandcraftedCodeBack, HandcraftedCodeFront, HandcraftedCodeShadow } from '@/icons/generated'

export function HandcraftedCode() {
  return (
    <div className="-z-1 pointer-events-none absolute left-[34%] top-[94%] sm:left-[-50%] sm:top-[24%] md:left-[-44%] md:top-[32%] md:z-auto">
      <Draggable>
        {({ active }) => (
          <Transition
            className="transition-transform duration-1000 [transition-delay:1800ms]"
            from="translate-x-[-1000px] translate-y-[-50px] rotate-[-100deg]"
            to="translate-x-0 translate-y-0 rotate-[-12deg]"
          >
            <Sticker
              active={active}
              peelAngle={-100}
              width={278}
              height={296}
              front={<HandcraftedCodeFront />}
              back={<HandcraftedCodeBack />}
              shadow={<HandcraftedCodeShadow />}
            />
          </Transition>
        )}
      </Draggable>
    </div>
  )
}
