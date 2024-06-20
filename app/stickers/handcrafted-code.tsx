'use client'

import { useEffect, useState } from 'react'

import { useScramble } from 'use-scramble'

import Draggable from '@/components/ui/draggable'
import { Sticker } from '@/components/ui/sticker'
import Transition from '@/components/ui/transition'
import { HandcraftedCodeBack, HandcraftedCodeFront, HandcraftedCodeShadow } from '@/icons/generated'

export function HandcraftedCode() {
  const [hovered, setHovered] = useState(false)
  const { ref, replay } = useScramble({
    text: 'Hand crafted code_',
    speed: 0.3,
    tick: 1,
    step: 1,
    scramble: 4,
    seed: 0,
    chance: 1,
    range: [33, 47],
    overdrive: false,
    playOnMount: false,
  })

  useEffect(() => {
    if (hovered) {
      replay()

      const timer = setTimeout(() => {
        setHovered(false)
      }, 1000)

      return () => clearTimeout(timer)
    }
  }, [hovered, replay])

  const handleMouseEnter = () => {
    setHovered(true)
  }

  return (
    <div
      className="pointer-events-none absolute left-[34%] top-[94%] sm:left-[-50%] sm:top-[24%] md:left-[-44%] md:top-[32%] md:z-auto"
      onMouseEnter={handleMouseEnter}
    >
      <Draggable>
        {({ active, hover }) => (
          <Transition
            className="relative transition-transform duration-1000 [transition-delay:1800ms]"
            from="translate-x-[-1000px] translate-y-[-50px] rotate-[-100deg]"
            to="translate-x-0 translate-y-0 rotate-[-12deg]"
          >
            <div
              ref={ref}
              className="absolute left-[92px] top-[75px] z-50 max-w-[120px] scale-[.6] font-docs-mono text-2xl font-bold leading-[27px] text-[#0ACF83] sm:left-[100px] sm:top-[64px] sm:scale-[.8] lg:left-[106px] lg:top-[54px] lg:scale-100 xl:left-[110px] xl:top-[48px] xl:scale-110 2xl:left-[112px] 2xl:top-[44px] 2xl:scale-[1.2]"
            />
            <Sticker
              active={active}
              hover={hover}
              peelAngle={-100}
              width={278}
              height={296}
              front={<HandcraftedCodeFront />}
              back={<HandcraftedCodeBack />}
              shadow={<HandcraftedCodeShadow />}
            />
          </Transition>
        )}
      </Draggable>
    </div>
  )
}
