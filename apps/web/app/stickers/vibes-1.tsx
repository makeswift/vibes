'use client';

import Draggable from '@/components/ui/draggable';
import { Sticker } from '@/components/ui/sticker';
import Transition from '@/components/ui/transition';
import { Vibes1Back, Vibes1Front, Vibes1Shadow } from '@/icons/generated';

export function Vibes1() {
  return (
    <div className="absolute bottom-5 left-1/2 translate-x-[570px]">
      <Draggable>
        {({ active, hover }) => (
          <Transition
            className="transition-transform duration-1000"
            from="translate-x-40 translate-y-[250px] rotate-90"
            to="translate-x-0 translate-y-0 -rotate-[4deg]"
          >
            <Sticker
              active={active}
              activePeel={0.3}
              back={<Vibes1Back />}
              front={<Vibes1Front />}
              height={69}
              hover={hover}
              hoverPeel={0.2}
              peelAngle={-40}
              shadow={<Vibes1Shadow />}
              width={129}
            />
          </Transition>
        )}
      </Draggable>
    </div>
  );
}
