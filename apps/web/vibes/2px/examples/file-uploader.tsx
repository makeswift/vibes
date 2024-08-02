'use client'

import { useState } from 'react'

import FileUploader from '@/vibes/2px/components/file-uploader'

export default function Preview() {
  return (
    <div className="flex min-h-48 flex-col justify-center gap-5 bg-white p-5 sm:min-h-64 sm:p-8 lg:min-h-80 lg:p-12">
      <FileUploader label="Uploads limited to 15mb" variant="default" multiple />
      <hr />
      <FileUploader variant="error" />

      <hr />
      <FileUploader variant="success" />

      <hr />
      <FileUploader disabled />
    </div>
  )
}
