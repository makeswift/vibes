'use client';

import Draggable from '@/components/ui/draggable';
import { Sticker } from '@/components/ui/sticker';
import Transition from '@/components/ui/transition';
import { Vibes7Back, Vibes7Front, Vibes7Shadow } from '@/icons/generated';

export function Vibes7() {
  return (
    <div className="absolute bottom-3 left-1/2 -translate-x-[590px]">
      <Draggable>
        {({ active, hover }) => (
          <Transition
            className="transition-transform duration-1000"
            from="-translate-x-32 translate-y-[250px] -rotate-90"
            to="translate-x-0 translate-y-0 rotate-6"
          >
            <Sticker
              active={active}
              hover={hover}
              peelAngle={-110}
              hoverPeel={0.2}
              activePeel={0.3}
              width={212}
              height={67}
              front={<Vibes7Front />}
              back={<Vibes7Back />}
              shadow={<Vibes7Shadow />}
            />
          </Transition>
        )}
      </Draggable>
    </div>
  );
}
