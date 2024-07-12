'use client'

import { TabsList, TabsTrigger } from '@/components/ui/tabs'

import { Button } from '../ui/button'
import { CopyButton } from '../ui/copy-button'
import { BrandSelect } from './brand-select'
import { usePreviewContext } from './preview-context'

interface Props {
  clipboard: string
}

export function Toolbar({ clipboard }: Props) {
  const { width, isDragging, zoom, resize } = usePreviewContext()
  const actualWidth = width && width / zoom

  return (
    <div className="flex items-center">
      <TabsList className="flex-1">
        <TabsTrigger value="preview">Preview</TabsTrigger>
        <TabsTrigger value="code">Code</TabsTrigger>
      </TabsList>
      <div className="flex flex-1 justify-center">
        {actualWidth && isDragging && (
          <div className="font-body text-sm">{`${Math.round(actualWidth)}px @ ${Math.round(zoom * 100)}%`}</div>
        )}
      </div>
      <div className="flex flex-1 justify-end gap-x-2">
        <div className="flex gap-x-2">
          <Button onClick={() => resize(320)}>Mobile</Button>
          <Button onClick={() => resize(768)}>Tablet</Button>
          <Button onClick={() => resize(null)}>Fill</Button>
        </div>

        <BrandSelect />
        <CopyButton clipboard={clipboard} />
      </div>
    </div>
  )
}
