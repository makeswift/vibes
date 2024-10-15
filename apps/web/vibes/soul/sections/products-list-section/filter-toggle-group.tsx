import { usePathname, useRouter, useSearchParams } from 'next/navigation'

import { ToggleGroup } from '@/vibes/soul/form/toggle-group'

const createUrl = (pathname: string, params: URLSearchParams) => {
  const paramsString = params.toString()
  const queryString = `${paramsString.length ? '?' : ''}${paramsString}`

  return `${pathname}${queryString}`
}

interface Props {
  options: { label: string; value: string }[]
  name: string
}

export function FilterToggleGroup({ name, options }: Props) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const value = searchParams.getAll(name)

  return (
    <ToggleGroup
      type="multiple"
      options={options}
      value={value}
      onValueChange={next => {
        const params = new URLSearchParams(searchParams.toString())

        params.delete(name)
        next.forEach(value => params.append(name, value))

        router.replace(createUrl(pathname, new URLSearchParams(params)))
      }}
    />
  )
}
