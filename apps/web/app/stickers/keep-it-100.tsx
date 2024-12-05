'use client';

import Draggable from '@/components/ui/draggable';
import { Sticker } from '@/components/ui/sticker';
import Transition from '@/components/ui/transition';
import { KeepIt100Back, KeepIt100Front, KeepIt100Shadow } from '@/icons/generated';

export function KeepIt100() {
  return (
    <Draggable className="relative z-10 -mt-6 mr-8">
      {({ active, hover }) => (
        <Transition
          className="transition-transform duration-1000"
          from="translate-x-[-700px] md:translate-x-[1600px] translate-y-0 rotate-[180deg]"
          to="translate-x-0 translate-y-0 rotate-12"
        >
          <Sticker
            active={active}
            activePeel={0.3}
            back={<KeepIt100Back />}
            front={<KeepIt100Front />}
            height={289}
            hover={hover}
            hoverPeel={0.2}
            peelAngle={15}
            shadow={<KeepIt100Shadow />}
            width={258}
          />
        </Transition>
      )}
    </Draggable>
  );
}
