import { icons } from 'lucide-react'

export interface Icon {
  name: string
  color?: string
  size?: number
  className?: string
}

export const Icon = function Icon({ name, color, size, className = '' }: Icon) {
  const LucideIcon = icons[name as keyof typeof icons]

  return <LucideIcon color={color} size={size} strokeWidth={1} className={className} />
}
