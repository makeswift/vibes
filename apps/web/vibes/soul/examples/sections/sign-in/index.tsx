import { SignIn } from '@/vibes/soul/sections/sign-in';
import { schema } from '@/vibes/soul/sections/sign-in/schema';
import { SubmissionResult } from '@conform-to/react';
import { parseWithZod } from '@conform-to/zod';

export default function Preview() {
  return <SignIn action={signInAction} forgotPasswordHref="#" />;
}

async function signInAction(lastResult: SubmissionResult | null, formData: FormData) {
  'use server';

  const submission = parseWithZod(formData, { schema });

  if (submission.status !== 'success') {
    return submission.reply({ formErrors: ['Boom!'] });
  }

  // Simulate a network request
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // const user = await logIn(submission.value)

  return submission.reply({ resetForm: true });
}
