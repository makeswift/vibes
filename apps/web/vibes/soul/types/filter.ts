export interface CheckboxGroupFilterOption {
  label: string
  value: string
}

export interface CheckboxGroupFilter {
  type: 'checkbox-group'
  label: string
  paramName: string
  options: CheckboxGroupFilterOption[]
}

export interface ToggleGroupFilter {
  type: 'toggle-group'
  label: string
  paramName: string
  options: { label: string; value: string }[]
}

export interface RangeFilter {
  type: 'range'
  label: string
  minParamName: string
  maxParamName: string
  min?: number
  max?: number
  minLabel?: string
  maxLabel?: string
  minPrepend?: React.ReactNode
  maxPrepend?: React.ReactNode
  minPlaceholder?: string
  maxPlaceholder?: string
}

export interface RatingFilter {
  type: 'rating'
  label: string
  paramName: string
}

export interface Option {
  label: string
  value: string
}

export type Filter = ToggleGroupFilter | RangeFilter | RatingFilter | CheckboxGroupFilter
