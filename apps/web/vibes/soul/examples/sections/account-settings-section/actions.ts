import { SubmissionResult } from '@conform-to/react';
import { parseWithZod } from '@conform-to/zod';

import {
  changePasswordSchema,
  updateAccountSchema,
} from '@/vibes/soul/sections/account-settings-section/schema';

export async function updateAccountAction(lastResult: SubmissionResult | null, formData: FormData) {
  'use server';

  const submission = parseWithZod(formData, { schema: updateAccountSchema });

  if (submission.status !== 'success') {
    return submission.reply({ formErrors: ['Boom!'] });
  }

  // Simulate a network request
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // const user = await logIn(submission.value)

  return submission.reply({ resetForm: true });
}

export async function changePasswordAction(
  lastResult: SubmissionResult | null,
  formData: FormData,
) {
  'use server';

  const submission = parseWithZod(formData, { schema: changePasswordSchema });

  if (submission.status !== 'success') {
    return submission.reply({ formErrors: ['Boom!'] });
  }

  // Simulate a network request
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // const user = await logIn(submission.value)

  return submission.reply({ resetForm: true });
}
