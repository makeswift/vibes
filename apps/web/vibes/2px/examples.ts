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
    name: 'breadcrumbs-example',
    dependencies: [],
    registryDependencies: ['breadcrumbs'],
    files: ['examples/breadcrumbs.tsx'],
    component: lazy(() => import('./examples/breadcrumbs')),
  },
] satisfies Components
