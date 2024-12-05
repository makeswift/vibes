'use client';

import Draggable from '@/components/ui/draggable';
import { Sticker } from '@/components/ui/sticker';
import Transition from '@/components/ui/transition';
import { Vibes4Back, Vibes4Front, Vibes4Shadow } from '@/icons/generated';

export function Vibes4() {
  return (
    <div className="absolute bottom-0 left-1/2 translate-x-6 sm:translate-x-20">
      <Draggable>
        {({ active, hover }) => (
          <Transition
            className="transition-transform delay-500 duration-700"
            from="translate-x-12 translate-y-[250px] rotate-90"
            to="translate-x-0 translate-y-6 sm:translate-y-2 rotate-[16deg]"
          >
            <Sticker
              active={active}
              activePeel={0.3}
              back={<Vibes4Back />}
              front={<Vibes4Front />}
              height={76}
              hover={hover}
              hoverPeel={0.2}
              peelAngle={-70}
              shadow={<Vibes4Shadow />}
              width={172}
            />
          </Transition>
        )}
      </Draggable>
    </div>
  );
}
