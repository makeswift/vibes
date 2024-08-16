'use client'

import React from 'react'

import TextArea from '@/vibes/2px/components/text-area'

export default function Preview() {
  return (
    <div className="flex min-h-48 flex-col  justify-center gap-5 bg-white p-5 sm:min-h-64 sm:p-8 lg:min-h-80 lg:p-12">
      <TextArea required={false} variant="default" disabled={false} placeholder="Start typing..." />
      <hr />

      <TextArea
        required={false}
        variant="default"
        disabled={true}
        placeholder="Disabled text area."
      />
      <hr />

      <TextArea
        required={false}
        variant="error"
        placeholder="Error text area."
        errorMessage="Something wrong happened!"
        error
      />

      <hr />

      <TextArea required={true} variant="success" placeholder="Successful text area." />
    </div>
  )
}
