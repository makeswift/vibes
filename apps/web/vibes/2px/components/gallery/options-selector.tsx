'use client'

import { useState } from 'react'

import Button from '@/vibes/2px/components/button'
import Dropdown from '@/vibes/2px/components/dropdown'
import Swatch from '@/vibes/2px/components/swatch'

export type Option = {
  label: string
} & (
  | {
      type: 'swatch'
      values: { value: string; inStock: boolean; sample: string }[]
    }
  | {
      type: 'dropdown'
      values: { label: string; value: string }[]
    }
)

interface Props {
  options?: Option[]
}

const Label = ({ children }: { children: string }) => (
  <label className="mb-4 font-mono text-xs uppercase leading-[1.125rem] @2xl:text-sm @2xl:leading-[1.375rem] @2xl:tracking-[0.02em]">
    {children}
  </label>
)

function OptionsSelector({ options }: Props) {
  const [values, setValues] = useState<Record<string, string | undefined>>({})

  return (
    <form className="flex flex-col">
      {options?.map((option, index) => {
        if (option.type === 'swatch') {
          return (
            <>
              <Label>{option.label}</Label>
              <div key={index} className="mb-6 flex gap-5">
                {option.values.map((value, index) => (
                  <Swatch
                    key={index}
                    name="color"
                    value={value.value}
                    inStock={value.inStock}
                    sample={value.sample}
                    onChange={e => {
                      setValues({ ...values, [option.label]: e.currentTarget.value })
                    }}
                    checked={values[option.label] === value.value}
                  />
                ))}
              </div>
            </>
          )
        }

        if (option.type === 'dropdown') {
          return (
            <>
              <Label>{option.label}</Label>
              <Dropdown
                key={index}
                placeholder="Select size"
                options={option.values}
                setValue={value => setValues({ ...values, [option.label]: value })}
                className="mb-6"
                value={values[option.label]}
              />
            </>
          )
        }

        return null
      })}

      <Button type="submit" className="w-full">
        Add to cart
      </Button>
    </form>
  )
}

export default OptionsSelector
