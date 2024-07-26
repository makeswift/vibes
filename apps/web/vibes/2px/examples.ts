import { lazy } from 'react'

import { Components } from '@/vibes/schema'

export const examples = [
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
    name: 'size-list-example',
    dependencies: [],
    registryDependencies: ['size-list'],
    files: ['examples/size-list.tsx'],
    component: lazy(() => import('./examples/size-list')),
  },
] satisfies Components
