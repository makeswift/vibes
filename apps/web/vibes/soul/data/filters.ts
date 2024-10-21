import { Filter } from '@/vibes/soul/sections/products-list-section/filters-panel'

import { SoulBrandName } from '../brands'

export function getFilters(brand: SoulBrandName): Filter[] {
  return filters[brand]
}

const filters = {
  Electric: [
    {
      paramName: 'type',
      label: 'Type',
      type: 'toggle-group',
      options: [
        { label: 'Indoor', value: 'indoor' },
        { label: 'Outdoor', value: 'outdoor' },
        { label: 'Pet Friendly', value: 'pet-friendly' },
      ],
    },
    {
      paramName: 'size',
      label: 'Size',
      type: 'toggle-group',
      options: [
        { label: 'Small', value: 'sm' },
        { label: 'Medium', value: 'md' },
        { label: 'Large', value: 'lg' },
      ],
    },
    {
      minParamName: 'min-price',
      maxParamName: 'max-price',
      label: 'Price',
      type: 'range',
      min: 0,
      max: 200,
      minPrepend: '$',
      maxPrepend: '$',
    },
    {
      paramName: 'rating',
      label: 'Rating',
      type: 'rating',
    },
  ],
  Luxury: [
    {
      paramName: 'color',
      label: 'Color',
      type: 'toggle-group',
      options: [
        { label: 'Black', value: 'black' },
        { label: 'Red', value: 'red' },
        { label: 'Brown', value: 'brown' },
      ],
    },
    {
      paramName: 'size',
      label: 'Size',
      type: 'toggle-group',
      options: [
        { label: '5', value: '5' },
        { label: '5.5', value: '5.5' },
        { label: '6', value: '6' },
        { label: '6.5', value: '6.5' },
        { label: '7', value: '7' },
        { label: '7.5', value: '7.5' },
        { label: '8', value: '8' },
        { label: '8.5', value: '8.5' },
        { label: '9', value: '9' },
        { label: '9.5', value: '9.5' },
        { label: '10', value: '10' },
        { label: '10.5', value: '10.5' },
        { label: '11', value: '11' },
      ],
    },
    {
      minParamName: 'min-price',
      maxParamName: 'max-price',
      label: 'Price',
      type: 'range',
      min: 0,
      max: 500,
      minPrepend: '$',
      maxPrepend: '$',
    },
    {
      paramName: 'rating',
      label: 'Rating',
      type: 'rating',
    },
  ],
  Warm: [
    {
      paramName: 'color',
      label: 'Color',
      type: 'toggle-group',
      options: [
        { label: 'Red', value: 'red' },
        { label: 'Green', value: 'green' },
        { label: 'Blue', value: 'blue' },
      ],
    },
    {
      paramName: 'size',
      label: 'Size',
      type: 'toggle-group',
      options: [
        { label: 'Small', value: 'sm' },
        { label: 'Medium', value: 'md' },
        { label: 'Large', value: 'lg' },
      ],
    },
    {
      minParamName: 'min-price',
      maxParamName: 'max-price',
      label: 'Price',
      type: 'range',
      min: 0,
      max: 200,
      minPrepend: '$',
      maxPrepend: '$',
    },
    {
      paramName: 'rating',
      label: 'Rating',
      type: 'rating',
    },
  ],
} as const satisfies Record<SoulBrandName, [Filter, ...Filter[]]>
