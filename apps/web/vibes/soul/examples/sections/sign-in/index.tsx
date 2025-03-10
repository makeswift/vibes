import { SignIn } from '@/vibes/soul/sections/sign-in';

import { signInAction } from './actions';

export default function Preview() {
  return <SignIn action={signInAction} forgotPasswordHref="#" />;
}
