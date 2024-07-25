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
    name: 'breadcrumbs',
    dependencies: [],
    registryDependencies: [],
    files: ['./components/breadcrumbs/index.tsx'],
    component: lazy(() => import('./components/breadcrumbs')),
  },
] satisfies Components
