'use client';

import * as TabsPrimitive from '@radix-ui/react-tabs';
import { clsx } from 'clsx';
import { ComponentPropsWithoutRef, ComponentPropsWithRef, ReactNode } from 'react';

interface Tab {
  value: string;
  label: string;
  content: ReactNode;
}

export type TabsProps = ComponentPropsWithoutRef<typeof TabsPrimitive.Root> & {
  className?: string;
  defaultValue: string;
  tabs: Tab[];
};

/**
 * This component supports various CSS variables for theming. Here's a comprehensive list, along
 * with their default values:
 *
 * ```css
 * :root {
 *   --tabs-focus: var(--primary);
 *   --tabs-font-family: var(--font-family-body);
 *   --tabs-text: var(--contrast-500);
 *   --tabs-text-hover: var(--foreground);
 *   --tabs-text-active: var(--foreground);
 *   --tabs-underline-default: var(--contrast-200);
 *   --tabs-underline-active: var(--primary);
 *   --tabs-underline-hover: var(--contrast-200);
 *   --tabs-border: var(--contrast-100);
 * }
 * ```
 */
export function Tabs({ className, defaultValue, tabs, ...props }: TabsProps) {
  return (
    <TabsPrimitive.Root className={clsx(className)} defaultValue={defaultValue} {...props}>
      <TabsList>
        {tabs.map(({ value, label }) => (
          <TabsTrigger key={value} value={value}>
            {label}
          </TabsTrigger>
        ))}
      </TabsList>
      {tabs.map(({ value, content }) => (
        <TabsContent key={value} value={value}>
          {content}
        </TabsContent>
      ))}
    </TabsPrimitive.Root>
  );
}

export type TabsListProps = ComponentPropsWithRef<typeof TabsPrimitive.List>;

function TabsList({ ref, ...props }: TabsListProps) {
  return (
    <TabsPrimitive.List
      className="flex flex-wrap border-b border-(--tabs-border,var(--contrast-100))"
      ref={ref}
      {...props}
    />
  );
}

function TabsTrigger({ ref, ...props }: ComponentPropsWithRef<typeof TabsPrimitive.Trigger>) {
  return (
    <TabsPrimitive.Trigger
      className='relative p-4 font-(family-name:--tabs-font-family,var(--font-family-body)) text-sm font-semibold text-(--tabs-text,var(--contrast-500)) transition-colors duration-200 ease-linear after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:origin-bottom after:scale-y-0 after:bg-(--tabs-underline-default,var(--contrast-200)) after:transition-all after:duration-200 after:ease-linear after:content-[""] hover:text-(--tabs-text-hover,var(--foreground)) hover:after:scale-y-100 focus-visible:ring-2 focus-visible:ring-(--tabs-focus,var(--primary)) focus-visible:outline-hidden disabled:pointer-events-none disabled:text-(--tabs-text,var(--contrast-500)) data-[state=active]:text-(--tabs-text-active,var(--foreground)) data-[state=active]:after:scale-y-100 data-[state=active]:after:bg-(--tabs-underline-active,var(--primary)) data-[state=inactive]:hover:after:bg-(--tabs-underline-hover,var(--contrast-200))'
      ref={ref}
      {...props}
    />
  );
}

function TabsContent({ ref, ...props }: ComponentPropsWithRef<typeof TabsPrimitive.Content>) {
  return (
    <TabsPrimitive.Content
      className="focus-visible:ring-2 focus-visible:ring-(--tabs-focus,var(--primary)) focus-visible:ring-offset-2 focus-visible:outline-hidden"
      ref={ref}
      {...props}
    />
  );
}
