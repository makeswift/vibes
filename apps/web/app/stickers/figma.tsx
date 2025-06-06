'use client';

import Draggable from '@/components/ui/draggable';
import { Sticker } from '@/components/ui/sticker';
import Transition from '@/components/ui/transition';
import { FigmaBack, FigmaFront, FigmaShadow } from '@/icons/generated';

export function Figma() {
  return (
    <Draggable className="relative z-10 mt-6 ml-14">
      {({ active, hover }) => (
        <Transition
          className="transition-transform duration-1000"
          from="translate-x-[-700px] md:translate-x-[1600px] translate-y-[250px] rotate-[-210deg]"
          to="translate-x-0 translate-y-0 -rotate-12"
        >
          <Sticker
            active={active}
            back={<FigmaBack />}
            front={<FigmaFront />}
            height={268}
            hover={hover}
            peelAngle={0}
            shadow={<FigmaShadow />}
            width={168}
          />
        </Transition>
      )}
    </Draggable>
  );
}
