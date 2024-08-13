'use client'

import { useState } from 'react'

function ExpandableText({
  text,
  maxCharCount = 300,
  className = '',
}: {
  text: string
  maxCharCount?: number
  className?: string
}) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <p className={className}>
      {text.length > maxCharCount && !isExpanded ? text.slice(0, maxCharCount) + '...' : text}
      {text.length > maxCharCount && (
        <button
          className="inline-block font-mono text-sm uppercase leading-[1.125rem] tracking-[0.02em] underline underline-offset-2"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? 'Read less' : 'Read more'}
        </button>
      )}
    </p>
  )
}

export default ExpandableText
