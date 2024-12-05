import { ForgotPasswordSection } from '@/vibes/soul/sections/forgot-password-section';

import { forgotPasswordAction } from './actions';

export default function Preview() {
  return <ForgotPasswordSection action={forgotPasswordAction} />;
}
