export const CheckIcon: React.FC<React.ComponentPropsWithoutRef<'svg'>> = ({
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
      <path
        d="M16 3L6.375 13L2 8.45455"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
      />
    </svg>
  )
}
CheckIcon.displayName = 'CheckIcon'
