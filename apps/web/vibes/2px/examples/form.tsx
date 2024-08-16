'use client'

import { useState } from 'react'

import Button from '@/vibes/2px/components/button'
import Form from '@/vibes/2px/components/form'

export default function Preview() {
  const [isLoading, setIsLoading] = useState(false)
  const [checkedRadio, setCheckedRadio] = useState(false)
  const [selectedSwatch, setSelectedSwatch] = useState('default-example-1')
  const [selectedOption, setSelectedOption] = useState('')
  const [count, setCount] = useState(0)
  const [dropdownValue, setDropdownValue] = useState('')
  const handleSwatchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedSwatch(e.target.value)
  }

  const dropdownOptions = [
    {
      label: 'Option 1',
      value: 'option-1',
    },
    {
      label: 'Option 2',
      value: 'option-2',
    },
    {
      label: 'Option 3',
      value: 'option-3',
    },
  ]

  return (
    <div className="flex min-h-48 items-center justify-center bg-background p-5 sm:min-h-64 sm:p-8 lg:min-h-80 lg:p-12">
      <Form
        className="flex flex-col gap-6"
        submitButton={
          <Button
            loading={isLoading}
            type="submit"
            className="w-full"
            onClick={e => {
              e.preventDefault()
              setIsLoading(true)
              setTimeout(() => {
                setIsLoading(false)
              }, 2000)
            }}
          >
            Submit
          </Button>
        }
        fields={[
          {
            name: 'input',
            label: 'Text input',
            type: 'text',
            required: true,
            fieldProps: {
              placeholder: 'Placeholder...',
            },
          },
          {
            name: 'textarea',
            label: 'Textarea input',
            type: 'textarea',
            required: true,
            fieldProps: {
              variant: 'default',
              placeholder: 'Placeholder...',
            },
          },
          {
            name: 'checkbox',
            label: 'Checkbox input',
            type: 'checkbox',
            required: true,
            fieldProps: {
              checked: checkedRadio,
              onClick: () => setCheckedRadio(checked => !checked),
            },
          },
          {
            name: 'radio',
            label: 'Radio input',
            required: false,
            type: 'radio-group',
            fieldProps: [
              {
                label: "I'm a radio button",
                name: 'example',
                value: '1',
              },
              {
                label: "I'm another radio button",
                value: '2',
                name: 'example',
              },
            ],
          },
          {
            name: 'file',
            label: 'File input',
            type: 'file',
            required: false,
            fieldProps: {},
          },
          {
            name: 'swatch',
            label: 'Swatch input',
            type: 'swatch',

            fieldProps: {
              className: 'flex gap-2',
              swatches: [
                {
                  value: 'default-example-1',
                  label: 'swatch-example',
                  disabled: false,
                  inStock: true,
                  color: '#D3D3D3',
                },
                {
                  value: 'out-of-stock-example',
                  label: 'swatch-example',
                  disabled: false,
                  inStock: false,
                  color: '#D3D3D3',
                },
                {
                  value: 'default-example-2',
                  label: 'swatch-example',
                  disabled: false,
                  inStock: true,
                  color: '#D3D3D3',
                },
                {
                  value: 'disabled-example',
                  label: 'swatch-example',
                  disabled: true,
                  inStock: true,
                  color: '#D3D3D3',
                },
              ],
            },
          },
          {
            name: 'counter',
            label: 'Counter input',
            type: 'counter',
            fieldProps: {
              value: count,
              onChange: (value: number | '') => setCount(Number(value)),
              min: 0,
              max: 10,
              step: 1,
            },
          },
          {
            name: 'select',
            label: 'Select input',
            type: 'select',
            fieldProps: [
              {
                name: 'example-select',
                label: 'Option 1',
                checked: selectedOption === 'Option 1',
                onChange: () => setSelectedOption('Option 1'),
              },
              {
                name: 'example-select',
                label: 'Option 2',
                checked: selectedOption === 'Option 2',
                onChange: () => setSelectedOption('Option 2'),
              },
              {
                name: 'example-select',
                label: 'Option 3',
                unavailable: true,
                checked: selectedOption === 'Option 3',
                onChange: () => setSelectedOption('Option 3'),
              },
            ],
          },
          {
            name: 'dropdown',
            label: 'Dropdown input',
            type: 'dropdown',
            fieldProps: {
              options: dropdownOptions,
              placeholder: 'Select value',
              value: dropdownValue,
              setValue: setDropdownValue,
            },
          },
        ]}
      />
    </div>
  )
}
