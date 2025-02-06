'use client';

import { Button } from '@/vibes/soul/primitives/button';
import { toast } from '@/vibes/soul/primitives/toaster';

export default function Preview() {
  return (
    <div className="grid h-screen place-content-center gap-x-4 gap-y-6">
      <Button onClick={() => toast.success('Success')} text="Success" variant="primary" />
      <Button onClick={() => toast.error('Error')} text="Error" variant="primary" />
      <Button onClick={() => toast.warning('Warning')} text="Warning" variant="primary" />
      <Button onClick={() => toast.info('Info')} text="Info" variant="primary" />
      <Button
        onClick={() =>
          toast.success('Success', {
            description: 'Description of toast',
            action: { text: 'Undo', onClick: () => console.log('undo') },
          })
        }
        text="Options"
        variant="primary"
      />
    </div>
  );
}
