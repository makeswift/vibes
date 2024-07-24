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
    name: 'accordions',
    dependencies: [],
    registryDependencies: [],
    files: ['./components/accordions/index.tsx'],
    component: lazy(() => import('./components/accordions')),
  },
  {
    name: 'input',
    dependencies: [],
    registryDependencies: [],
    files: ['./components/input/index.tsx'],
    component: lazy(() => import('./components/input')),
  },
  {
    name: 'navigation',
    dependencies: [],
    registryDependencies: [],
    files: ['./components/navigation/index.tsx'],
    component: lazy(() => import('./components/navigation')),
  },
  {
    name: 'rating',
    dependencies: [],
    registryDependencies: [],
    files: ['./components/rating/index.tsx'],
    component: lazy(() => import('./components/rating')),
  },
] satisfies Components
