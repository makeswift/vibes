'use client';

import { ChevronRight } from 'lucide-react';
import { forwardRef, useRef, useState } from 'react';

export interface TreeNode {
  label: React.ReactNode;
  children?: TreeNode[];
}

export interface TreeProps {
  className?: string;
  data: TreeNode;
  defaultOpen?: boolean;
}

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
    <ul aria-label="Tree" className={`list-none pl-0 ${className ?? ''}`} ref={ref} role="tree">
      <TreeItem defaultOpen={defaultOpen} level={1} node={data} />
    </ul>
  );
});

export interface TreeItemProps {
  defaultOpen?: boolean;
  level?: number;
  node: TreeNode;
}

export const TreeItem = ({ node, defaultOpen = false, level = 1 }: TreeItemProps) => {
  const [open, setOpen] = useState(defaultOpen);
  const hasChildren = Array.isArray(node.children) && node.children.length > 0;
  const buttonRef = useRef<HTMLButtonElement>(null);

  return (
    <li
      aria-expanded={hasChildren ? open : undefined}
      aria-level={level}
      aria-selected={false}
      className="outline-none"
      role="treeitem"
      tabIndex={-1}
    >
      <div className="group flex items-center py-1">
        {hasChildren ? (
          <button
            aria-expanded={open}
            aria-label={typeof node.label === 'string' ? node.label : undefined}
            className="flex items-center rounded px-0.5 focus-visible:ring-2 focus-visible:ring-(--tree-focus,var(--primary))"
            onClick={() => setOpen((v) => !v)}
            ref={buttonRef}
            type="button"
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
      {hasChildren && open && node.children && (
        <ul className="ml-3 border-l border-(--tree-border,var(--contrast-200)) pl-2" role="group">
          {node.children.map((child, i) => (
            <TreeItem key={i} level={level + 1} node={child} />
          ))}
        </ul>
      )}
    </li>
  );
};

export const Chevron = ({ open }: { open: boolean }) => (
  <span
    aria-hidden
    className={`mr-1 inline-block transition-transform duration-200 select-none ${open ? 'rotate-90' : ''}`}
  >
    <ChevronRight size={20} strokeWidth={1.5} />
  </span>
);

Tree.displayName = 'Tree';
TreeItem.displayName = 'TreeItem';
