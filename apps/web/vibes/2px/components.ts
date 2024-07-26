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
    name: 'size-list',
    dependencies: [],
    registryDependencies: [],
    files: ['./components/size-list/index.tsx'],
    component: lazy(() => import('./components/size-list')),
  },
] satisfies Components
