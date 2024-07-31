export const ChevronUpIcon: React.FC<React.ComponentPropsWithoutRef<'svg'>> = ({
  className,
  ...props
}) => {
  return (
    <svg
      width="18"
      height="16"
      viewBox="0 0 18 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path d="M1 12L9 4L17 12" stroke="currentColor" strokeWidth="2" />
    </svg>
  )
}
ChevronUpIcon.displayName = 'ChevronUpIcon'
