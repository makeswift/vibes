'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

import { Input } from '@/vibes/soul/primitives/input'

import { Button } from '../../primitives/button'

interface Props {
  name: string
  min?: number
  max?: number
  minLabel?: string
  maxLabel?: string
}

const createUrl = (pathname: string, params: URLSearchParams) => {
  const paramsString = params.toString()
  const queryString = `${paramsString.length ? '?' : ''}${paramsString}`

  return `${pathname}${queryString}`
}

const parseNumberOrNull = (value: string | null) => {
  const parsed = parseInt(value ?? '', 10)

  return Number.isNaN(parsed) ? null : parsed
}

const clamp = (value: number, min: number = -Infinity, max: number = Infinity) =>
  Math.min(Math.max(value, min), max)

export function FilterRange({ name, min, max, minLabel, maxLabel }: Props) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const minParam = parseNumberOrNull(searchParams.get(`${name}-min`))
  const maxParam = parseNumberOrNull(searchParams.get(`${name}-max`))
  const [minValue, setMinValue] = useState(minParam ?? min)
  const [maxValue, setMaxValue] = useState(maxParam ?? max)
  const isDirty =
    (minValue !== minParam && !(minParam === null && minValue === min)) ||
    (maxValue !== maxParam && !(maxParam === null && maxValue === max))

  useEffect(() => {
    setMinValue(minParam ?? min)
    setMaxValue(maxParam ?? max)
  }, [minParam, maxParam, min, max])

  return (
    <div className="space-y-3">
      <div className="flex w-full items-center gap-2">
        <Input
          type="number"
          prepend={minLabel}
          value={minValue}
          min={min}
          max={maxValue ?? max}
          onChange={e => setMinValue(e.currentTarget.valueAsNumber)}
          onBlur={e => {
            const clamped = clamp(e.currentTarget.valueAsNumber, min, maxValue ?? max)
            const params = new URLSearchParams(searchParams.toString())

            params.set(`${name}-min`, clamped.toString())
            router.replace(createUrl(pathname, params), { scroll: false })

            setMinValue(clamped)
          }}
        />
        <span className="text-base text-contrast-400">to</span>
        <Input
          type="number"
          min={minValue ?? min}
          max={max}
          prepend={maxLabel}
          value={maxValue}
          onChange={e => setMaxValue(e.currentTarget.valueAsNumber)}
          onBlur={e => {
            const clamped = clamp(e.currentTarget.valueAsNumber, minValue ?? min, max)
            const params = new URLSearchParams(searchParams.toString())

            params.set(`${name}-max`, clamped.toString())
            router.replace(createUrl(pathname, params), { scroll: false })

            setMaxValue(clamped)
          }}
        />
      </div>
      {isDirty && (
        <div className="flex justify-center">
          <Button
            size="small"
            variant="secondary"
            onClick={() => {
              const params = new URLSearchParams(searchParams.toString())

              if (minValue != null) params.set(`${name}-min`, minValue.toString())
              if (maxValue != null) params.set(`${name}-max`, maxValue.toString())

              router.replace(createUrl(pathname, params), { scroll: false })
            }}
          >
            Apply Changes
          </Button>
        </div>
      )}
    </div>
  )
}
