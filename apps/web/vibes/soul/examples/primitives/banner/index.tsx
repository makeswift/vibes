'use client';

import { useEffect, useState } from 'react';

import { Banner } from '@/vibes/soul/primitives/banner';
import { Button } from '@/vibes/soul/primitives/button';

export default function Preview() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    setHidden(localStorage.getItem('example-banner-hidden-banner') === 'true');
  }, []);

  function handleClick() {
    localStorage.removeItem('example-banner-hidden-banner');
    setHidden(false);
  }

  function handleDismiss() {
    localStorage.setItem('example-banner-hidden-banner', 'true');
    setTimeout(() => {
      setHidden(true);
    }, 500);
  }

  return (
    <>
      {!hidden && (
        <Banner id="example-banner" onDismiss={handleDismiss}>
          Get <strong>15% off</strong> and free shipping with discount code{' '}
          <strong>&quot;welcome&quot;</strong>
        </Banner>
      )}
      {hidden && (
        <div className="mt-10 flex justify-center">
          <Button className="mx-auto" onClick={handleClick}>
            Reset banner
          </Button>
        </div>
      )}
    </>
  );
}
