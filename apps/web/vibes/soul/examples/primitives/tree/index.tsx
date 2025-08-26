'use client';

import { Badge } from '@/vibes/soul/primitives/badge';
import { Tree, TreeNode } from '@/vibes/soul/primitives/tree';

const exampleData: TreeNode = {
  label: 'Root',
  children: [
    { label: 'Child 1' },
    {
      label: (
        <>
          Child 2 <Badge shape="pill">New</Badge>
        </>
      ),
      children: [{ label: 'Grandchild 1' }, { label: 'Grandchild 2' }],
    },
    {
      label: 'Child 3',
      children: [{ label: 'Grandchild 3' }, { label: 'Grandchild 4' }],
    },
  ],
};

export default function Preview() {
  return (
    <div className="bg-background mx-auto max-w-3xl px-6 py-8">
      <Tree data={exampleData} defaultOpen />
    </div>
  );
}
