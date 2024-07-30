export default function Chevron(props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 10 10"
      width="16"
      className="mt-1 shrink-0 [&>line]:origin-center [&>line]:stroke-contrast-300 [&>line]:transition [&>line]:duration-300 [&>line]:ease-out [&>line]:group-hover:stroke-foreground"
      {...props}
    >
      {/* Left Line of Chevron */}
      <line
        x1="2"
        y1="2"
        x2="5"
        y2="5"
        className="group-data-[state=open]:-translate-y-[3px] group-data-[state=open]:-rotate-90"
        stroke="currentColor"
        strokeLinecap="round"
      />
      {/* Right Line of Chevron */}
      <line
        x1="8"
        y1="2"
        x2="5"
        y2="5"
        className="group-data-[state=open]:-translate-y-[3px] group-data-[state=open]:rotate-90"
        stroke="currentColor"
        strokeLinecap="round"
      />
    </svg>
  )
}
