'use client';

import { Button } from '@/vibes/soul/primitives/button';
import { toast } from '@/vibes/soul/primitives/toaster';

export default function Preview() {
  return (
    <div className="bg-background p-8 @container">
      <div className="mx-auto flex max-w-screen-md flex-col items-center gap-8">
        <Button onClick={() => toast.success('Success')} variant="primary">
          Success
        </Button>
        <Button onClick={() => toast.error('Error')} variant="primary">
          Error
        </Button>
        <Button onClick={() => toast.warning('Warning')} variant="primary">
          Warning
        </Button>
        <Button onClick={() => toast.info('Info')} variant="primary">
          Info
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
          Options
        </Button>
      </div>
    </div>
  );
}
