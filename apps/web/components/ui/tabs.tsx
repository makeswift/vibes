'use client';

import * as TabsPrimitive from '@radix-ui/react-tabs';
import { clsx } from 'clsx';
import * as React from 'react';

const Tabs = React.forwardRef<
  React.ComponentRef<typeof TabsPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Root>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Root className={clsx('tabs', className)} ref={ref} {...props} />
));
Tabs.displayName = TabsPrimitive.Root.displayName;

const TabsList = React.forwardRef<
  React.ComponentRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    className={clsx('flex items-center gap-x-1', className)}
    ref={ref}
    {...props}
  />
));
TabsList.displayName = TabsPrimitive.List.displayName;

const TabsTrigger = React.forwardRef<
  React.ComponentRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    className={clsx(
      'text-contrast-400 ring-offset-background hover:border-contrast-400 focus-visible:ring-primary data-[state=active]:border-foreground data-[state=active]:text-foreground inline-flex items-center justify-center border border-b-0 border-dashed border-transparent px-3 py-1.5 text-sm font-bold whitespace-nowrap transition-colors focus-visible:ring-2 focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50 data-[state=active]:border-solid data-[state=active]:focus-visible:border-transparent',
      className,
    )}
    ref={ref}
    {...props}
  />
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const TabsContent = React.forwardRef<
  React.ComponentRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    className={clsx('mt-2 focus-visible:outline-hidden', className)}
    ref={ref}
    {...props}
  />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

export { Tabs, TabsList, TabsTrigger, TabsContent };
