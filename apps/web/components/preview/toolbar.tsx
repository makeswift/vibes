'use client'

import { TabsList, TabsTrigger } from '@/components/ui/tabs'

import { Button } from '../ui/button'
import { BrandSelect } from './brand-select'
import { usePreviewContext } from './preview-context'

interface Props {}

export function Toolbar({}: Props) {
  const { width, isDragging, zoom, resize } = usePreviewContext()

  return (
    <div className="flex items-center">
      <TabsList className="flex-1">
        <TabsTrigger value="preview">Preview</TabsTrigger>
        <TabsTrigger value="code">Code</TabsTrigger>
      </TabsList>
      <div className="flex flex-1 justify-center">
        {width && isDragging && (
          <div className="font-body text-sm">{`${Math.round(width / zoom)}px @ ${Math.round(zoom * 100)}%`}</div>
        )}
      </div>
      <div className="flex flex-1  justify-end gap-x-2">
        <div className="hidden gap-x-2 md:flex">
          <Button onClick={() => resize(320)}>Mobile</Button>
          <Button onClick={() => resize(768)}>Tablet</Button>
          <Button onClick={() => resize(null)}>Desktop</Button>
        </div>

        <BrandSelect />
      </div>
    </div>
  )
}
