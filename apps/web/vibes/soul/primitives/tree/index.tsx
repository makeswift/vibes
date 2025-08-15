'use client';

import { forwardRef, useRef, useState } from 'react';
import { ChevronRight } from 'lucide-react';

export type TreeNode = {
  label: React.ReactNode;
  children?: TreeNode[];
};

export type TreeProps = {
  data: TreeNode;
  defaultOpen?: boolean;
  className?: string;
};

/**
 * Tree component for displaying hierarchical data.
 *
 * ## CSS Variables
 * ```css
 * :root {
 *   --tree-focus: var(--primary);
 *   --tree-node-hover: var(--contrast-100);
 *   --tree-border: var(--contrast-200);
 *   --tree-text: var(--foreground);
 * }
 * ```
 */
export const Tree = forwardRef<HTMLUListElement, TreeProps>(function Tree(
  { data, defaultOpen, className },
  ref,
) {
  return (
    <ul ref={ref} role="tree" aria-label="Tree" className={`list-none pl-0 ${className ?? ''}`}>
      <TreeItem node={data} defaultOpen={defaultOpen} autoFocus />
    </ul>
  );
});

export type TreeItemProps = {
  node: TreeNode;
  defaultOpen?: boolean;
  level?: number;
  autoFocus?: boolean;
};

export const TreeItem = ({
  node,
  defaultOpen = false,
  level = 1,
  autoFocus = false,
}: TreeItemProps) => {
  const [open, setOpen] = useState(defaultOpen);
  const hasChildren = !!node.children?.length;
  const buttonRef = useRef<HTMLButtonElement>(null);

  return (
    <li
      role="treeitem"
      aria-expanded={hasChildren ? open : undefined}
      aria-level={level}
      tabIndex={autoFocus ? 0 : -1}
      className="outline-none"
    >
      <div className="group flex items-center py-1">
        {hasChildren ? (
          <button
            type="button"
            aria-expanded={open}
            aria-label={typeof node.label === 'string' ? node.label : undefined}
            onClick={() => setOpen((v) => !v)}
            className="flex items-center rounded px-0.5 focus-visible:ring-2 focus-visible:ring-(--tree-focus,var(--primary))"
            ref={buttonRef}
            tabIndex={-1}
          >
            <Chevron open={open} />
            <span className="text-(--tree-text,var(--foreground)) group-hover:underline">
              {node.label}
            </span>
          </button>
        ) : (
          <span className="ml-5 text-(--tree-text,var(--foreground))">{node.label}</span>
        )}
      </div>
      {hasChildren && open && (
        <ul role="group" className="ml-3 border-l border-(--tree-border,var(--contrast-200)) pl-2">
          {node.children!.map((child, i) => (
            <TreeItem key={i} node={child} level={level + 1} />
          ))}
        </ul>
      )}
    </li>
  );
};

const Chevron = ({ open }: { open: boolean }) => (
  <span
    className={`mr-1 inline-block transition-transform duration-200 select-none ${
      open ? 'rotate-90' : ''
    }`}
    aria-hidden
  >
    <ChevronRight size={20} strokeWidth={1.5} />
  </span>
);

Tree.displayName = 'Tree';
TreeItem.displayName = 'TreeItem';
