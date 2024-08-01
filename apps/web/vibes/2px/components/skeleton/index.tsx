import { cn } from '@/lib/utils'

import style from './index.module.css'

interface Props {
  className?: string
}

export default function Skeleton({ className }: Props) {
  return <div className={cn(style.skeleton, 'h-full w-full', className)} />
}
