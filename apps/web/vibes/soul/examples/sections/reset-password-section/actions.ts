import { SubmissionResult } from '@conform-to/react';
import { parseWithZod } from '@conform-to/zod';

import { schema } from '@/vibes/soul/sections/forgot-password-section/schema';

export async function resetPasswordAction(
  lastResult: { lastResult: SubmissionResult | null; successMessage?: string },
  formData: FormData,
): Promise<{ lastResult: SubmissionResult | null; successMessage?: string }> {
  'use server';

  const submission = parseWithZod(formData, { schema });

  if (submission.status !== 'success') {
    return { lastResult: submission.reply({ formErrors: ['Boom!'] }) };
  }

  // Simulate a network request
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // const user = await logIn(submission.value)

  return { lastResult: submission.reply({ resetForm: true }), successMessage: 'Password updated' };
}
