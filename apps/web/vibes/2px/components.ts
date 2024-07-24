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
] satisfies Components
