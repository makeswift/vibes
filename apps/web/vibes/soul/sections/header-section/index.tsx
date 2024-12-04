'use client'

import { forwardRef, useState } from 'react'
import Headroom from 'react-headroom'

import { Banner } from '@/vibes/soul/primitives/banner'
import { Navigation } from '@/vibes/soul/primitives/navigation'

interface Props {
  navigation: Omit<React.ComponentPropsWithoutRef<typeof Navigation>, 'onDismiss'>
  banner?: React.ComponentPropsWithoutRef<typeof Banner>
}

export const HeaderSection = forwardRef<React.ComponentRef<'div'>, Props>(
  ({ navigation, banner }, ref) => {
    const [bannerElement, setBannerElement] = useState<HTMLElement | null>(null)
    const [isFloating, setIsFloating] = useState(false)

    return (
      <div ref={ref}>
        {banner && <Banner ref={setBannerElement} {...banner} />}
        <Headroom
          pinStart={bannerElement?.getBoundingClientRect().height}
          onUnpin={() => setIsFloating(true)}
          onUnfix={() => setIsFloating(false)}
        >
          <div className="p-2">
            <Navigation {...navigation} isFloating={isFloating} />
          </div>
        </Headroom>
      </div>
    )
  }
)

HeaderSection.displayName = 'HeaderSection'
