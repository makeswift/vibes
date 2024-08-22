'use client'

import { CheckIcon } from '@/vibes/2px/components/icons/CheckIcon'
import { CrossIcon } from '@/vibes/2px/components/icons/CrossIcon'
import Input from '@/vibes/2px/components/input'

export default function Preview() {
  return (
    <div className="flex min-h-48 flex-col justify-center gap-5 bg-white p-5 sm:min-h-64 sm:p-8 lg:min-h-80 lg:p-12">
      <Input variant="default" placeholder="Start typing..." />
      <hr />
      <Input
        variant="success"
        placeholder="Success input"
        icon={<CheckIcon className="h-6 w-6 text-success " />}
      />
      <hr />
      <Input
        placeholder="Error input"
        variant="error"
        icon={<CrossIcon className="h-6 w-6 text-error " />}
      />
      <hr />
      <Input disabled={true} placeholder="Disabled input" />
    </div>
  )
}
