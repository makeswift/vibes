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
    name: 'swatch',
    dependencies: [],
    registryDependencies: [],
    files: ['./components/swatch/index.tsx'],
    component: lazy(() => import('./components/swatch')),
  },
] satisfies Components
