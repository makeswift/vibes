import Link from 'next/link'

import { clsx } from 'clsx'

import './style.css'

export interface AnimatedLinkProps {
  href: string
  label: string
  className?: string
}

export const AnimatedLink = function AnimatedLink({ href, label, className }: AnimatedLinkProps) {
  return (
    <Link href={href} className={clsx('animated-link animated-underline', className)}>
      <span>{label}</span>
    </Link>
  )
}
