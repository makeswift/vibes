import { ResetPasswordSection } from '@/vibes/soul/sections/reset-password-section';

import { resetPasswordAction } from './actions';

export default function Preview() {
  return <ResetPasswordSection action={resetPasswordAction} />;
}
