import { lazy } from 'react'

import { Components } from '@/vibes/schema'

export const components = [
  {
    name: 'accordions',
    dependencies: ['@radix-ui/react-accordion'],
    registryDependencies: [],
    files: ['./components/accordions/index.tsx'],
    component: lazy(() => import('./components/accordions')),
  },
  {
    name: 'button',
    dependencies: [],
    registryDependencies: [],
    files: ['./components/button/index.tsx'],
    component: lazy(() => import('./components/button')),
  },
  {
    name: 'badge',
    dependencies: [],
    registryDependencies: [],
    files: ['./components/badge/index.tsx'],
    component: lazy(() => import('./components/badge')),
  },
  {
    name: 'rating',
    dependencies: [],
    registryDependencies: [],
    files: ['./components/rating/index.tsx'],
    component: lazy(() => import('./components/rating')),
  },
  {
    name: 'swatch',
    dependencies: [],
    registryDependencies: [],
    files: ['./components/swatch/index.tsx'],
    component: lazy(() => import('./components/swatch')),
  },
] satisfies Components
