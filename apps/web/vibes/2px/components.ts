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
    name: 'rating',
    dependencies: [],
    registryDependencies: [],
    files: ['./components/rating/index.tsx'],
    component: lazy(() => import('./components/rating')),
  },
  {
    name: 'text-area',
    dependencies: [],
    registryDependencies: [],
    files: ['./components/text-area/index.tsx'],
    component: lazy(() => import('./components/text-area')),
  },
] satisfies Components
