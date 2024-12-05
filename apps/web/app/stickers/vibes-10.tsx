'use client';

import Draggable from '@/components/ui/draggable';
import { Sticker } from '@/components/ui/sticker';
import Transition from '@/components/ui/transition';
import { Vibes10Back, Vibes10Front, Vibes10Shadow } from '@/icons/generated';

export function Vibes10() {
  return (
    <div className="absolute bottom-16 left-1/2 translate-x-[450px]">
      <Draggable>
        {({ active, hover }) => (
          <Transition
            className="transition-transform delay-200 duration-1000"
            from="translate-x-40 translate-y-[250px] rotate-90"
            to="translate-x-0 translate-y-0 rotate-[8deg]"
          >
            <Sticker
              active={active}
              hover={hover}
              peelAngle={20}
              hoverPeel={0.2}
              activePeel={0.3}
              width={149}
              height={82}
              front={<Vibes10Front />}
              back={<Vibes10Back />}
              shadow={<Vibes10Shadow />}
            />
          </Transition>
        )}
      </Draggable>
    </div>
  );
}
