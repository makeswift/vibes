'use client';

import Draggable from '@/components/ui/draggable';
import { Sticker } from '@/components/ui/sticker';
import Transition from '@/components/ui/transition';
import {
  PrebuiltSectionsBack,
  PrebuiltSectionsFront,
  PrebuiltSectionsShadow,
} from '@/icons/generated';

export function PrebuiltSections() {
  return (
    <Draggable className="relative z-10 mb-6 ml-2">
      {({ active, hover }) => (
        <Transition
          className="transition-transform duration-1000"
          from="translate-x-[600px] md:translate-x-[1600px] translate-y-[100px] rotate-[200deg]"
          to="translate-x-0 translate-y-0 rotate-[-12deg]"
        >
          <Sticker
            active={active}
            back={<PrebuiltSectionsBack />}
            front={<PrebuiltSectionsFront />}
            height={138}
            hover={hover}
            hoverPeel={0.15}
            peelAngle={-100}
            shadow={<PrebuiltSectionsShadow />}
            width={369}
          />
        </Transition>
      )}
    </Draggable>
  );
}
