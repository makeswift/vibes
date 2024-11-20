import { type ClassValue, clsx } from 'clsx'
import { isValidElement } from 'react'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function slugify(text: string): string {
  return text.toLowerCase().replace(/(\s+)|([.,!?:;'\"\'-])/g, '-')
}

export function getNodeTextContent(node: React.ReactNode): string {
  if (typeof node === 'string' || typeof node === 'number') {
    return String(node)
  }

  if (
    node != null &&
    typeof node === 'object' &&
    'props' in node &&
    typeof node.props === 'object' &&
    node.props !== null &&
    'children' in node.props &&
    isValidElement(node.props.children)
  ) {
    return getNodeTextContent(node.props.children)
  }

  if (Array.isArray(node)) {
    return node.map(getNodeTextContent).join('')
  }

  return ''
}

export function exists<T>(value: T | null | undefined): value is NonNullable<T> {
  return value !== null && value !== undefined
}
