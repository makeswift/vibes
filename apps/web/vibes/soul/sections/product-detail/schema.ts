import { z } from 'zod'

type FormField = {
  name: string
  label?: string
  errors?: string[]
  required?: boolean
}

type RadioField = {
  type: 'radio-group'
  options: { label: string; value: string }[]
  defaultValue?: string
} & FormField

type SelectField = {
  type: 'select'
  options: { label: string; value: string }[]
  defaultValue?: string
} & FormField

type CheckboxField = {
  type: 'checkbox'
  defaultValue?: string
} & FormField

type NumberInputField = {
  type: 'number'
  defaultValue?: string
  min?: number
  max?: number
} & FormField

type TextInputField = {
  type: 'text'
  defaultValue?: string
  pattern?: string
} & FormField

type TextAreaField = {
  type: 'textarea'
  defaultValue?: string
  pattern?: string
} & FormField

type DateField = {
  type: 'date'
  defaultValue?: string
  pattern?: string
} & FormField

type SwatchRadioFieldOption =
  | {
      type: 'color'
      value: string
      label: string
      color: string
      disabled?: boolean
    }
  | {
      type: 'image'
      value: string
      label: string
      image: { src: string; alt: string }
      disabled?: boolean
    }

type SwatchRadioField = {
  type: 'swatch-radio-group'
  defaultValue?: string
  options: SwatchRadioFieldOption[]
} & FormField

type CardRadioField = {
  type: 'card-radio-group'
  defaultValue?: string
  options: {
    value: string
    label: string
    image: { src: string; alt: string }
    disabled?: boolean
  }[]
} & FormField

type ButtonRadioField = {
  type: 'button-radio-group'
  defaultValue?: string
  pattern?: string
  options: {
    value: string
    label: string
    disabled?: boolean
  }[]
} & FormField

export type Field =
  | RadioField
  | CheckboxField
  | NumberInputField
  | TextInputField
  | TextAreaField
  | DateField
  | SwatchRadioField
  | CardRadioField
  | ButtonRadioField
  | SelectField

export function schema(fields: Field[]) {
  const schema: Record<string, z.ZodType<string | number | boolean | Date | undefined>> = {
    id: z.string(),
    quantity: z.number().min(1),
  }

  fields.forEach(field => {
    let fieldSchema
    switch (field.type) {
      case 'number':
        fieldSchema = z.number()

        if (field.min != null) fieldSchema = fieldSchema.min(field.min)
        if (field.max != null) fieldSchema = fieldSchema.max(field.max)

        schema[field.name] = fieldSchema
        break
      default:
        fieldSchema = z.string()

        schema[field.name] = fieldSchema
        break
    }

    if (!field.required) schema[field.name] = schema[field.name].optional()
  })

  return z.object(schema)
}
