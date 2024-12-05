'use client';

import Draggable from '@/components/ui/draggable';
import { Sticker } from '@/components/ui/sticker';
import Transition from '@/components/ui/transition';
import { FigmaBack, FigmaFront, FigmaShadow } from '@/icons/generated';

export function Figma() {
  return (
    <Draggable className="relative z-10 ml-14 mt-6">
      {({ active, hover }) => (
        <Transition
          className="transition-transform duration-1000"
          from="translate-x-[-700px] md:translate-x-[1600px] translate-y-[250px] rotate-[-210deg]"
          to="translate-x-0 translate-y-0 -rotate-12"
        >
          <Sticker
            active={active}
            hover={hover}
            peelAngle={0}
            width={168}
            height={268}
            front={<FigmaFront />}
            back={<FigmaBack />}
            shadow={<FigmaShadow />}
          />
        </Transition>
      )}
    </Draggable>
  );
}
