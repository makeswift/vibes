export function PlusDashedIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="84"
      height="84"
      viewBox="0 0 84 84"
      fill="none"
    >
      <rect
        x="1"
        y="1"
        width="82"
        height="82"
        rx="41"
        stroke="currentColor"
        strokeWidth="2"
        strokeDasharray="4 4"
      />
      <path d="M22 41H62V43H22V41Z" fill="currentColor" />
      <path d="M41 62L41 22L43 22L43 62L41 62Z" fill="currentColor" />
    </svg>
  )
}

export function PlusSolidIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="80"
      height="80"
      viewBox="0 0 80 80"
      fill="none"
    >
      <rect x="1" y="1" width="78" height="78" rx="39" stroke="currentColor" strokeWidth="2" />
      <path d="M20 39H60V41H20V39Z" fill="currentColor" strokeWidth="2" />
      <path d="M39 60L39 20L41 20L41 60L39 60Z" fill="currentColor" />
    </svg>
  )
}

export function MinusDashedIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="84"
      height="84"
      viewBox="0 0 84 84"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="1"
        y="1"
        width="82"
        height="82"
        rx="41"
        stroke="currentColor"
        strokeWidth="2"
        strokeDasharray="4 4"
      />
      <path d="M22 41H62V43H22V41Z" fill="currentColor" />
    </svg>
  )
}

export function MinusSolidIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="80"
      height="80"
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="1" y="1" width="78" height="78" rx="39" stroke="currentColor" strokeWidth="2" />
      <path d="M20 39H60V41H20V39Z" fill="currentColor" />
    </svg>
  )
}
