'use client';

import Draggable from '@/components/ui/draggable';
import { Sticker } from '@/components/ui/sticker';
import Transition from '@/components/ui/transition';
import { Vibes2Back, Vibes2Front, Vibes2Shadow } from '@/icons/generated';

export function Vibes2() {
  return (
    <div className="absolute -bottom-1 left-1/2 translate-x-[372px]">
      <Draggable>
        {({ active, hover }) => (
          <Transition
            className="transition-transform duration-1000"
            from="translate-x-20 translate-y-[250px] -rotate-45"
            to="translate-x-0 translate-y-0 -rotate-12"
          >
            <Sticker
              active={active}
              activePeel={0.35}
              back={<Vibes2Back />}
              front={<Vibes2Front />}
              height={68}
              hover={hover}
              hoverPeel={0.25}
              peelAngle={-110}
              shadow={<Vibes2Shadow />}
              width={176}
            />
          </Transition>
        )}
      </Draggable>
    </div>
  );
}
