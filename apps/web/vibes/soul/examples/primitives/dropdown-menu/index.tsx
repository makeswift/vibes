'use client';

import { DropdownMenu } from '@/vibes/soul/primitives/dropdown-menu';
import { Button } from '@/vibes/soul/primitives/button';
import { toast } from '@/vibes/soul/primitives/toaster';
import { EllipsisIcon } from 'lucide-react';

export default function Preview() {
  return (
    <div className="my-8 flex justify-center">
      <DropdownMenu
        className="min-w-36"
        items={[
          {
            label: 'Menu item',
            action: () => toast.success('Menu item clicked!'),
          },
          {
            label: 'Menu item link',
            action: '#',
          },
          {
            label: 'Disabled',
            disabled: true,
          },
          {
            label: 'Destructive',
            variant: 'danger',
            action: () => toast.success('Destructive menu item clicked!'),
          },
        ]}
      >
        <Button shape="circle" size="small" variant="primary">
          <EllipsisIcon size={20} />
        </Button>
      </DropdownMenu>
    </div>
  );
}
