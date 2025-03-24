'use client';

import { useQueryState } from 'nuqs';
import { startTransition } from 'react';

import { Checkbox } from '@/vibes/soul/form/checkbox';
import { useCompareDrawer } from '@/vibes/soul/primitives/compare-drawer';
import { compareParser } from '@/vibes/soul/primitives/compare-drawer/loader';

export interface CompareDrawerItem {
  id: string;
  image?: { src: string; alt: string };
  href: string;
  title: string;
}

export interface CompareProps {
  colorScheme?: 'light' | 'dark';
  paramName?: string;
  label?: string;
  product: CompareDrawerItem;
}

export function Compare({
  colorScheme = 'light',
  paramName = 'compare',
  label = 'Compare',
  product,
}: CompareProps) {
  const [, setParam] = useQueryState(paramName, compareParser);

  const { optimisticItems, setOptimisticItems, maxItems } = useCompareDrawer();

  return (
    <Checkbox
      checked={!!optimisticItems.find((item) => item.id === product.id)}
      colorScheme={colorScheme}
      disabled={
        !optimisticItems.find((item) => item.id === product.id) &&
        maxItems !== undefined &&
        optimisticItems.length >= maxItems
      }
      label={label}
      onCheckedChange={(value) => {
        startTransition(async () => {
          setOptimisticItems({
            type: value === true ? 'add' : 'remove',
            item: product,
          });

          await setParam((prev) => {
            const next =
              value === true
                ? [...(prev ?? []), product.id]
                : (prev ?? []).filter((v) => v !== product.id);

            return next.length > 0 ? next : null;
          });
        });
      }}
    />
  );
}
