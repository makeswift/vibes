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
    <div className="absolute -right-8 -bottom-16 z-10 ml-4 origin-bottom-left scale-100 sm:top-20 md:top-auto md:right-auto md:-bottom-5 md:left-full md:scale-75 xl:scale-100">
      <Draggable>
        {({ active, hover }) => (
          <Transition
            className="transition-transform [transition-delay:740ms] duration-1000"
            from="translate-x-[200px] translate-y-[-1000px] rotate-[-270deg]"
            to="translate-x-0 translate-y-0 rotate-[-20deg] md:-rotate-12"
          >
            <Sticker
              active={active}
              back={<HandcraftedCodeBack />}
              front={<HandcraftedCodeFront />}
              height={242}
              hover={hover}
              peelAngle={-100}
              shadow={<HandcraftedCodeShadow />}
              width={227}
            />
          </Transition>
        )}
      </Draggable>
    </div>
  );
}
