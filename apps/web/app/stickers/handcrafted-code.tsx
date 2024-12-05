'use client';

import Draggable from '@/components/ui/draggable';
import { Sticker } from '@/components/ui/sticker';
import Transition from '@/components/ui/transition';
import {
  HandcraftedCodeBack,
  HandcraftedCodeFront,
  HandcraftedCodeShadow,
} from '@/icons/generated';

export function HandcraftedCode() {
  return (
    <div className="absolute -bottom-16 -right-8 z-10 ml-4 origin-bottom-left scale-100 sm:top-20 md:-bottom-5 md:left-full md:right-auto md:top-auto md:scale-75 xl:scale-100">
      <Draggable>
        {({ active, hover }) => (
          <Transition
            className="transition-transform duration-1000 [transition-delay:740ms]"
            from="translate-x-[200px] translate-y-[-1000px] rotate-[-270deg]"
            to="translate-x-0 translate-y-0 rotate-[-20deg] md:-rotate-12"
          >
            <Sticker
              active={active}
              hover={hover}
              peelAngle={-100}
              width={227}
              height={242}
              front={<HandcraftedCodeFront />}
              back={<HandcraftedCodeBack />}
              shadow={<HandcraftedCodeShadow />}
            />
          </Transition>
        )}
      </Draggable>
    </div>
  );
}
