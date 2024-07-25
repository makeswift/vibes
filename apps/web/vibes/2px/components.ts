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
    name: 'datepicker',
    dependencies: [],
    registryDependencies: [],
    files: ['./components/datepicker/index.tsx'],
    component: lazy(() => import('./components/datepicker')),
  },
] satisfies Components
