import { SubmissionResult } from '@conform-to/react';
import { parseWithZod } from '@conform-to/zod';

import { schema } from '@/vibes/soul/sections/inline-email-form/schema';

export async function action(
  _lastResult: { lastResult: SubmissionResult | null },
  formData: FormData,
) {
  'use server';

  const submission = parseWithZod(formData, { schema });

  if (submission.status !== 'success') {
    return { lastResult: submission.reply({ formErrors: ['Boom!'] }) };
  }

  // Simulate a network request
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return { lastResult: submission.reply(), successMessage: 'Subscribed!' };
}
