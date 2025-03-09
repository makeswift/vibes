'use client';

import { useEffect, useState } from 'react';

import { Button } from '@/vibes/soul/primitives/button';
import { Discount } from '@/vibes/soul/sections/discount';

export default function Preview() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    setHidden(localStorage.getItem('example-discount-hidden-discount') === 'true');
  }, []);

  function handleClick() {
    localStorage.removeItem('example-discount-hidden-discount');
    setHidden(false);
  }

  function handleDismiss() {
    localStorage.setItem('example-discount-hidden-discount', 'true');
    setTimeout(() => {
      setHidden(true);
    }, 500);
  }

  return (
    <>
      {!hidden && (
        <Discount
          backgroundImage="https://rstr.in/monogram/vibes/-ZKYHmBgOcN"
          discounts={[
            {
              label: '20% off',
              code: 'TAKE20',
            },
            {
              label: '5% off',
              code: 'TAKE5',
            },
            {
              label: '10% off',
              code: 'TAKE10',
            },
            {
              label: '50% off',
              code: 'TAKE50',
            },
            {
              label: '15% off',
              code: 'TAKE15',
            },
          ]}
          id="example-discount"
          onDismiss={handleDismiss}
        />
      )}
      {hidden && (
        <div className="mt-10 flex justify-center">
          <Button className="mx-auto" onClick={handleClick}>
            Reset discount
          </Button>
        </div>
      )}
    </>
  );
}
