import { DynamicFormSection } from '@/vibes/soul/sections/dynamic-form-section';

import { action, fields } from './actions';

export default function Preview() {
  return (
    <DynamicFormSection
      action={action}
      fields={fields}
      subtitle="Register an account with us to get updates and track your orders."
      title="Sign up"
    />
  );
}
