import { lazy } from 'react'

import { Components } from '@/vibes/schema'

export const examples = [
  {
    name: 'button-example',
    dependencies: [],
    registryDependencies: ['button'],
    files: ['examples/button.tsx'],
    component: lazy(() => import('./examples/button')),
  },
  {
    name: 'rating-example',
    dependencies: [],
    registryDependencies: ['rating'],
    files: ['examples/rating.tsx'],
    component: lazy(() => import('./examples/rating')),
  },
  {
    name: 'skeleton-example',
    dependencies: [],
    registryDependencies: ['skeleton'],
    files: ['examples/skeleton.tsx'],
    component: lazy(() => import('./examples/skeleton')),
  },
] satisfies Components
