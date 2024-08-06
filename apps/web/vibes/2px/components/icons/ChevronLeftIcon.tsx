export const ChevronLeftIcon: React.FC<React.ComponentPropsWithoutRef<'svg'>> = ({
  className,
  ...props
}) => {
  return (
    <svg
      width="16"
      height="18"
      viewBox="0 0 16 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path d="M12 1L4 9L12 17" stroke="currentColor" strokeWidth="2" />
    </svg>
  )
}
ChevronLeftIcon.displayName = 'ChevronLeftIcon'
