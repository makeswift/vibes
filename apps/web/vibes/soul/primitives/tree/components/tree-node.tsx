'use client';

import clsx from 'clsx';
import { ChevronRightIcon } from 'lucide-react';
import type { KeyboardEvent } from 'react';
import type { ReactNode } from 'react';

import {
  getFirstFocusableId,
  getLastFocusableId,
  getNextFocusableId,
  getNextFocusableIdByTypeahead,
  getParentFocusableId,
  getPrevFocusableId,
  useRovingTabindex,
} from '@/vibes/soul/primitives/tree/components/roving-tab-index';
import type { RovingTabindexItem } from '@/vibes/soul/primitives/tree/components/roving-tab-index';
import { useTree } from '@/vibes/soul/primitives/tree/components/tree-provider';

export interface TreeNodeType {
  id: string;
  name: string;
  children?: TreeNodeType[];
}

export interface TreeNodeProps {
  node: TreeNodeType;
  depth?: number;
  renderItemActions?: (ctx: {
    id: string;
    node: TreeNodeType;
    depth: number;
    hasChildren: boolean;
  }) => ReactNode;
}

export function TreeNode({
  node: { id, name, children },
  depth = 0,
  renderItemActions,
}: TreeNodeProps) {
  const { state, toggle, select } = useTree();

  const isOpen = state.openNodes.get(id) ?? false;
  const isSelected = state.selectedNode === id;
  const hasChildren = Boolean(children?.length);

  // Approximate row height for sticky stacking
  const rowHeightPx = 44;
  const stickyTop = hasChildren && isOpen ? `${depth * rowHeightPx}px` : undefined;

  const { getRovingProps, getOrderedItems, isFocusable } = useRovingTabindex(id);

  const handleClick = () => {
    if (hasChildren) {
      toggle(id);
    }
    select(id);
  };

  return (
    <li
      data-tree-node-depth={depth}
      {...getRovingProps<'li'>({
        className:
          'group/tree-node focus:outline-none flex w-full flex-col gap-y-0.5 pl-2 select-none',
        'aria-expanded': hasChildren ? isOpen : undefined,
        'aria-level': depth + 1,
        'aria-selected': isSelected,
        role: 'treeitem',
        onKeyDown: function (e: KeyboardEvent) {
          e.stopPropagation();

          const items = getOrderedItems();
          let nextItemToFocus: RovingTabindexItem | undefined;

          if (e.key === 'ArrowUp') {
            e.preventDefault();
            nextItemToFocus = getPrevFocusableId(items, id);
          } else if (e.key === 'ArrowDown') {
            e.preventDefault();
            nextItemToFocus = getNextFocusableId(items, id);
          } else if (e.key === 'ArrowLeft') {
            if (isOpen && hasChildren) {
              toggle(id);
            } else {
              nextItemToFocus = getParentFocusableId(items, id);
            }
          } else if (e.key === 'ArrowRight') {
            if (!isOpen && hasChildren) {
              toggle(id);
            } else if (isOpen && hasChildren) {
              nextItemToFocus = getNextFocusableId(items, id);
            }
          } else if (e.key === 'Home') {
            e.preventDefault();
            nextItemToFocus = getFirstFocusableId(items);
          } else if (e.key === 'End') {
            e.preventDefault();
            nextItemToFocus = getLastFocusableId(items);
          } else if (/^[a-z]$/i.test(e.key)) {
            nextItemToFocus = getNextFocusableIdByTypeahead(items, id, e.key);
          } else if (e.key === 'Enter') {
            e.preventDefault();
            handleClick();
          }
          nextItemToFocus?.element.focus();
        },
      })}
    >
      <div
        className={clsx(
          'group/tree-item hover:bg-contrast-50 focus-visible:bg-contrast-50 relative flex h-11 w-full cursor-pointer items-center justify-between rounded-md py-2.5 transition-colors duration-300 ease-in-out group-focus-visible/tree-node:outline-none',
          hasChildren ? 'pr-3 pl-3' : 'pr-3 pl-5',
          isSelected ? 'bg-contrast-50' : 'bg-background',
          isFocusable && 'group-focus-visible/tree-node:bg-contrast-50',
          hasChildren && isOpen && 'sticky',
        )}
        onClick={handleClick}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            e.stopPropagation();
          }
        }}
        role="button"
        style={
          hasChildren && isOpen ? { zIndex: Math.max(1, 50 - depth), top: stickyTop } : undefined
        }
        tabIndex={-1}
      >
        {hasChildren && (
          <ChevronRightIcon
            absoluteStrokeWidth
            className={clsx(
              'text-contrast-500 mr-1.5 flex-none transition-transform duration-300 ease-in-out',
              isOpen ? 'rotate-90' : 'rotate-0',
            )}
            size={20}
            strokeWidth={1.5}
          />
        )}
        <span
          className={clsx(
            'flex-1 whitespace-nowrap',
            isFocusable && 'group-focus-visible/tree-node:underline',
          )}
        >
          {name}
        </span>
        {renderItemActions ? (
          <span
            className={clsx(
              'group-hover/tree-item:bg-contrast-50 sticky right-0 -mr-3 flex-none [mask-image:linear-gradient(to_right,transparent,black_12px,black)] px-3 py-1 transition-colors duration-300 ease-in-out',
              isSelected ? 'bg-contrast-50' : 'bg-background',
              isFocusable && 'group-focus-visible/tree-node:bg-contrast-50',
            )}
          >
            {renderItemActions({ id, node: { id, name, children }, depth, hasChildren })}
          </span>
        ) : null}
      </div>
      {hasChildren && isOpen ? (
        <ul
          className={clsx(
            'border-l-contrast-50 ml-5.5 flex w-[calc(100%+theme(spacing.5.5))] flex-col gap-y-0.5 border-l',
          )}
          role="group"
        >
          {children?.map((node) => (
            <TreeNode
              depth={depth + 1}
              key={node.id}
              node={node}
              renderItemActions={renderItemActions}
            />
          ))}
        </ul>
      ) : null}
    </li>
  );
}
