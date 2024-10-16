'use client'

import { parseAsArrayOf, parseAsString, useQueryState } from 'nuqs'

import { Checkbox } from '@/vibes/soul/form/checkbox'

interface Props {
  productId: string
  paramName?: string
  label?: string
}

export const Compare = function Compare({
  productId,
  paramName = 'compare',
  label = 'Compare',
}: Props) {
  const [param, setParam] = useQueryState(paramName, parseAsArrayOf(parseAsString))

  return (
    <Checkbox
      id={`${paramName}-${productId}`}
      className="absolute left-1.5 top-1.5 rounded-lg p-1 text-foreground transition-colors duration-300 hover:bg-background/80 @lg:bottom-4 @lg:left-4 @lg:top-auto"
      label={label}
      checked={param?.includes(productId) ?? false}
      onCheckedChange={value => {
        setParam(p =>
          value === true ? [...(p ?? []), productId] : (p ?? []).filter(v => v !== productId)
        ).catch(() => console.error(`Failed to update ${paramName} param`))
      }}
    />
  )
}
