'use client';

import { EllipsisIcon, Trash } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

import { Button } from '@/vibes/soul/primitives/button';
import { DropdownMenu } from '@/vibes/soul/primitives/dropdown-menu';
import type { DropdownMenuProps } from '@/vibes/soul/primitives/dropdown-menu';
import { toast } from '@/vibes/soul/primitives/toaster';

export default function Preview() {
  const [showStatusBar, setShowStatusBar] = useState(true);
  const [showActivityBar, setShowActivityBar] = useState(false);
  const [showPanel, setShowPanel] = useState(false);

  const items: DropdownMenuProps['items'] = [
    {
      type: 'item',
      props: { children: 'Menu item', onSelect: () => toast.success('Menu item clicked!') },
    },
    { type: 'separator' },
    {
      type: 'checkbox',
      props: {
        children: 'Status Bar',
        checked: showStatusBar,
        onCheckedChange: setShowStatusBar,
      },
    },
    {
      type: 'checkbox',
      props: {
        children: 'Activity Bar',
        checked: showActivityBar,
        onCheckedChange: setShowActivityBar,
        disabled: true,
      },
    },
    {
      type: 'checkbox',
      props: {
        children: 'Panel',
        checked: showPanel,
        onCheckedChange: setShowPanel,
      },
    },
    { type: 'separator' },
    {
      type: 'group',
      items: [
        { type: 'item', props: { children: <Link href="#">Menu item link</Link> } },
        { type: 'item', props: { children: 'Disabled item', disabled: true } },
        {
          type: 'sub',
          trigger: { props: { children: 'Invite users' } },
          content: {
            items: [
              { type: 'item', props: { children: 'Email' } },
              { type: 'item', props: { children: 'Message' } },
              { type: 'separator' },
              { type: 'item', props: { children: 'Share' } },
            ],
          },
        },
      ],
    },
    { type: 'separator' },
    {
      type: 'item',
      props: {
        children: 'Destructive item',
        variant: 'danger',
        icon: <Trash absoluteStrokeWidth size={16} strokeWidth={1.5} />,
        onSelect: () => toast.error('Destructive menu item clicked!'),
      },
    },
  ];

  return (
    <div className="my-8 flex justify-center">
      <DropdownMenu
        items={items}
        label="Quick Actions"
        trigger={
          <Button shape="circle" size="small" variant="tertiary">
            <EllipsisIcon size={20} />
          </Button>
        }
      />
    </div>
  );
}
