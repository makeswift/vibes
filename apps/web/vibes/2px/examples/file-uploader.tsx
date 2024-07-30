'use client'

import { useState } from 'react'

import FileUploader from '@/vibes/2px/components/file-uploader'

export default function Preview() {
  const [file, setFile] = useState<File | undefined>(undefined)
  return (
    <div className="flex min-h-48 items-center justify-center bg-white p-5 sm:min-h-64 sm:p-8 lg:min-h-80 lg:p-12">
      <FileUploader
        limitMessage="Uploads limited to 15mb"
        file={file}
        setFile={setFile}
        variant="default"
        disabled={false}
      />
    </div>
  )
}
