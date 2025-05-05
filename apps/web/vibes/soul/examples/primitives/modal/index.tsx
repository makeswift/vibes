'use client';

import { useState } from 'react';

import { Button } from '@/vibes/soul/primitives/button';
import { Modal } from '@/vibes/soul/primitives/modal';

export default function Preview() {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div>
      <div className="bg-background @container p-8">
        <div className="mx-auto flex max-w-screen-md flex-col items-center gap-8 @md:flex-row">
          <Modal
            isOpen={isOpen}
            setOpen={setIsOpen}
            title="Example modal"
            trigger={<Button size="medium">Open Modal</Button>}
          >
            <p className="font-body text-contrast-500 text-lg">Put your content here!</p>
          </Modal>
        </div>
      </div>
    </div>
  );
}
