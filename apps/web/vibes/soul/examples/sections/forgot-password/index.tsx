import { ForgotPassword } from '@/vibes/soul/sections/forgot-password';

import { forgotPasswordAction } from './actions';

export default function Preview() {
  return <ForgotPassword action={forgotPasswordAction} />;
}
