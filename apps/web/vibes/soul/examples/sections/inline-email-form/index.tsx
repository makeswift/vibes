import { InlineEmailForm } from '@/vibes/soul/sections/inline-email-form';

import { action } from './actions';

export default function Preview() {
  return (
    <div className="p-10">
      <InlineEmailForm action={action} />
    </div>
  );
}
