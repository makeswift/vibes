import { lazy } from 'react'

import { Components } from '@/vibes/schema'

export const components = [
  {
    name: 'button',
    dependencies: [],
    registryDependencies: [],
    files: ['./components/button/index.tsx'],
    component: lazy(() => import('./components/button')),
  },
  {
    name: 'radio-button',
    dependencies: [],
    registryDependencies: [],
    files: ['./components/radio-button/index.tsx'],
    component: lazy(() => import('./components/radio-button')),
  },
  {
    name: 'accordions',
    dependencies: ['@radix-ui/react-accordion'],
    registryDependencies: [],
    files: ['./components/accordions/index.tsx'],
    component: lazy(() => import('./components/accordions')),
  },
  {
    name: 'rating',
    dependencies: [],
    registryDependencies: [],
    files: ['./components/rating/index.tsx'],
    component: lazy(() => import('./components/rating')),
  },
  {
    name: 'skeleton',
    dependencies: [],
    registryDependencies: [],
    files: ['./components/skeleton/index.tsx'],
    component: lazy(() => import('./components/skeleton')),
  },
  {
    name: 'option-selector',
    dependencies: [],
    registryDependencies: [],
    files: ['./components/option-selector/index.tsx'],
    component: lazy(() => import('./components/option-selector')),
  },
  {
    name: 'checkbox',
    dependencies: [],
    registryDependencies: [],
    files: ['./components/checkbox/index.tsx'],
    component: lazy(() => import('./components/checkbox')),
  },
  {
    name: 'alert-box',
    dependencies: [],
    registryDependencies: [],
    files: ['./components/alert-box/index.tsx'],
    component: lazy(() => import('./components/alert-box')),
  },
  {
    name: 'counter',
    dependencies: [],
    registryDependencies: [],
    files: ['./components/counter/index.tsx'],
    component: lazy(() => import('./components/counter')),
  },
  {
    name: 'calendar',
    dependencies: [],
    registryDependencies: ['react-day-picker'],
    files: ['./components/calendar/index.tsx'],
    component: lazy(() => import('./components/calendar')),
  },
  {
    name: 'breadcrumbs',
    dependencies: [],
    registryDependencies: [],
    files: ['./components/breadcrumbs/index.tsx'],
    component: lazy(() => import('./components/breadcrumbs')),
  },
  {
    name: 'tabs',
    dependencies: [],
    registryDependencies: [],
    files: ['./components/tabs/index.tsx'],
    component: lazy(() => import('./components/tabs')),
  },
  {
    name: 'badge',
    dependencies: [],
    registryDependencies: [],
    files: ['./components/badge/index.tsx'],
    component: lazy(() => import('./components/badge')),
  },
] satisfies Components
