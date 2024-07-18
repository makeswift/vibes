function Step({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative border-l border-dashed border-foreground pb-4 pl-8 [counter-increment:step] before:absolute before:-top-1.5 before:left-0 before:flex before:h-9 before:w-9 before:-translate-x-1/2 before:items-center before:justify-center before:rounded-full before:border before:border-dashed before:border-foreground before:bg-background before:text-sm before:font-bold before:content-[counter(step)] after:-left-0.5 after:-top-0.5 after:h-10 after:w-10 after:-translate-x-1/2 after:rounded-full last:border-l-0 last:pb-0 md:pl-10 [&>h1]:mt-0 [&>h2]:mt-0 [&>h3]:mt-0">
      {children}
    </div>
  )
}

function Steps({ children }: { children: React.ReactNode }) {
  return (
    <div className="[&>div]:step steps mt-8 pl-4 [counter-reset:step] first:mt-0 md:my-10 [&_p:first-child]:mt-0 [&_p:last-child]:mb-0">
      {children}
    </div>
  )
}

export { Step, Steps }
