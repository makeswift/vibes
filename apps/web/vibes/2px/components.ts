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
    name: 'badge',
    dependencies: [],
    registryDependencies: [],
    files: ['./components/badge/index.tsx'],
    component: lazy(() => import('./components/badge')),
  },
] satisfies Components
