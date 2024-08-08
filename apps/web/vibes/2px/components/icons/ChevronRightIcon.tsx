export const ChevronRightIcon: React.FC<React.ComponentPropsWithoutRef<'svg'>> = ({
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
      <path d="M4 1L12 9L4 17" stroke="currentColor" strokeWidth="2" />
    </svg>
  )
}
ChevronRightIcon.displayName = 'ChevronRightIcon'
