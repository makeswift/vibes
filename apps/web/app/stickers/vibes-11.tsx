'use client';

import Draggable from '@/components/ui/draggable';
import { Sticker } from '@/components/ui/sticker';
import Transition from '@/components/ui/transition';
import { Vibes11Back, Vibes11Front, Vibes11Shadow } from '@/icons/generated';

export function Vibes11() {
  return (
    <div className="absolute bottom-24 left-1/2 translate-x-[270px]">
      <Draggable>
        {({ active, hover }) => (
          <Transition
            className="transition-transform duration-1000"
            from="translate-x-32 translate-y-[250px] rotate-90"
            to="translate-x-0 translate-y-0 -rotate-6"
          >
            <Sticker
              active={active}
              activePeel={0.3}
              back={<Vibes11Back />}
              front={<Vibes11Front />}
              height={73}
              hover={hover}
              hoverPeel={0.2}
              peelAngle={-95}
              shadow={<Vibes11Shadow />}
              width={203}
            />
          </Transition>
        )}
      </Draggable>
    </div>
  );
}
