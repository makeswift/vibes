import { lazy } from 'react'

import { Components } from '@/vibes/schema'

export const components = [
  {
    name: 'dropdown',
    dependencies: [],
    registryDependencies: [],
    files: ['./components/dropdown/index.tsx'],
    component: lazy(() => import('./components/dropdown')),
  },
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
] satisfies Components
