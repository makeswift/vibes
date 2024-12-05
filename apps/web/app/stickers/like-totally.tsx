'use client';

import Draggable from '@/components/ui/draggable';
import { Sticker } from '@/components/ui/sticker';
import Transition from '@/components/ui/transition';
import { TotallyBack, TotallyFront, TotallyShadow } from '@/icons/generated';

export function LikeTotally() {
  return (
    <Draggable className="relative z-10 -mt-1">
      {({ active, hover }) => (
        <Transition
          className="transition-transform duration-1000"
          from="translate-x-[-600px] md:translate-x-[1600px] translate-y-[200px] rotate-[-80deg]"
          to="translate-x-0 translate-y-0 rotate-12"
        >
          <Sticker
            active={active}
            hover={hover}
            peelAngle={-14}
            hoverPeel={0.2}
            activePeel={0.3}
            width={340}
            height={172}
            front={<TotallyFront />}
            back={<TotallyBack />}
            shadow={<TotallyShadow />}
          />
        </Transition>
      )}
    </Draggable>
  );
}
