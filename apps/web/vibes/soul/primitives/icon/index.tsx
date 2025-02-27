import { clsx } from 'clsx';
import dynamicIconImports from 'lucide-react/dynamicIconImports';
import { lazy, Suspense, useMemo } from 'react';

import * as Skeleton from '@/vibes/soul/primitives/skeleton';

export type IconName = keyof typeof dynamicIconImports;

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export const IconNames = Object.keys(dynamicIconImports) as IconName[];

export interface IconProps {
  className?: string;
  size?: number;
  name: IconName;
  strokeWidth?: number;
}

export function Icon({ className, name, size = 24, strokeWidth = 1.5 }: IconProps) {
  const LucideIcon = useMemo(() => lazy(dynamicIconImports[name]), [name]);

  return (
    <Suspense fallback={<IconSkeleton className={className} size={size} />}>
      <LucideIcon className={className} name={name} size={size} strokeWidth={strokeWidth} />
    </Suspense>
  );
}

export function IconSkeleton({ className, size = 24 }: Pick<IconProps, 'className' | 'size'>) {
  return (
    <Skeleton.Icon
      className={clsx('overflow-hidden rounded-full', className)}
      icon={
        <div
          className="bg-[var(--skeleton,hsl(var(--contrast-300)))] opacity-25"
          style={{ width: size, height: size }}
        />
      }
    />
  );
}
