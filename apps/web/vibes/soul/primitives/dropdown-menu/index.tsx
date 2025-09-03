'use client';

import { clsx } from 'clsx';
import { EllipsisIcon } from 'lucide-react';
import type { ReactNode } from 'react';

import { Button } from '@/vibes/soul/primitives/button';
import {
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuRoot,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '@/vibes/soul/primitives/dropdown-menu/components';
import type {
  DropdownMenuCheckboxItemProps,
  DropdownMenuContentProps,
  DropdownMenuGroupProps,
  DropdownMenuItemProps,
  DropdownMenuSeparatorProps,
  DropdownMenuSubContentProps,
  DropdownMenuSubProps,
  DropdownMenuSubTriggerProps,
} from '@/vibes/soul/primitives/dropdown-menu/components';

/**
 * This component supports various CSS variables for theming. Here's a comprehensive list, along
 * with their default values:
 *
 * ```css
 * :root {
 *   --dropdown-menu-background: var(--background);
 *   --dropdown-menu-border: var(--contrast-100);
 *   --dropdown-menu-focus: var(--primary);
 *   --dropdown-menu-item-focus: var(--primary);
 *   --dropdown-menu-item-text: var(--contrast-400);
 *   --dropdown-menu-item-text-hover: var(--foreground);
 *   --dropdown-menu-item-danger-text: var(--error);
 *   --dropdown-menu-item-danger-text-hover: color-mix(in oklab, var(--error), black 75%);
 *   --dropdown-menu-item-background: transparent;
 *   --dropdown-menu-item-background-hover: var(--contrast-100);
 *   --dropdown-menu-item-danger-background: var(--error);
 *   --dropdown-menu-item-danger-background-hover: color-mix(in oklab, var(--error), white 75%);
 *   --dropdown-menu-item-font-family: var(--font-family-body);
 *   --dropdown-menu-seperator: var(--contrast-200);
 * }
 * ```
 */

type MenuNode =
  | { type: 'item'; props?: DropdownMenuItemProps }
  | { type: 'checkbox'; props?: DropdownMenuCheckboxItemProps }
  | { type: 'separator'; props?: DropdownMenuSeparatorProps }
  | { type: 'group'; props?: DropdownMenuGroupProps; items: MenuNode[] }
  | {
      type: 'sub';
      props?: DropdownMenuSubProps;
      trigger: { props?: DropdownMenuSubTriggerProps };
      content?: { props?: DropdownMenuSubContentProps; items: MenuNode[] };
    };

export interface DropdownMenuProps extends Pick<DropdownMenuContentProps, 'align' | 'sideOffset'> {
  items: MenuNode[];
  className?: string;
  trigger?: ReactNode;
  label: string;
  showScrollArea?: boolean;
}

export function DropdownMenu({
  className,
  items,
  trigger,
  align,
  sideOffset,
  label,
  showScrollArea = true,
}: DropdownMenuProps) {
  function renderMenuNode(node: MenuNode, key: string) {
    switch (node.type) {
      case 'item': {
        return <DropdownMenuItem key={key} {...node.props} />;
      }
      case 'checkbox': {
        return <DropdownMenuCheckboxItem key={key} {...node.props} />;
      }
      case 'separator':
        return <DropdownMenuSeparator key={key} {...node.props} />;
      case 'group':
        return (
          <DropdownMenuGroup key={key} {...node.props}>
            {node.items.map((child, index) => renderMenuNode(child, String(index)))}
          </DropdownMenuGroup>
        );
      case 'sub':
        return (
          <DropdownMenuSub key={key} {...node.props}>
            <DropdownMenuSubTrigger {...node.trigger.props} />
            {node.content ? (
              <DropdownMenuPortal>
                <DropdownMenuSubContent
                  alignOffset={-8}
                  className={clsx(
                    showScrollArea &&
                      // Set a max height for the scroll area by targeting the data-slot attribute of the scroll area nested within the sub-content
                      '[&_[data-slot=scroll-area-root]]:flex [&_[data-slot=scroll-area-root]]:max-h-80 [&_[data-slot=scroll-area-root]]:flex-col',
                    node.content.props?.className,
                  )}
                  {...node.content.props}
                >
                  {node.content.items.map((child, index) => renderMenuNode(child, String(index)))}
                </DropdownMenuSubContent>
              </DropdownMenuPortal>
            ) : null}
          </DropdownMenuSub>
        );
    }
  }

  return (
    <DropdownMenuRoot>
      <DropdownMenuTrigger asChild>
        {trigger !== undefined ? (
          trigger
        ) : (
          <Button shape="circle" size="small" variant="ghost">
            <EllipsisIcon size={20} />
          </Button>
        )}
      </DropdownMenuTrigger>
      <DropdownMenuPortal>
        <DropdownMenuContent
          align={align}
          className={clsx(
            // Set a max height for the scroll area by targeting the data-slot attribute of the scroll area nested within the content
            showScrollArea &&
              '[&_[data-slot=scroll-area-root]]:flex [&_[data-slot=scroll-area-root]]:max-h-80 [&_[data-slot=scroll-area-root]]:flex-col',
            className,
          )}
          sideOffset={sideOffset}
        >
          <DropdownMenuLabel>{label}</DropdownMenuLabel>
          {items.map((item, index) => {
            return renderMenuNode(item, String(index));
          })}
        </DropdownMenuContent>
      </DropdownMenuPortal>
    </DropdownMenuRoot>
  );
}
