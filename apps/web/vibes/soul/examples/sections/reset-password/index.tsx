import { ResetPassword } from '@/vibes/soul/sections/reset-password';

import { SubmissionResult } from '@conform-to/react';
import { parseWithZod } from '@conform-to/zod';
import { schema } from '@/vibes/soul/sections/reset-password/schema';

export default function Preview() {
  return <ResetPassword action={resetPasswordAction} />;
}

async function resetPasswordAction(
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

  return { lastResult: submission.reply({ resetForm: true }), successMessage: 'Password updated' };
}
