import { SubmissionResult } from '@conform-to/react';
import { parseWithZod } from '@conform-to/zod';

import {
  changePasswordSchema,
  updateAccountSchema,
} from '@/vibes/soul/sections/account-settings/schema';
import { UpdateAccountAction } from '@/vibes/soul/sections/account-settings/update-account-form';

export const updateAccountAction: UpdateAccountAction = async (prevState, formData) => {
  'use server';

  const submission = parseWithZod(formData, { schema: updateAccountSchema });

  if (submission.status !== 'success') {
    return {
      account: prevState.account,
      lastResult: submission.reply({ formErrors: ['Boom!'] }),
    };
  }

  await new Promise((resolve) => setTimeout(resolve, 1000));

  return {
    account: submission.value,
    successMessage: 'Account updated!',
    lastResult: submission.reply(),
  };
};

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

  return submission.reply();
}
