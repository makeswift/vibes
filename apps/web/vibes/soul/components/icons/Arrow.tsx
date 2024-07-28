import clsx from 'clsx'

type Props = {
  className?: string
  size?: 'default' | 'small'
  direction?: 'left' | 'right' | 'up' | 'down'
}

export default function Arrow(
  { className, size = 'default', direction }: Props,
  props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={clsx(className, {
        'scale-[0.833]': size === 'small',
        '-rotate-45': direction === 'up',
        'rotate-[135deg]': direction === 'down',
        '-rotate-[135deg]': direction === 'left',
        'rotate-45': direction === 'right',
      })}
      {...props}
    >
      <path
        d="M7 17L17 7"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 7H17V17"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
