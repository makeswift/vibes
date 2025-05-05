'use client';

import Draggable from '@/components/ui/draggable';
import { Sticker } from '@/components/ui/sticker';
import Transition from '@/components/ui/transition';
import { ReactjsBack, ReactjsFront, ReactjsShadow } from '@/icons/generated';

export function Reactjs() {
  return (
    <div className="absolute -bottom-20 -left-16 z-10 origin-right scale-100 sm:top-96 sm:-right-12 sm:left-auto sm:scale-110 md:top-auto md:right-auto md:bottom-6 md:-left-48 md:scale-75 xl:bottom-16 xl:-left-36 xl:scale-100">
      <Draggable>
        {({ active, hover }) => (
          <Transition
            className="transition-transform [transition-delay:700ms] duration-1000"
            from="translate-x-[-1000px] translate-y-[100px] rotate-[-270deg]"
            to="translate-x-0 translate-y-0 rotate-12"
          >
            <Sticker
              active={active}
              activePeel={0.35}
              back={<ReactjsBack />}
              front={<ReactjsFront />}
              height={207}
              hover={hover}
              hoverPeel={0.25}
              peelAngle={-0}
              shadow={<ReactjsShadow />}
              width={229}
            />
          </Transition>
        )}
      </Draggable>
    </div>
  );
}
