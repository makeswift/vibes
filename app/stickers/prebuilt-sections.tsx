'use client'

import Draggable from '@/components/ui/draggable'
import { Sticker } from '@/components/ui/sticker'
import Transition from '@/components/ui/transition'
import {
  PrebuiltSectionsBack,
  PrebuiltSectionsFront,
  PrebuiltSectionsShadow,
} from '@/icons/generated'

export function PrebuiltSections() {
  return (
    <div className="pointer-events-none absolute right-[-24%] top-[144%] hidden sm:block lg:right-[-16%] lg:top-[138%]">
      <Draggable>
        {({ active }) => (
          <Transition
            className="transition-transform duration-1000 [transition-delay:1800ms]"
            from="translate-x-[450px] translate-y-[700px] rotate-[200deg]"
            to="translate-x-0 translate-y-0 rotate-[-4deg]"
          >
            <Sticker
              active={active}
              peelAngle={-100}
              hoverPeel={0.15}
              width={369}
              height={138}
              front={<PrebuiltSectionsFront />}
              back={<PrebuiltSectionsBack />}
              shadow={<PrebuiltSectionsShadow />}
            />
          </Transition>
        )}
      </Draggable>
    </div>
  )
}
