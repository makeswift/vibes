import { lazy } from 'react'

import { Components } from '@/vibes/schema'

export const components = [
  {
    name: 'radio-button',
    dependencies: [],
    registryDependencies: [],
    files: ['./components/radio-button/index.tsx'],
    component: lazy(() => import('./components/radio-button')),
  },
  {
    name: 'button',
    dependencies: [],
    registryDependencies: [],
    files: ['./components/button/index.tsx'],
    component: lazy(() => import('./components/button')),
  },
] satisfies Components
