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
              hover={hover}
              peelAngle={-10}
              hoverPeel={0.2}
              activePeel={0.3}
              width={196}
              height={73}
              front={<Vibes9Front />}
              back={<Vibes9Back />}
              shadow={<Vibes9Shadow />}
            />
          </Transition>
        )}
      </Draggable>
    </div>
  );
}
