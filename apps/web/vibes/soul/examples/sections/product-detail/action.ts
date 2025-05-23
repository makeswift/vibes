import { SubmissionResult } from '@conform-to/react';
import { parseWithZod } from '@conform-to/zod';

import { Field, schema } from '@/vibes/soul/sections/product-detail/schema';

export const fields = [
  {
    type: 'swatch-radio-group',
    label: 'Color',
    name: 'color',
    options: [
      { type: 'color', value: 'red', label: 'Red', color: '#ff0000' },
      { type: 'color', value: 'blue', label: 'Blue', color: '#0000ff' },
    ],
    required: true,
    defaultValue: 'red',
  },
  {
    type: 'button-radio-group',
    label: 'Size',
    name: 'size',
    options: [
      { value: 'sm', label: 'Small' },
      { value: 'md', label: 'Medium' },
      { value: 'lg', label: 'Large' },
    ],
    required: true,
  },
  {
    type: 'checkbox',
    label: 'Include Pot',
    name: 'pot',
  },
  {
    type: 'radio-group',
    label: 'Age',
    name: 'age',
    required: true,
    options: [
      { value: 'young', label: 'Young' },
      { value: 'mature', label: 'Mature' },
    ],
  },
  {
    type: 'select',
    label: 'Light requirements',
    name: 'light-requirements',
    required: true,
    options: [
      { value: 'low', label: 'Low light' },
      { value: 'partial', label: 'Partial light' },
      { value: 'direct', label: 'Direct light' },
    ],
  },
  {
    type: 'card-radio-group',
    label: 'Variety',
    name: 'variety',
    required: true,
    options: [
      {
        label: 'Small',
        value: 'sm',
        image: {
          src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTowNzAzMzk0Ni01NGNhLTQ3ZDYtODgyYi0wYWI3NTUzNTU4YjQ=/kv08IvX08j.jpeg',
          alt: 'Philodendron Imperial Red',
        },
      },
      {
        label: 'Medium',
        value: 'md',
        image: {
          src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZToyMTIwYzE1ZC01YzlkLTQ3MDgtOTZhOS1hZDkwYjVmNDAwZWY=/n0P83RMnClS%202930x3663.jpeg',
          alt: 'Monstera',
        },
      },
      {
        label: 'Large',
        value: 'lg',
        image: {
          src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTpmNjJhNTMyOC1hNzMwLTQxYjQtODE5Ny05ZDdlYWViMjJhMDQ=/AaZW4j2VTd4%202489x3111.jpeg',
          alt: 'Pink Caladium',
        },
        disabled: true,
      },
    ],
  },
] satisfies Field[];

export async function action(
  prevState: { fields: Field[]; lastResult: SubmissionResult | null },
  payload: FormData,
) {
  'use server';

  const submission = parseWithZod(payload, { schema: schema(fields) });

  if (submission.status !== 'success') {
    return {
      fields: prevState.fields,
      lastResult: submission.reply(),
    };
  }

  await new Promise((resolve) => setTimeout(resolve, 1000));

  return {
    fields: prevState.fields,
    lastResult: submission.reply({}),
    successMessage: 'Product(s) added to cart!',
  };
}
