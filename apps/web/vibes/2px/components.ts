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
    name: 'counter',
    dependencies: [],
    registryDependencies: [],
    files: ['./components/counter/index.tsx'],
    component: lazy(() => import('./components/counter')),
  },
] satisfies Components
