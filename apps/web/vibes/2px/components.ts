import { lazy } from 'react'

import { Components } from '@/vibes/schema'

export const components = [
  {
    name: 'rating',
    dependencies: [],
    registryDependencies: [],
    files: ['./components/rating/index.tsx'],
    component: lazy(() => import('./components/rating')),
  },
  {
    name: 'button',
    dependencies: [],
    registryDependencies: [],
    files: ['./components/button/index.tsx'],
    component: lazy(() => import('./components/button')),
  },
  {
    name: 'alert-box',
    dependencies: [],
    registryDependencies: [],
    files: ['./components/alert-box/index.tsx'],
    component: lazy(() => import('./components/alert-box')),
  },
] satisfies Components
