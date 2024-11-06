// import { redirect } from 'next/navigation'
// import { SubmissionResult } from '@conform-to/react'
// import { parseWithZod } from '@conform-to/zod'
// import { z } from 'zod'
import { action } from '@/vibes/soul/examples/primitives/inline-email-form/actions'
import { Subscribe } from '@/vibes/soul/sections/subscribe'

// async function action(prevState: unknown, formData: FormData): Promise<SubmissionResult> {
//   'use server'

//   const submission = parseWithZod(formData, {
//     schema: z.object({
//       email: z.string().email(),
//     }),
//   })

//   console.log({ submission })

//   if (submission.status !== 'success') {
//     return submission.reply()
//   }

//   return redirect('/f?value=')
// }

export default function Preview() {
  const image = {
    src: 'https://rstr.in/monogram/vibes/m12FEyfnuDl',
    alt: 'Lady with plant',
  }

  return (
    <div className="flex flex-col gap-2">
      <Subscribe
        image={image}
        title="Sign up for our newsletter"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
        action={action}
      />
      <Subscribe
        title="Sign up for our newsletter"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
        action={action}
      />
    </div>
  )
}
