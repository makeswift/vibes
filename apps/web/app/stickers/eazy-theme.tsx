'use client';

import Draggable from '@/components/ui/draggable';
import { Sticker } from '@/components/ui/sticker';
import Transition from '@/components/ui/transition';
import { ThemesBack, ThemesFront, ThemesShadow } from '@/icons/generated';

export function EazyTheme() {
  return (
    <Draggable className="relative z-10 mx-12 -mt-16">
      {({ active, hover }) => (
        <Transition
          className="transition-transform duration-1000"
          from="translate-x-[700px] md:translate-x-[1600px] -translate-y-20 rotate-[270deg]"
          to="translate-x-0 translate-y-0 rotate-[-16deg]"
        >
          <Sticker
            active={active}
            back={<ThemesBack />}
            front={<ThemesFront />}
            height={382}
            hover={hover}
            hoverPeel={0.2}
            peelAngle={15}
            shadow={<ThemesShadow />}
            width={168}
          />
        </Transition>
      )}
    </Draggable>
  );
}
