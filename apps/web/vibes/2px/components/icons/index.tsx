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

SearchIcon.displayName = 'SearchIcon'

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
      <path d="M1 4L9 12L17 4" stroke="currentColor" strokeWidth="2" />
    </svg>
  )
}

ChevronDownIcon.displayName = 'ChevronDownIcon'

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
      <path d="M1 12L9 4L17 12" stroke="black" strokeWidth="2" />
    </svg>
  )
}

ChevronUpIcon.displayName = 'ChevronUpIcon'

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
      <path d="M12 1L4 9L12 17" stroke="black" strokeWidth="2" />
    </svg>
  )
}

ChevronLeftIcon.displayName = 'ChevronLeftIcon'

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
      <path d="M4 1L12 9L4 17" stroke="black" strokeWidth="2" />
    </svg>
  )
}

ChevronRightIcon.displayName = 'ChevronRightIcon'

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
      <path d="M16 3L6.375 13L2 8.45455" stroke="black" strokeWidth="2" strokeLinecap="square" />
    </svg>
  )
}

CheckIcon.displayName = 'CheckIcon'

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
        strokeWidth="2"
        strokeLinecap="square"
      />
    </svg>
  )
}

CrossIcon.displayName = 'CrossIcon'

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
        strokeWidth="2"
      />
    </svg>
  )
}

AlertIcon.displayName = 'AlertIcon'

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
        strokeWidth="2"
      />
    </svg>
  )
}

InfoIcon.displayName = 'InfoIcon'

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
      <circle cx="9" cy="9" r="8" strokeWidth="2" strokeDasharray="3 4" />
    </svg>
  )
}

LoadingIcon.displayName = 'LoadingIcon'

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
      <path d="M5 3H1V15H15V3H11M5 3V0M5 3H11M5 3V6M11 3V0M11 3V6" stroke="black" strokeWidth="2" />
    </svg>
  )
}

CalendarIcon.displayName = 'CalendarIcon'

export const StarHalfIcon: React.FC<React.ComponentPropsWithoutRef<'svg'>> = ({ ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 575 547"
      {...props}
      stroke="none"
    >
      <path
        className="fill-foreground"
        stroke="currentColor"
        d="M286.897 389.42V119.426l-51.471 111.586-122.029 14.469 90.219 83.431-23.949 120.529 107.23-60.021Z"
      />

      {/* Star stroke */}
      <path
        stroke={props.stroke || 'currentColor'}
        strokeWidth="50.324"
        d="m299.454 424.917-12.29-6.879-12.29 6.879-129.877 72.699 29.007-145.985 2.745-13.815-10.341-9.562L57.134 227.2l147.803-17.524 13.987-1.658 5.899-12.79 62.341-135.154 62.34 135.154 5.899 12.789 13.986 1.659L517.192 227.2 407.919 328.254l-10.34 9.562 2.745 13.815 29.006 145.985-129.876-72.699Z"
      />
    </svg>
  )
}

StarHalfIcon.displayName = 'StarHalfIcon'

export const StarFilledIcon: React.FC<React.ComponentPropsWithoutRef<'svg'>> = ({ ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 575 547"
      {...props}
      stroke="none"
    >
      <path
        className="fill-foreground"
        stroke="currentColor"
        d="M286.897 389.42V119.426l-51.471 111.586-122.029 14.469 90.219 83.431-23.949 120.529 107.23-60.021Z"
      />

      <path
        className="fill-foreground"
        stroke="currentColor"
        d="M286.897 389.42V119.426l51.471 111.586 122.029 14.469-90.219 83.431 23.949 120.529-107.23-60.021Z"
      />

      {/* Star stroke */}
      <path
        stroke={props.stroke || 'currentColor'}
        strokeWidth="50.324"
        d="m299.454 424.917-12.29-6.879-12.29 6.879-129.877 72.699 29.007-145.985 2.745-13.815-10.341-9.562L57.134 227.2l147.803-17.524 13.987-1.658 5.899-12.79 62.341-135.154 62.34 135.154 5.899 12.789 13.986 1.659L517.192 227.2 407.919 328.254l-10.34 9.562 2.745 13.815 29.006 145.985-129.876-72.699Z"
      />
    </svg>
  )
}

StarFilledIcon.displayName = 'StarFilledIcon'

export const StarEmptyIcon: React.FC<React.ComponentPropsWithoutRef<'svg'>> = ({ ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 575 547"
      {...props}
      stroke="none"
    >
      {/* Star stroke */}
      <path
        stroke={props.stroke || 'currentColor'}
        strokeWidth="50.324"
        d="m299.454 424.917-12.29-6.879-12.29 6.879-129.877 72.699 29.007-145.985 2.745-13.815-10.341-9.562L57.134 227.2l147.803-17.524 13.987-1.658 5.899-12.79 62.341-135.154 62.34 135.154 5.899 12.789 13.986 1.659L517.192 227.2 407.919 328.254l-10.34 9.562 2.745 13.815 29.006 145.985-129.876-72.699Z"
      />
    </svg>
  )
}

StarEmptyIcon.displayName = 'StarEmptyIcon'
