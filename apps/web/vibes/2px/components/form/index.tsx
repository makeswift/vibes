import React from 'react'

import * as FormPrimitive from '@radix-ui/react-form'

import { cn } from '@/lib/utils'
import Button from '@/vibes/2px/components/button'
import Checkbox, { Props as CheckboxProps } from '@/vibes/2px/components/checkbox'
import Counter, { Props as CounterProps } from '@/vibes/2px/components/counter'
import Dropdown, { Props as DropdownProps } from '@/vibes/2px/components/dropdown'
import FileUploader, { Props as FileUploaderProps } from '@/vibes/2px/components/file-uploader'
import Input, { Props as InputProps } from '@/vibes/2px/components/input'
import Select, { Props as SelectProps } from '@/vibes/2px/components/option-selector'
import RadioButton, { Props as RadioButtonProps } from '@/vibes/2px/components/radio-button'
import Swatch, { Props as SwatchProps } from '@/vibes/2px/components/swatch'
import TextArea, { Props as TextAreaProps } from '@/vibes/2px/components/text-area'

type Field = {
  name: string
  label: string
  required?: boolean
} & (
  | {
      type: 'text'
      fieldProps: InputProps
    }
  | {
      type: 'textarea'
      fieldProps: TextAreaProps
    }
  | {
      type: 'checkbox'
      fieldProps: CheckboxProps
    }
  | {
      type: 'radio-group'
      fieldProps: RadioButtonProps[]
      groupClassName?: string
    }
  | {
      type: 'file'
      fieldProps: FileUploaderProps
    }
  | {
      type: 'counter'
      fieldProps: CounterProps
    }
  | {
      type: 'swatch-group'
      fieldProps: SwatchProps[]
      groupClassName?: string
    }
  | {
      type: 'select'
      fieldProps: SelectProps[]
    }
  | {
      type: 'dropdown'
      fieldProps: DropdownProps
    }
)

interface Props extends FormPrimitive.FormProps {
  className?: string
  fields: Field[]
  submitButton: React.ReactElement<typeof Button>
}

const FIELD_TYPES_COMPONENTS = {
  text: Input,
  textarea: TextArea,
  checkbox: Checkbox,
  'radio-group': RadioButton,
  file: FileUploader,
  counter: Counter,
  'swatch-group': Swatch,
  select: Select,
  dropdown: Dropdown,
}

const GROUP_FIELD_TYPES = ['radio-group', 'swatch-group', 'select'] as const

type GroupFieldType = (typeof GROUP_FIELD_TYPES)[number]

function isValidGroupFieldType(type: string): type is GroupFieldType {
  return GROUP_FIELD_TYPES.includes(type as GroupFieldType)
}
export default function Form({ className, fields, submitButton }: Props) {
  return (
    <FormPrimitive.Root className={cn('font-body font-medium text-foreground', className)}>
      {fields.map(field => {
        const Comp = FIELD_TYPES_COMPONENTS[field.type]

        if (isValidGroupFieldType(field.type)) {
          return (
            <FieldGroup
              type={field.type}
              fieldGroupProps={field}
              key={field.name}
              {...('groupClassName' in field ? { groupClassName: field.groupClassName } : {})}
            />
          )
        }

        return (
          <FormPrimitive.Field name={field.name} key={field.name} className="flex flex-col gap-2">
            <FormPrimitive.Label htmlFor={field.name} className="text-xs leading-[1.375rem]">
              {field.label} {field.required && ' *'}
            </FormPrimitive.Label>

            <FormPrimitive.Control asChild>
              {/* @ts-expect-error text-area element fails to comply to expected input */}
              <Comp id={field.name} {...field.fieldProps} />
            </FormPrimitive.Control>
          </FormPrimitive.Field>
        )
      })}
      <FormPrimitive.Submit asChild>{submitButton}</FormPrimitive.Submit>
    </FormPrimitive.Root>
  )
}

type FieldGroupProps = {
  fieldGroupProps: Field
  type: GroupFieldType
  groupClassName?: string
}

function FieldGroup({ fieldGroupProps, type, groupClassName }: FieldGroupProps) {
  const Comp = FIELD_TYPES_COMPONENTS[type]
  return (
    <FormPrimitive.Field name={fieldGroupProps.name} className="flex flex-col gap-2">
      <FormPrimitive.Label className="text-xs leading-[1.375rem]">
        {fieldGroupProps.label}
      </FormPrimitive.Label>
      <div
        className={cn({
          'flex flex-col gap-2': !groupClassName,
          [groupClassName!]: groupClassName,
        })}
      >
        {(fieldGroupProps.fieldProps as React.ComponentProps<typeof Comp>[]).map(
          (element, index) => (
            // @ts-expect-error TS can't infer overloaded props
            <Comp key={index} name={fieldGroupProps.name} {...element} />
          )
        )}
      </div>
    </FormPrimitive.Field>
  )
}
