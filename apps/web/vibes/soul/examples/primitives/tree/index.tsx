'use client';

import { EllipsisIcon } from 'lucide-react';

import { Button } from '@/vibes/soul/primitives/button';
import { DropdownMenu } from '@/vibes/soul/primitives/dropdown-menu';
import { Tree } from '@/vibes/soul/primitives/tree';

import { data } from './data';

export default function Preview() {
  return (
    <div className="bg-background px-6 py-8">
      <div className="mx-auto max-w-md">
        <div className="border-contrast-100 h-96 overflow-hidden rounded-lg border p-4">
          <Tree
            data={data}
            label="Product Categories"
            renderItemActions={({ id }) => (
              <DropdownMenu
                items={[
                  {
                    type: 'item',
                    props: {
                      children: 'Rename',
                      onSelect: () => console.log('Rename', id),
                    },
                  },
                  {
                    type: 'item',
                    props: {
                      children: 'Delete',
                      onSelect: () => console.log('Delete', id),
                    },
                  },
                ]}
                label="Actions"
                trigger={
                  <Button shape="circle" size="x-small" variant="ghost">
                    <EllipsisIcon size={16} />
                  </Button>
                }
              />
            )}
          />
        </div>
      </div>
    </div>
  );
}
