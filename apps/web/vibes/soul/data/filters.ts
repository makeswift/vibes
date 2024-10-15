import { Filter } from '../types/filter'

export const getFilters = (): Filter[] => {
  return [
    {
      name: 'color',
      label: 'Color',
      type: 'checkbox-group',
      options: [
        { label: 'Red', value: 'red' },
        { label: 'Green', value: 'green' },
        { label: 'Blue', value: 'blue' },
      ],
    },
    {
      name: 'size',
      label: 'Size',
      type: 'checkbox-group',
      options: [
        { label: 'Small', value: 'sm' },
        { label: 'Medium', value: 'md' },
        { label: 'Large', value: 'lg' },
      ],
    },
    {
      name: 'price',
      label: 'Price',
      type: 'range',
      min: 0,
      max: 200,
      minLabel: '$',
      maxLabel: '$',
    },
    {
      name: 'rating',
      label: 'Rating',
      type: 'rating',
    },
  ]
}
