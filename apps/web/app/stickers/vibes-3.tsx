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
              activePeel={0.3}
              back={<Vibes3Back />}
              front={<Vibes3Front />}
              height={69}
              hover={hover}
              hoverPeel={0.2}
              peelAngle={-110}
              shadow={<Vibes3Shadow />}
              width={219}
            />
          </Transition>
        )}
      </Draggable>
    </div>
  );
}
