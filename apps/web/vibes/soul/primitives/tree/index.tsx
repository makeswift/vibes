'use client';

import clsx from 'clsx';
import type { ReactNode } from 'react';

import {
  RovingTabindexRoot,
  TreeNode,
  TreeProvider,
} from '@/vibes/soul/primitives/tree/components';
import type { TreeNodeType } from '@/vibes/soul/primitives/tree/components';

export interface ItemActionContext {
  id: string;
  node: TreeNodeType;
  depth: number;
  hasChildren: boolean;
}

export interface TreeProps {
  className?: string;
  data: TreeNodeType[];
  label: string;
  renderItemActions?: (ctx: ItemActionContext) => ReactNode;
  defaultOpen?: boolean;
}

export function Tree({ className, data, label, renderItemActions, defaultOpen = true }: TreeProps) {
  return (
    <TreeProvider data={data} defaultOpen={defaultOpen}>
      <div className={clsx('h-full w-full overflow-auto', className)} data-tree-scroll-container>
        <RovingTabindexRoot
          aria-label={label}
          aria-multiselectable="false"
          as="ul"
          className="text-foreground w-full min-w-max text-sm font-normal"
          role="tree"
        >
          {data.map((node) => (
            <TreeNode depth={0} key={node.id} node={node} renderItemActions={renderItemActions} />
          ))}
        </RovingTabindexRoot>
      </div>
    </TreeProvider>
  );
}
