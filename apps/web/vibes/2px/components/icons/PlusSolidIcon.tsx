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
PlusSolidIcon.displayName = 'PlusSolidIcon'
