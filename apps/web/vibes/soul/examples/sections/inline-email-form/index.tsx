import { InlineEmailForm } from '@/vibes/soul/sections/inline-email-form';

import { parseWithZod } from '@conform-to/zod';
import { z } from 'zod';

export default function Preview() {
  return (
    <div className="p-10">
      <InlineEmailForm
        action={async (lastResult, formData) => {
          'use server';

          const schema = z.object({
            email: z.string().email(),
          });

          const submission = parseWithZod(formData, { schema });

          if (submission.status !== 'success') {
            return { lastResult: submission.reply({ formErrors: ['Boom!'] }) };
          }

          return { lastResult: submission.reply(), successMessage: 'Subscribed!' };
        }}
      />{' '}
    </div>
  );
}
