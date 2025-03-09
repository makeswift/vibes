'use client';

import { ComponentPropsWithoutRef, useEffect, useState } from 'react';
import Headroom from 'react-headroom';

import { Banner } from '@/vibes/soul/primitives/banner';
import { Navigation } from '@/vibes/soul/primitives/navigation';

export interface HeaderProps {
  navigation: ComponentPropsWithoutRef<typeof Navigation>;
  banner?: ComponentPropsWithoutRef<typeof Banner>;
}

export function Header({ navigation, banner }: HeaderProps) {
  const [bannerElement, setBannerElement] = useState<HTMLElement | null>(null);
  const [bannerHeight, setBannerHeight] = useState(0);
  const [isFloating, setIsFloating] = useState(false);

  useEffect(() => {
    if (!bannerElement) return;

    const resizeObserver = new ResizeObserver((entries: ResizeObserverEntry[]) => {
      entries.forEach((entry) => {
        setBannerHeight(entry.contentRect.height);
      });
    });

    resizeObserver.observe(bannerElement);

    return () => {
      resizeObserver.disconnect();
    };
  }, [bannerElement]);

  return (
    <div>
      {banner && <Banner ref={setBannerElement} {...banner} />}
      <Headroom
        onUnfix={() => setIsFloating(false)}
        onUnpin={() => setIsFloating(true)}
        pinStart={bannerHeight}
      >
        <div className="p-2">
          <Navigation {...navigation} isFloating={isFloating} />
        </div>
      </Headroom>
    </div>
  );
}
