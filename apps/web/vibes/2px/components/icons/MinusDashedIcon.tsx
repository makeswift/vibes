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

MinusDashedIcon.displayName = 'MinusDashedIcon'
