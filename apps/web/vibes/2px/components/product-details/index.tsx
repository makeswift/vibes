import { cn } from '@/lib/utils'

type Detail = {
  label: string
  value: string
}

interface Props {
  className?: string
  details: Detail[]
}

export default function ProductDetails({ className, details }: Props) {
  return (
    <div className={cn('w-full', className)}>
      {details.map((detail, i) => (
        <div
          key={i}
          className="flex justify-between border-b-2 border-foreground px-5 py-[1.56rem] text-lg font-medium leading-[1.875em] -tracking-[-0.015em] "
        >
          <p className="max-w-[50%] text-start">{detail.label}</p>
          <p className="max-w-[50%] text-end ">{detail.value}</p>
        </div>
      ))}
    </div>
  )
}
