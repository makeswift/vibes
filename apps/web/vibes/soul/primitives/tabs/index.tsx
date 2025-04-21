'use client';

import * as TabsPrimitive from '@radix-ui/react-tabs';
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
 *   --tabs-focus: hsl(var(--primary));
 *   --tabs-font-family: var(--font-family-body);
 *   --tabs-text: hsl(var(--contrast-500));
 *   --tabs-text-hover: hsl(var(--foreground));
 *   --tabs-text-active: hsl(var(--foreground));
 *   --tabs-underline-active: hsl(var(--primary));
 *   --tabs-underline-hover: hsl(var(--contrast-200));
 *   --tabs-border: hsl(var(--contrast-100));
 * }
 * ```
 */
export function Tabs({ className = '', defaultValue, tabs, ...props }: TabsProps) {
  return (
    <TabsPrimitive.Root className={className} defaultValue={defaultValue} {...props}>
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
      className="flex flex-wrap border-b border-[var(--tabs-border,hsl(var(--contrast-100)))]"
      ref={ref}
      {...props}
    />
  );
}

function TabsTrigger({ ref, ...props }: ComponentPropsWithRef<typeof TabsPrimitive.Trigger>) {
  return (
    <TabsPrimitive.Trigger
      className='relative p-4 font-[family-name:var(--tabs-font-family,var(--font-family-body))] text-sm font-semibold text-[var(--tabs-text,hsl(var(--contrast-500)))] transition-[height,color] duration-300 ease-in-out after:absolute after:bottom-0 after:left-0 after:h-0 after:w-full after:transition-all after:duration-300 after:ease-in-out after:content-[""] hover:text-[var(--tabs-text-hover,hsl(var(--foreground)))] after:hover:h-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--button-focus,hsl(var(--primary)))] disabled:pointer-events-none disabled:text-[var(--tabs-text,hsl(var(--contrast-500)))] data-[state=active]:text-[var(--tabs-text-active,hsl(var(--foreground)))] data-[state=active]:after:h-0.5 data-[state=active]:after:bg-[var(--tabs-underline-active,hsl(var(--primary)))] data-[state=inactive]:after:hover:bg-[var(--tabs-underline-hover,hsl(var(--contrast-100)))]'
      ref={ref}
      {...props}
    />
  );
}

function TabsContent({ ref, ...props }: ComponentPropsWithRef<typeof TabsPrimitive.Content>) {
  return (
    <TabsPrimitive.Content
      className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--button-focus,hsl(var(--primary)))] focus-visible:ring-offset-2"
      ref={ref}
      {...props}
    />
  );
}
