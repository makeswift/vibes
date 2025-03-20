import { SubmissionResult } from '@conform-to/react';
import { parseWithZod } from '@conform-to/zod';

import { ForgotPassword } from '@/vibes/soul/sections/forgot-password';
import { schema } from '@/vibes/soul/sections/forgot-password/schema';

export default function Preview() {
  return <ForgotPassword action={forgotPasswordAction} />;
}

async function forgotPasswordAction(
  state: { lastResult: SubmissionResult | null; successMessage?: string },
  formData: FormData,
): Promise<{ lastResult: SubmissionResult | null; successMessage?: string }> {
  'use server';

  const submission = parseWithZod(formData, { schema });

  if (submission.status !== 'success') {
    return { lastResult: submission.reply({ formErrors: ['Boom!'] }) };
  }

  // Simulate sending email
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return {
    lastResult: submission.reply(),
    successMessage: 'Check your email for a reset link',
  };
}
