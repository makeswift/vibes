import { FilterCheckboxOption } from './filter-checkbox-option'

interface Props {
  options: { label: string; value: string }[]
  name: string
}

export function FilterCheckboxGroup({ name, options }: Props) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map(({ label, value }) => {
        return <FilterCheckboxOption label={label} value={value} name={name} />
      })}
    </div>
  )
}
