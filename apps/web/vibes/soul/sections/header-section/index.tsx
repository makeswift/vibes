'use client'

import { useEffect, useState } from 'react'
import Headroom from 'react-headroom'

import { Banner } from '../../primitives/banner'
import { Navigation } from '../../primitives/navigation'

type Props = {
  navigation: Omit<React.ComponentPropsWithoutRef<typeof Navigation>, 'onDismiss'>
  banner?: React.ComponentPropsWithoutRef<typeof Banner>
}

export function HeaderSection({ navigation, banner }: Props) {
  const [bannerElement, setBannerElement] = useState<HTMLElement | null>(null)
  const [bannerHeight, setBannerHeight] = useState(0)

  useEffect(() => {
    if (bannerElement) {
      setBannerHeight(bannerElement.getBoundingClientRect().height)
    }
  }, [bannerElement])

  return (
    <>
      {banner && <Banner ref={setBannerElement} {...banner} onDismiss={() => setBannerHeight(0)} />}
      <Headroom pinStart={bannerHeight}>
        <div className="p-4">
          <Navigation {...navigation} />
        </div>
      </Headroom>
    </>
  )
}
