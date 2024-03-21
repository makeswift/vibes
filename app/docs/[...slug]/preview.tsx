import { lazy } from 'react'

interface Props {
  path: string
}

export function Preview({ path }: Props) {
  try {
    const Component = lazy(() => import('@/components/vibes/' + path + '/asdf'))

    return <Component />
  } catch (e) {
    console.log('error')
    throw Error('Component not found')
  }
}
