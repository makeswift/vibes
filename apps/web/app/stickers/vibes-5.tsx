'use client';

import Draggable from '@/components/ui/draggable';
import { Sticker } from '@/components/ui/sticker';
import Transition from '@/components/ui/transition';
import { Vibes5Back, Vibes5Front, Vibes5Shadow } from '@/icons/generated';

export function Vibes5() {
  return (
    <div className="absolute bottom-7 left-1/2 -translate-x-1/2">
      <Draggable>
        {({ active, hover }) => (
          <Transition
            className="transition-transform duration-1000"
            from="translate-x-0 translate-y-[250px] -rotate-180"
            to="translate-x-0 translate-y-0 -rotate-12"
          >
            <Sticker
              active={active}
              hover={hover}
              peelAngle={-40}
              hoverPeel={0.2}
              activePeel={0.3}
              width={228}
              height={67}
              front={<Vibes5Front />}
              back={<Vibes5Back />}
              shadow={<Vibes5Shadow />}
            />
          </Transition>
        )}
      </Draggable>
    </div>
  );
}
