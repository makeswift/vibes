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
    name: 'datepicker-example',
    dependencies: ['react-day-picker', '@/vibes/2px/components/icons'],
    registryDependencies: ['datepicker'],
    files: ['examples/datepicker.tsx'],
    component: lazy(() => import('./examples/datepicker')),
  },
] satisfies Components
