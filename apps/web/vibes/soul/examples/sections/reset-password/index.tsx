import { ResetPassword } from '@/vibes/soul/sections/reset-password';

import { resetPasswordAction } from './actions';

export default function Preview() {
  return <ResetPassword action={resetPasswordAction} />;
}
