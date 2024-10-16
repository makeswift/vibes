'use client'

import { useEffect, useState } from 'react'

import { parseAsInteger, useQueryStates } from 'nuqs'

import { RangeInput } from '@/vibes/soul/form/range-input'
import { Button } from '@/vibes/soul/primitives/button'

interface Props {
  minParamName?: string
  maxParamName?: string
  min?: number
  max?: number
  minLabel?: string
  maxLabel?: string
  minPrepend?: React.ReactNode
  maxPrepend?: React.ReactNode
  minPlaceholder?: string
  maxPlaceholder?: string
}

export function FilterRange({
  min,
  max,
  minParamName = 'min',
  maxParamName = 'max',
  minLabel,
  maxLabel,
  minPrepend,
  maxPrepend,
  minPlaceholder = 'Min',
  maxPlaceholder = 'Max',
}: Props) {
  const [params, setParams] = useQueryStates({
    [minParamName]: parseAsInteger,
    [maxParamName]: parseAsInteger,
  })
  const [minState, setMinState] = useState(params[minParamName] ?? min)
  const [maxState, setMaxState] = useState(params[maxParamName] ?? max)
  const isDirty =
    (minState !== params[minParamName] && !(params[minParamName] === null && minState === min)) ||
    (maxState !== params[maxParamName] && !(params[maxParamName] === null && maxState === max))

  useEffect(() => {
    setMinState(params[minParamName] ?? min)
    setMaxState(params[maxParamName] ?? max)
  }, [params, min, max, minParamName, maxParamName])

  return (
    <div className="space-y-3">
      <RangeInput
        min={min}
        max={max}
        minLabel={minLabel}
        maxLabel={maxLabel}
        minPrepend={minPrepend}
        maxPrepend={maxPrepend}
        minPlaceholder={minPlaceholder}
        maxPlaceholder={maxPlaceholder}
        minValue={minState}
        maxValue={maxState}
        minName={minParamName}
        maxName={minParamName}
        onMinValueChange={setMinState}
        onMaxValueChange={setMaxState}
      />
      {isDirty && (
        <div className="flex justify-center">
          <Button
            size="small"
            variant="secondary"
            onClick={() => void setParams({ [minParamName]: minState, [maxParamName]: maxState })}
          >
            Apply Changes
          </Button>
        </div>
      )}
    </div>
  )
}
