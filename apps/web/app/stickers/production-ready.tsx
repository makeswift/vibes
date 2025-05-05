'use client';

import Draggable from '@/components/ui/draggable';
import { Sticker } from '@/components/ui/sticker';
import Transition from '@/components/ui/transition';
import {
  ProductionReadyBack,
  ProductionReadyFront,
  ProductionReadyShadow,
} from '@/icons/generated';

export function ProductionReady() {
  return (
    <Draggable className="relative z-10 -mt-6 -ml-6">
      {({ active, hover }) => (
        <Transition
          className="transition-transform duration-1000"
          from="translate-x-[600px] md:translate-x-[1600px] translate-y-0 rotate-[120deg]"
          to="translate-x-0 translate-y-0 rotate-0"
        >
          <Sticker
            active={active}
            back={<ProductionReadyBack />}
            front={<ProductionReadyFront />}
            height={284}
            hover={hover}
            hoverPeel={0.15}
            shadow={<ProductionReadyShadow />}
            width={284}
          />
        </Transition>
      )}
    </Draggable>
  );
}
