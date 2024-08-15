'use client'

import Button from '@/vibes/2px/components/button'
import ScratchToRevealSection from '@/vibes/2px/components/scratch-to-reveal-section'

export const childrenToReveal = (
  <div className="flex h-[500px] flex-col items-center justify-center gap-12 bg-background text-center font-body text-6xl font-medium leading-[4rem] -tracking-[0.0675rem] text-foreground">
    <p>
      Our Molten stool in the perfect piece for your entrance hall where guests will stub their toes
      on it, resulting in a general panic and a hospital trip.
    </p>
    <Button onClick={() => console.log('clicked')}>Button</Button>
  </div>
)

export default function Preview() {
  return (
    <div className="flex min-h-48 items-center justify-center bg-white @container">
      <ScratchToRevealSection
        backgroundChildren={childrenToReveal}
        coverImage={{
          url: '/2px/mirror-chair-layer.png',
          alt: 'A mirror chair',
        }}
      />
    </div>
  )
}
