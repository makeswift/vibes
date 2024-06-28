import clsx from 'clsx'

interface Props {
  children: React.ReactNode
  className?: string
}

export default function Card({ children, className }: Props) {
  return (
    <div
      className={clsx(
        'pattern-shadow not-prose pattern-shadow-lg w-full border border-foreground bg-background',
        className
      )}
    >
      {children}
    </div>
  )
}
