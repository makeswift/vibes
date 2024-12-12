import { SignUpSection } from '@/vibes/soul/sections/sign-up-section';

import { action, fields } from './actions';

export default function Preview() {
  return <SignUpSection action={action} fields={fields} />;
}
