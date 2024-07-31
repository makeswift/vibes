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
