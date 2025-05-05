'use client';

import { Button } from '@/vibes/soul/primitives/button';
import { toast } from '@/vibes/soul/primitives/toaster';

export default function Preview() {
  return (
    <div className="bg-background @container p-8">
      <div className="mx-auto flex max-w-screen-md flex-col items-center gap-8">
        <Button onClick={() => toast.success('Success')} variant="primary">
          Success Toast
        </Button>
        <Button onClick={() => toast.error('Error')} variant="primary">
          Error Toast
        </Button>
        <Button onClick={() => toast.warning('Warning')} variant="primary">
          Warning Toast
        </Button>
        <Button onClick={() => toast.info('Info')} variant="primary">
          Info Toast
        </Button>
        <Button
          onClick={() =>
            toast.success('Success', {
              description: 'Description of toast',
              action: { label: 'Undo', onClick: () => console.log('undo') },
            })
          }
          variant="primary"
        >
          Toast with Options
        </Button>
      </div>
    </div>
  );
}
