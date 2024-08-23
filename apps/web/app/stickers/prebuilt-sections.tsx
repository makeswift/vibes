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
    <div className="pointer-events-none absolute -left-8 top-1/4">
      <Draggable>
        {({ active, hover }) => (
          <Transition
            className="transition-transform duration-1000 [transition-delay:1800ms]"
            from="translate-x-[450px] translate-y-[700px] rotate-[200deg]"
            to="translate-x-0 translate-y-0 rotate-[-12deg]"
          >
            <Sticker
              active={active}
              hover={hover}
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
