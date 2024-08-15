import * as FormPrimitive from '@radix-ui/react-form'

import { cn } from '@/lib/utils'
import Button from '@/vibes/2px/components/button'
import Checkbox, { Props as CheckboxProps } from '@/vibes/2px/components/checkbox'
import FileUploader, { Props as FileUploaderProps } from '@/vibes/2px/components/file-uploader'
import Input, { Props as InputProps } from '@/vibes/2px/components/input'
import RadioButton, { Props as RadioButtonProps } from '@/vibes/2px/components/radio-button'
import TextArea, { Props as TextAreaProps } from '@/vibes/2px/components/text-area'

type Field =
  | {
      name: string
      label: string
      type: 'text'
      fieldProps: InputProps
    }
  | {
      name: string
      label: string
      type: 'textarea'
      fieldProps: TextAreaProps
    }
  | {
      name: string
      label: string
      type: 'checkbox'
      fieldProps: CheckboxProps
    }
  | {
      name: string
      label: string
      type: 'radio'
      required: boolean
      fieldProps: RadioButtonProps[]
    }
  | {
      name: string
      label: string
      type: 'file'
      fieldProps: FileUploaderProps
    }

interface Props extends FormPrimitive.FormProps {
  className?: string
  fields: Field[]
  submitButton: React.ReactElement<typeof Button>
}

const FIELD_TYPES_COMPONENTS = {
  text: Input,
  textarea: TextArea,
  checkbox: Checkbox,
  radio: RadioButton,
  file: FileUploader,
}

export default function Form({ className, fields, submitButton }: Props) {
  return (
    <FormPrimitive.Root className={cn('font-body font-medium text-foreground', className)}>
      {fields.map(field => {
        const Comp = FIELD_TYPES_COMPONENTS[field.type]

        if (field.type === 'radio') {
          return <RadioGroup radioField={field} key={field.name} />
        }
        return (
          <FormPrimitive.Field name={field.name} key={field.name} className="flex flex-col gap-2">
            <FormPrimitive.Label htmlFor={field.name} className="text-xs leading-[1.375rem]">
              {field.label} {field.fieldProps.required && ' *'}
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

function RadioGroup({ radioField }: { radioField: Field }) {
  return (
    <FormPrimitive.Field name={radioField.name} className="flex flex-col gap-2">
      <FormPrimitive.Label className="text-xs leading-[1.375rem]">
        {radioField.label}
      </FormPrimitive.Label>
      <div className="flex flex-col gap-2">
        {(radioField.fieldProps as RadioButtonProps[]).map((radio, index) => (
          <RadioButton key={index} name={radioField.name} {...radio} />
        ))}
      </div>
    </FormPrimitive.Field>
  )
}
