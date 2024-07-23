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
        className="fill-current"
        stroke="currentColor"
        d="M286.897 389.42V119.426l-51.471 111.586-122.029 14.469 90.219 83.431-23.949 120.529 107.23-60.021Z"
      />

      {/* Star stroke */}
      <path
        stroke={props.stroke || 'currentColor'}
        stroke-width="50.324"
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
        fill="#000"
        stroke="currentColor"
        d="M286.897 389.42V119.426l-51.471 111.586-122.029 14.469 90.219 83.431-23.949 120.529 107.23-60.021Z"
      />

      <path
        fill="#000"
        stroke="currentColor"
        d="M286.897 389.42V119.426l51.471 111.586 122.029 14.469-90.219 83.431 23.949 120.529-107.23-60.021Z"
      />

      {/* Star stroke */}
      <path
        stroke={props.stroke || 'currentColor'}
        stroke-width="50.324"
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
        stroke-width="50.324"
        d="m299.454 424.917-12.29-6.879-12.29 6.879-129.877 72.699 29.007-145.985 2.745-13.815-10.341-9.562L57.134 227.2l147.803-17.524 13.987-1.658 5.899-12.79 62.341-135.154 62.34 135.154 5.899 12.789 13.986 1.659L517.192 227.2 407.919 328.254l-10.34 9.562 2.745 13.815 29.006 145.985-129.876-72.699Z"
      />
    </svg>
  )
}

StarEmptyIcon.displayName = 'StarEmptyIcon'
