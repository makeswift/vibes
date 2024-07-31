'use client'

import Rotate from '@/vibes/soul/components/icons/Rotate'
import Star from '@/vibes/soul/components/icons/Star'
import Truck from '@/vibes/soul/components/icons/Truck'

export interface Icon {
  icon: string
  className?: string
}

export const Icon = function Icon({ icon, className = '' }: Icon) {
  const renderIcon = () => {
    switch (icon) {
      case 'truck':
        return <Truck className={className} />
      case 'rotate':
        return <Rotate className={className} />
      case 'star':
        return <Star className={className} />
      default:
        return null
    }
  }

  return <>{renderIcon()}</>
}

export default Icon
