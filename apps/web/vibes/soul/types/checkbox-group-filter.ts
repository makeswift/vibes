import { CheckboxGroupFilterOption } from './checkbox-group-filter-option'

export interface CheckboxGroupFilter {
  type: 'checkbox-group'
  label: string
  name: string
  options: CheckboxGroupFilterOption[]
}
