'use client';

import Draggable from '@/components/ui/draggable';
import { Sticker } from '@/components/ui/sticker';
import Transition from '@/components/ui/transition';
import { Vibes15Back, Vibes15Front, Vibes15Shadow } from '@/icons/generated';

export function Vibes15() {
  return (
    <div className="absolute bottom-16 left-1/2 -translate-x-[530px]">
      <Draggable>
        {({ active, hover }) => (
          <Transition
            className="transition-transform delay-500 duration-1000"
            from="-translate-x-48 translate-y-[250px] -rotate-180"
            to="translate-x-0 translate-y-0 -rotate-6"
          >
            <Sticker
              active={active}
              activePeel={0.35}
              back={<Vibes15Back />}
              front={<Vibes15Front />}
              height={65}
              hover={hover}
              hoverPeel={0.25}
              peelAngle={-30}
              shadow={<Vibes15Shadow />}
              width={167}
            />
          </Transition>
        )}
      </Draggable>
    </div>
  );
}
