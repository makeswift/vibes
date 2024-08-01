import Skeleton from '@/vibes/2px/components/skeleton'

export default function Preview() {
  return (
    <div className="relative flex bg-background p-5 ">
      <div className="mx-auto flex aspect-[3/4] w-full max-w-[450px] flex-col gap-5 border-2 border-foreground p-5">
        <Skeleton className="aspect-[4/3] h-auto" />
        <Skeleton className="mb-5 h-10 w-3/4" />
        <Skeleton className="h-5 w-full" />
        <Skeleton className="h-5 w-full" />
        <Skeleton className="h-5 w-full" />
        <Skeleton className="h-5 w-1/2" />
      </div>
    </div>
  )
}
