import { SubmissionResult } from '@conform-to/react';
import { parseWithZod } from '@conform-to/zod';

import { Field, FieldGroup, schema } from '@/vibes/soul/form/dynamic-form/schema';

export const fields = [
  [
    {
      type: 'text',
      label: 'First name',
      name: 'first-name',
      required: true,
      placeholder: 'First name',
    },
    {
      type: 'text',
      label: 'Last Name',
      name: 'last-name',
      required: true,
      placeholder: 'Last name',
    },
  ],
  { type: 'email', label: 'Email', name: 'email', required: true, placeholder: 'Email' },
  {
    type: 'password',
    label: 'Password',
    name: 'password',
    required: true,
    placeholder: 'Password',
  },
  {
    type: 'confirm-password',
    label: 'Confirm password',
    name: 'confirm-password',
    required: true,
    placeholder: 'Confirm password',
  },
] satisfies Array<Field | FieldGroup<Field>>;

export async function action(
  prevState: { fields: Array<Field | FieldGroup<Field>>; lastResult: SubmissionResult | null },
  payload: FormData,
) {
  'use server';

  const submission = parseWithZod(payload, { schema: schema(prevState.fields) });

  if (submission.status !== 'success') {
    return {
      fields: prevState.fields,
      lastResult: submission.reply({ formErrors: ['Boom!'] }),
    };
  }

  await new Promise((resolve) => setTimeout(resolve, 1000));

  return {
    fields: prevState.fields,
    lastResult: submission.reply({ resetForm: true }),
  };
}
