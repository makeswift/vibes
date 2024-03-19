import { cn } from '@/lib/utils'

const SHADOW = {
  small: 'dot-shadow-sm',
  large: 'dot-shadow-lg',
}

export function ComponentPreview({
  children,
  color,
  shadow,
}: {
  children: React.ReactNode
  color: string
  shadow: 'small' | 'large'
}) {
  return (
    <div
      className={cn(
        'dot-shadow mb-12 flex min-h-80 w-full items-center justify-center border border-black p-10',
        SHADOW[shadow]
      )}
      style={{ background: color }}
    >
      {children}
    </div>
  )
}
