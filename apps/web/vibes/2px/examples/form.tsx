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
  const handleSwatchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedSwatch(e.target.value)
  }

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
            fieldProps: {
              placeholder: 'Placeholder...',
              required: true,
            },
          },
          {
            name: 'textarea',
            label: 'Textarea input',
            type: 'textarea',
            fieldProps: {
              variant: 'default',
              placeholder: 'Placeholder...',
              required: false,
            },
          },
          {
            name: 'checkbox',
            label: 'Checkbox input',
            type: 'checkbox',
            fieldProps: {
              checked: checkedRadio,
              setChecked: setCheckedRadio,
              required: true,
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
            fieldProps: {
              required: true,
            },
          },
          {
            name: 'swatch',
            label: 'Swatch input',
            type: 'swatch-group',
            groupClassName: 'flex gap-4',
            fieldProps: [
              {
                value: 'default-example-1',
                name: 'example',
                disabled: false,
                inStock: true,
                sample: '#D3D3D3',
                checked: selectedSwatch === 'default-example-1',
                onChange: handleSwatchChange,
              },
              {
                value: 'out-of-stock-example',
                name: 'example',
                disabled: false,
                inStock: false,
                sample: '#D3D3D3',
                checked: selectedSwatch === 'out-of-stock-example',
                onChange: handleSwatchChange,
              },
              {
                value: 'default-example-2',
                name: 'example',
                disabled: false,
                inStock: true,
                sample: '#D3D3D3',
                checked: selectedSwatch === 'default-example-2',
                onChange: handleSwatchChange,
              },
              {
                value: 'disabled-example',
                name: 'example',
                disabled: true,
                inStock: true,
                sample: '#D3D3D3',
                checked: selectedSwatch === 'disabled-example',
                onChange: handleSwatchChange,
              },
            ],
          },
          {
            name: 'counter',
            label: 'Counter input',
            type: 'counter',
            fieldProps: {
              value: count,
              onChange: setCount,
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
        ]}
      />
    </div>
  )
}
