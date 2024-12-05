import { SignUpSection } from '@/vibes/soul/sections/sign-up-section';

import { signUpAction } from './actions';

export default function Preview() {
  return <SignUpSection action={signUpAction} />;
}
