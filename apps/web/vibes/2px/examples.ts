import { lazy } from 'react'

import { Components } from '@/vibes/schema'

export const examples = [
  {
    name: 'accordions-example',
    dependencies: [
      'react',
      '@radix-ui/react-accordion',
      'clsx',
      '@/vibes/2px/components/icons/ChevronDownIcon',
    ],
    registryDependencies: ['accordions'],
    files: ['examples/accordions.tsx'],
    component: lazy(() => import('./examples/accordions')),
  },
  {
    name: 'alert-box-example',
    dependencies: [
      '@/lib/utils',
      '@/vibes/2px/components/icons/AlertIcon',
      '@/vibes/2px/components/icons/CheckIcon',
      '@/vibes/2px/components/icons/CrossIcon',
      '@/vibes/2px/components/icons/InfoIcon',
    ],
    registryDependencies: ['alert-box'],
    files: ['examples/alert-box.tsx'],
    component: lazy(() => import('./examples/alert-box')),
  },
  {
    name: 'badge-example',
    dependencies: ['react', '@/lib/utils'],
    registryDependencies: ['badge'],
    files: ['examples/badge.tsx'],
    component: lazy(() => import('./examples/badge')),
  },
  {
    name: 'breadcrumbs-example',
    dependencies: ['next/link', '@/lib/utils'],
    registryDependencies: ['breadcrumbs'],
    files: ['examples/breadcrumbs.tsx'],
    component: lazy(() => import('./examples/breadcrumbs')),
  },
  {
    name: 'button-example',
    dependencies: [
      '@radix-ui/react-slot',
      '@/lib/utils',
      '@/vibes/2px/components/icons/LoadingIcon',
    ],
    registryDependencies: ['button'],
    files: ['examples/button.tsx'],
    component: lazy(() => import('./examples/button')),
  },
  {
    name: 'calendar-example',
    dependencies: [
      'react',
      'react-day-picker',
      '@/lib/utils',
      '@/vibes/2px/components/icons/ChevronDownIcon',
      '@/vibes/2px/components/icons/ChevronLeftIcon',
      '@/vibes/2px/components/icons/ChevronRightIcon',
      '@/vibes/2px/components/icons/ChevronUpIcon',
    ],
    registryDependencies: ['calendar'],
    files: ['examples/calendar.tsx'],
    component: lazy(() => import('./examples/calendar')),
  },
  {
    name: 'checkbox-example',
    dependencies: ['@/lib/utils', '@/vibes/2px/components/icons/CheckIcon'],
    registryDependencies: ['checkbox'],
    files: ['examples/checkbox.tsx'],
    component: lazy(() => import('./examples/checkbox')),
  },
  {
    name: 'counter-example',
    dependencies: [
      'react',
      '@/vibes/2px/components/icons/MinusDashedIcon',
      '@/vibes/2px/components/icons/MinusSolidIcon',
      '@/vibes/2px/components/icons/PlusDashedIcon',
      '@/vibes/2px/components/icons/PlusSolidIcon',
    ],
    registryDependencies: ['counter'],
    files: ['examples/counter.tsx'],
    component: lazy(() => import('./examples/counter')),
  },
  {
    name: 'rating-example',
    dependencies: [
      'react',
      'lucide-react',
      '@/lib/utils',
      '@/vibes/2px/components/icons/StarEmptyIcon',
      '@/vibes/2px/components/icons/StarFilledIcon',
      '@/vibes/2px/components/icons/StarHalfIcon',
    ],
    registryDependencies: ['rating'],
    files: ['examples/rating.tsx'],
    component: lazy(() => import('./examples/rating')),
  },
  {
    name: 'tabs-example',
    dependencies: ['react', '@radix-ui/react-tabs', 'clsx'],
    registryDependencies: ['tabs'],
    files: ['examples/tabs.tsx'],
    component: lazy(() => import('./examples/tabs')),
  },
] satisfies Components
