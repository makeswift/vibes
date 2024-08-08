export const InfoIcon: React.FC<React.ComponentPropsWithoutRef<'svg'>> = ({
  className,
  ...props
}) => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path
        d="M9 5V7M9 8V13M17 9C17 13.4183 13.4183 17 9 17C4.58172 17 1 13.4183 1 9C1 4.58172 4.58172 1 9 1C13.4183 1 17 4.58172 17 9Z"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  )
}
InfoIcon.displayName = 'InfoIcon'
