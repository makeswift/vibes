import { lazy } from 'react'

interface Props {
  className?: string
  name?: keyof typeof Icons
}

export const Icons = {
  Cube: lazy(() => import('@/icons/generated/Cube')),
  Logo: lazy(() => import('@/icons/generated/Logo')),
  Moon: lazy(() => import('@/icons/generated/Moon')),
  Play: lazy(() => import('@/icons/generated/Play')),
  Search: lazy(() => import('@/icons/generated/Search')),
  Sun: lazy(() => import('@/icons/generated/Sun')),
  UpDownArrows: lazy(() => import('@/icons/generated/UpDownArrows')),
} as const

export function Icon({ name = 'Cube', ...rest }: Props) {
  const Component = Icons[name]

  return <Component {...rest} />
}
