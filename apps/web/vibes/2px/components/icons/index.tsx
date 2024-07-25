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
