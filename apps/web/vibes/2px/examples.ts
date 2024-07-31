import { lazy } from 'react'

import { Components } from '@/vibes/schema'

export const examples = [
  {
    name: 'radio-button-example',
    dependencies: [],
    registryDependencies: ['radio-button'],
    files: ['examples/radio-button.tsx'],
    component: lazy(() => import('./examples/radio-button')),
  },
  {
    name: 'rating-example',
    dependencies: [],
    registryDependencies: ['rating'],
    files: ['examples/rating.tsx'],
    component: lazy(() => import('./examples/rating')),
  },
  {
    name: 'button-example',
    dependencies: [],
    registryDependencies: ['button'],
    files: ['examples/button.tsx'],
    component: lazy(() => import('./examples/button')),
  },
  {
    name: 'counter-example',
    dependencies: [],
    registryDependencies: ['counter'],
    files: ['examples/counter.tsx'],
    component: lazy(() => import('./examples/counter')),
  },
  {
    name: 'calendar-example',
    dependencies: ['react-day-picker', '@/vibes/2px/components/icons'],
    registryDependencies: ['calendar'],
    files: ['examples/calendar.tsx'],
    component: lazy(() => import('./examples/calendar')),
  },
  {
    name: 'breadcrumbs-example',
    dependencies: [],
    registryDependencies: ['breadcrumbs'],
    files: ['examples/breadcrumbs.tsx'],
    component: lazy(() => import('./examples/breadcrumbs')),
  },
  {
    name: 'tabs-example',
    dependencies: [],
    registryDependencies: ['tabs'],
    files: ['examples/tabs.tsx'],
    component: lazy(() => import('./examples/tabs')),
  },
  {
    name: 'accordions-example',
    dependencies: [],
    registryDependencies: ['accordions'],
    files: ['examples/accordions.tsx'],
    component: lazy(() => import('./examples/accordions')),
  },
  {
    name: 'badge-example',
    dependencies: [],
    registryDependencies: ['badge'],
    files: ['examples/badge.tsx'],
    component: lazy(() => import('./examples/badge')),
  },
] satisfies Components
