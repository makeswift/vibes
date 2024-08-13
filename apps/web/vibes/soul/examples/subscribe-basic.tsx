// import { redirect } from 'next/navigation'
// import { SubmissionResult } from '@conform-to/react'
// import { parseWithZod } from '@conform-to/zod'
// import { z } from 'zod'
import SubscribeBasic from '@/vibes/soul/components/subscribe-basic'

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
  return (
    <SubscribeBasic
      title="Sign up for our newsletter"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
    />
  )
}
