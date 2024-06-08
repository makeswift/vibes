'use client'

import Draggable from '@/components/ui/draggable'
import { Sticker } from '@/components/ui/sticker'
import Transition from '@/components/ui/transition'
import { ProductionReadyBack, ProductionReadyFront, ProductionReadyShadow } from '@/icons/generated'

export function ProductionReady() {
  return (
    <div className="pointer-events-none absolute right-[-22%] top-[125%] sm:right-[-38%] sm:top-[-25%] md:right-[-34%] md:top-[-16%]">
      <Draggable>
        {({ active }) => (
          <Transition
            className="transition-transform duration-1000 [transition-delay:1800ms]"
            from="translate-x-[600px] translate-y-[-700px] rotate-[120deg]"
            to="translate-x-0 translate-y-0 rotate-0"
          >
            <Sticker
              active={active}
              hoverPeel={0.15}
              width={284}
              height={284}
              front={<ProductionReadyFront />}
              back={<ProductionReadyBack />}
              shadow={<ProductionReadyShadow />}
            />
          </Transition>
        )}
      </Draggable>
    </div>
  )
}
