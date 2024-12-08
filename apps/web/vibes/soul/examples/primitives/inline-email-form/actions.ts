import { SubmissionResult } from '@conform-to/react';
import { parseWithZod } from '@conform-to/zod';

import { schema } from '@/vibes/soul/primitives/inline-email-form/schema';

export async function action(lastResult: SubmissionResult | null, formData: FormData) {
  'use server';

  const submission = parseWithZod(formData, { schema });

  if (submission.status !== 'success') {
    return submission.reply({ formErrors: ['Boom!'] });
  }

  // Simulate a network request
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return { ...submission.reply(), successMessage: 'Subscribed!' };
}
