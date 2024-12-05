'use client';

import { Button } from '@/vibes/soul/primitives/button';
import { toast } from '@/vibes/soul/primitives/toaster';

export default function Preview() {
  return (
    <div className="grid h-screen place-content-center gap-x-4 gap-y-6">
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
  );
}
