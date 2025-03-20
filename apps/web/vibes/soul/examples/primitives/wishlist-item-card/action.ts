'use server';

import { SubmissionResult } from '@conform-to/react';

interface State {
  lastResult: SubmissionResult | null;
  successMessage?: React.ReactNode;
  errorMessage?: string;
}

export async function action(prevState: State, formData: FormData): Promise<State> {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return {
    lastResult: { status: 'success' },
    successMessage: 'Item added to wishlist!',
  };
}

export async function removeAction(prevState: State, formData: FormData): Promise<State> {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return {
    lastResult: { status: 'success' },
    successMessage: 'Item removed from wishlist!',
  };
}
