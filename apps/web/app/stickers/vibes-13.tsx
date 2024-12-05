'use client';

import Draggable from '@/components/ui/draggable';
import { Sticker } from '@/components/ui/sticker';
import Transition from '@/components/ui/transition';
import { Vibes13Back, Vibes13Front, Vibes13Shadow } from '@/icons/generated';

export function Vibes13() {
  return (
    <div className="absolute bottom-16 left-1/2 -translate-x-60">
      <Draggable>
        {({ active, hover }) => (
          <Transition
            className="transition-transform duration-1000"
            from="-translate-x-24 translate-y-[250px] -rotate-180"
            to="translate-x-0 translate-y-0 rotate-3"
          >
            <Sticker
              active={active}
              activePeel={0.3}
              back={<Vibes13Back />}
              front={<Vibes13Front />}
              height={80}
              hover={hover}
              hoverPeel={0.2}
              peelAngle={-75}
              shadow={<Vibes13Shadow />}
              width={227}
            />
          </Transition>
        )}
      </Draggable>
    </div>
  );
}
