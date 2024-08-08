export const PlayIcon: React.FC<React.ComponentPropsWithoutRef<'svg'>> = ({
  className,
  ...props
}) => {
  return (
    <svg
      width="17"
      height="18"
      viewBox="0 0 17 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path d="M15 8.99998L4.5 15.9282L4.5 2.07178L15 8.99998Z" stroke="black" strokeWidth="2" />
    </svg>
  )
}
PlayIcon.displayName = 'PlayIcon'
