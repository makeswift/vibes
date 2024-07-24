export default function ShoppingBag(
  props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M5 1.66602L2.5 4.99935V16.666C2.5 17.108 2.67559 17.532 2.98816 17.8445C3.30072 18.1571 3.72464 18.3327 4.16667 18.3327H15.8333C16.2754 18.3327 16.6993 18.1571 17.0118 17.8445C17.3244 17.532 17.5 17.108 17.5 16.666V4.99935L15 1.66602H5Z"
        stroke="#131313"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M2.5 5H17.5" stroke="#131313" stroke-linecap="round" stroke-linejoin="round" />
      <path
        d="M13.3327 8.33398C13.3327 9.21804 12.9815 10.0659 12.3564 10.691C11.7313 11.3161 10.8834 11.6673 9.99935 11.6673C9.11529 11.6673 8.26745 11.3161 7.64233 10.691C7.0172 10.0659 6.66602 9.21804 6.66602 8.33398"
        stroke="#131313"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
