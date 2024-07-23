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
    name: 'accordions',
    dependencies: [],
    registryDependencies: [],
    files: ['./components/accordions/index.tsx'],
    component: lazy(() => import('./components/accordions')),
  },
] satisfies Components
