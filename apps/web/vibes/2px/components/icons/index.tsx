import { cn } from '@/lib/utils'

export const SearchIcon: React.FC<React.ComponentPropsWithoutRef<'svg'>> = ({
  className,
  ...props
}) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      {...props}
    >
      <path
        d="M11.2426 11.2426L15 15M13 7C13 10.3137 10.3137 13 7 13C3.68629 13 1 10.3137 1 7C1 3.68629 3.68629 1 7 1C10.3137 1 13 3.68629 13 7Z"
        stroke="black"
        strokeWidth="2"
      />
    </svg>
  )
}

export const ChevronDownIcon: React.FC<React.ComponentPropsWithoutRef<'svg'>> = ({
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
      <path d="M1 4L9 12L17 4" stroke="black" stroke-width="2" />
    </svg>
  )
}
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
      <path d="M1 12L9 4L17 12" stroke="black" stroke-width="2" />
    </svg>
  )
}

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
      <path d="M12 1L4 9L12 17" stroke="black" stroke-width="2" />
    </svg>
  )
}

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
      <path d="M4 1L12 9L4 17" stroke="black" stroke-width="2" />
    </svg>
  )
}

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
      <path d="M16 3L6.375 13L2 8.45455" stroke="black" stroke-width="2" stroke-linecap="square" />
    </svg>
  )
}

export const CrossIcon: React.FC<React.ComponentPropsWithoutRef<'svg'>> = ({
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
        d="M15.8588 2.14288L2.14453 15.8572M2.14453 2.14288L15.8588 15.8572"
        stroke="black"
        stroke-width="2"
        stroke-linecap="square"
      />
    </svg>
  )
}

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
      <path d="M4 0V16M12 0V16" stroke="black" stroke-width="2" />
    </svg>
  )
}

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
      <path d="M15 8.99998L4.5 15.9282L4.5 2.07178L15 8.99998Z" stroke="black" stroke-width="2" />
    </svg>
  )
}

export const AlertIcon: React.FC<React.ComponentPropsWithoutRef<'svg'>> = ({
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
        d="M9 4V9M9 11V13M17 9C17 13.4183 13.4183 17 9 17C4.58172 17 1 13.4183 1 9C1 4.58172 4.58172 1 9 1C13.4183 1 17 4.58172 17 9Z"
        stroke="black"
        stroke-width="2"
      />
    </svg>
  )
}

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
        stroke="black"
        stroke-width="2"
      />
    </svg>
  )
}

export const LoadingIcon: React.FC<React.ComponentPropsWithoutRef<'svg'>> = ({
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
      className={cn('animate-spin', className)}
      {...props}
    >
      <circle cx="9" cy="9" r="8" stroke="black" stroke-width="2" stroke-dasharray="3 4" />
    </svg>
  )
}

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
      {...props}
    >
      <path
        d="M5 3H1V15H15V3H11M5 3V0M5 3H11M5 3V6M11 3V0M11 3V6"
        stroke="black"
        stroke-width="2"
      />
    </svg>
  )
}
