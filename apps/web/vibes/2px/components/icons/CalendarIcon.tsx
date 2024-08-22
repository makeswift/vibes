export const CalendarIcon: React.FC<React.ComponentPropsWithoutRef<'svg'>> = ({
  className,
  ...props
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      className={className}
      stroke="currentColor"
      {...props}
    >
      <path d="M5 3H1V15H15V3H11M5 3V0M5 3H11M5 3V6M11 3V0M11 3V6" strokeWidth="2" />
    </svg>
  )
}
CalendarIcon.displayName = 'CalendarIcon'
