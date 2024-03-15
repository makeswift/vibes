export function Step({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative border-l-2 border-dotted border-black pb-8 pl-10 [counter-increment:step] before:absolute before:left-0 before:top-0 before:-ml-[1px] before:flex before:h-10 before:w-10 before:-translate-x-1/2 before:items-center before:justify-center before:rounded-full before:border before:border-black before:bg-white before:font-bold before:drop-shadow-sm before:content-[counter(step)] last:border-l-0 last:pb-0 [&>h1]:mt-0 [&>h2]:mt-0 [&>h3]:mt-0">
      {children}
    </div>
  )
}

export function Steps({ children }: { children: React.ReactNode }) {
  return (
    <div className="[&>div]:step steps pl-4 [counter-reset:step] [&_p:first-child]:mt-0 [&_p:last-child]:mb-0">
      {children}
    </div>
  )
}
