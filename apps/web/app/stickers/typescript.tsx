'use client'

import Draggable from '@/components/ui/draggable'
import { Sticker } from '@/components/ui/sticker'
import Transition from '@/components/ui/transition'
import { TypescriptBack, TypescriptFront, TypescriptShadow } from '@/icons/generated'

export function Typescript() {
  return (
    <div className="pointer-events-none absolute right-20 top-10">
      <Draggable>
        {({ active, hover }) => (
          <Transition
            className="transition-transform duration-700 [transition-delay:2300ms]"
            from="translate-x-[1000px] translate-y-[-100px] translate-y-[20px] rotate-[180deg]"
            to="translate-x-0 translate-y-0 rotate-[8deg]"
          >
            <Sticker
              active={active}
              hover={hover}
              peelAngle={-100}
              hoverPeel={0.15}
              width={200}
              height={200}
              front={<TypescriptFront />}
              back={<TypescriptBack />}
              shadow={<TypescriptShadow />}
            />
          </Transition>
        )}
      </Draggable>
    </div>
  )
}
