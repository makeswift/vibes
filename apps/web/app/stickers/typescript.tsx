'use client'

import Draggable from '@/components/ui/draggable'
import { Sticker } from '@/components/ui/sticker'
import Transition from '@/components/ui/transition'
import { TypescriptBack, TypescriptFront, TypescriptShadow } from '@/icons/generated'

export function Typescript() {
  return (
    <Draggable className="relative z-10 -mt-5 ml-8">
      {({ active, hover }) => (
        <Transition
          className="transition-transform duration-1000"
          from="translate-x-[700px] md:translate-x-[1600px] translate-y-[-200px] rotate-[480deg]"
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
  )
}
