'use client';

import Draggable from '@/components/ui/draggable';
import { Sticker } from '@/components/ui/sticker';
import Transition from '@/components/ui/transition';
import { Vibes9Back, Vibes9Front, Vibes9Shadow } from '@/icons/generated';

export function Vibes9() {
  return (
    <div className="absolute bottom-24 left-1/2 translate-x-[600px]">
      <Draggable>
        {({ active, hover }) => (
          <Transition
            className="transition-transform delay-300 duration-1000"
            from="translate-x-48 translate-y-[250px] rotate-180"
            to="translate-x-0 translate-y-0 rotate-[20deg]"
          >
            <Sticker
              active={active}
              activePeel={0.3}
              back={<Vibes9Back />}
              front={<Vibes9Front />}
              height={73}
              hover={hover}
              hoverPeel={0.2}
              peelAngle={-10}
              shadow={<Vibes9Shadow />}
              width={196}
            />
          </Transition>
        )}
      </Draggable>
    </div>
  );
}
