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
              activePeel={0.3}
              back={<Vibes7Back />}
              front={<Vibes7Front />}
              height={67}
              hover={hover}
              hoverPeel={0.2}
              peelAngle={-110}
              shadow={<Vibes7Shadow />}
              width={212}
            />
          </Transition>
        )}
      </Draggable>
    </div>
  );
}
