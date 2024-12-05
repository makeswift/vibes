'use client';

import Draggable from '@/components/ui/draggable';
import { Sticker } from '@/components/ui/sticker';
import Transition from '@/components/ui/transition';
import { Vibes12Back, Vibes12Front, Vibes12Shadow } from '@/icons/generated';

export function Vibes12() {
  return (
    <div className="absolute bottom-16 left-1/2 -translate-x-4 sm:translate-x-6">
      <Draggable>
        {({ active, hover }) => (
          <Transition
            className="transition-transform delay-200 duration-1000"
            from="translate-x-20 translate-y-[250px] rotate-45"
            to="translate-x-0 translate-y-0 rotate-0"
          >
            <Sticker
              active={active}
              activePeel={0.3}
              back={<Vibes12Back />}
              front={<Vibes12Front />}
              height={103}
              hover={hover}
              hoverPeel={0.2}
              peelAngle={30}
              shadow={<Vibes12Shadow />}
              width={161}
            />
          </Transition>
        )}
      </Draggable>
    </div>
  );
}
