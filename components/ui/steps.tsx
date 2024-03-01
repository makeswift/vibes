import clsx from 'clsx'

function Step({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative border-l-2 border-dotted border-black pb-8 pl-10 [counter-increment:step] before:absolute before:left-0 before:top-0 before:-ml-[1px] before:flex before:h-10 before:w-10 before:-translate-x-1/2 before:items-center before:justify-center before:rounded-full before:border before:border-black before:bg-white before:font-bold before:content-[counter(step)] before:[box-shadow:-1px_3px_0_black]">
      {children}
    </div>
  )
}

export function Steps() {
  return (
    <div className="[&>div]:step steps pl-4 [counter-reset:step] [&_p:first-child]:mt-0 [&_p:last-child]:mb-0">
      <Step>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti hic nobis quasi neque
          quis! Et quas rerum delectus eos, debitis vitae eum cupiditate at aspernatur eveniet
          voluptatum sed quisquam ad.
        </p>
      </Step>
      <Step>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti hic nobis quasi neque
          quis! Et quas rerum delectus eos, debitis vitae eum cupiditate at aspernatur eveniet
          voluptatum sed quisquam ad.
        </p>
      </Step>
      <Step>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti hic nobis quasi neque
          quis! Et quas rerum delectus eos, debitis vitae eum cupiditate at aspernatur eveniet
          voluptatum sed quisquam ad.
        </p>
      </Step>
    </div>
  )
}
