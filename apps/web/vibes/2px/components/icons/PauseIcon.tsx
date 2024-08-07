export const PauseIcon: React.FC<React.ComponentPropsWithoutRef<'svg'>> = ({
  className,
  ...props
}) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path d="M4 0V16M12 0V16" stroke="black" strokeWidth="2" />
    </svg>
  )
}
PauseIcon.displayName = 'PauseIcon'
