import { SubmissionResult } from '@conform-to/react';
import { parseWithZod } from '@conform-to/zod';

import { DynamicForm } from '@/vibes/soul/form/dynamic-form';
import { Field, FieldGroup, schema } from '@/vibes/soul/form/dynamic-form/schema';

export default function Preview() {
  return (
    <div className="p-10">
      <DynamicForm action={action} fields={fields} submitLabel="Submit" />
    </div>
  );
}

export const fields = [
  [
    { type: 'text', label: 'First Name', name: 'first-name', required: true },
    { type: 'text', label: 'Last Name', name: 'last-name', required: true },
  ],
  { type: 'email', label: 'Email', name: 'email', required: true },
  { type: 'password', label: 'Password', name: 'password', required: true },
  { type: 'confirm-password', label: 'Confirm password', name: 'confirm-password', required: true },
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
