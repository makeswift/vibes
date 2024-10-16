export interface CheckboxGroupFilterOption {
  label: string
  value: string
}

export interface CheckboxGroupFilter {
  type: 'checkbox-group'
  label: string
  name: string
  options: CheckboxGroupFilterOption[]
}

export interface RangeFilter {
  type: 'range'
  label: string
  name: string
  min?: number
  max?: number
  minLabel?: string
  maxLabel?: string
}

export interface RatingFilter {
  type: 'rating'
  label: string
  name: string
}

export interface Option {
  label: string
  value: string
}

export type Filter = CheckboxGroupFilter | RangeFilter | RatingFilter
