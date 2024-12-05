'use client';

import Draggable from '@/components/ui/draggable';
import { Sticker } from '@/components/ui/sticker';
import Transition from '@/components/ui/transition';
import { Vibes3Back, Vibes3Front, Vibes3Shadow } from '@/icons/generated';

export function Vibes3() {
  return (
    <div className="absolute bottom-8 left-1/2 translate-x-28 sm:translate-x-40">
      <Draggable>
        {({ active, hover }) => (
          <Transition
            className="transition-transform duration-1000"
            from="translate-x-20 translate-y-[250px] rotate-180"
            to="translate-x-0 translate-y-0 rotate-[4deg]"
          >
            <Sticker
              active={active}
              hover={hover}
              peelAngle={-110}
              hoverPeel={0.2}
              activePeel={0.3}
              width={219}
              height={69}
              front={<Vibes3Front />}
              back={<Vibes3Back />}
              shadow={<Vibes3Shadow />}
            />
          </Transition>
        )}
      </Draggable>
    </div>
  );
}
