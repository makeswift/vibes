'use client';

import Draggable from '@/components/ui/draggable';
import { Sticker } from '@/components/ui/sticker';
import Transition from '@/components/ui/transition';
import { Vibes16Back, Vibes16Front, Vibes16Shadow } from '@/icons/generated';

export function Vibes16() {
  return (
    <div className="absolute bottom-28 left-1/2 -translate-x-[750px]">
      <Draggable>
        {({ active, hover }) => (
          <Transition
            className="transition-transform duration-1000"
            from="-translate-x-48 translate-y-[250px] -rotate-90"
            to="translate-x-0 translate-y-0 -rotate-6"
          >
            <Sticker
              active={active}
              activePeel={0.3}
              back={<Vibes16Back />}
              front={<Vibes16Front />}
              height={77}
              hover={hover}
              hoverPeel={0.2}
              peelAngle={-130}
              shadow={<Vibes16Shadow />}
              width={230}
            />
          </Transition>
        )}
      </Draggable>
    </div>
  );
}
