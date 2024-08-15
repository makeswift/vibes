'use client'

import { useState } from 'react'

import Button from '@/vibes/2px/components/button'
import Form from '@/vibes/2px/components/form'

export default function Preview() {
  const [isLoading, setIsLoading] = useState(false)
  const [checked, setChecked] = useState(false)
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
              checked,
              setChecked,
              required: true,
            },
          },
          {
            name: 'radio',
            label: 'Radio input',
            required: false,
            type: 'radio',
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
        ]}
      />
    </div>
  )
}
