export default function Chevron(props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 10 10" width="16" {...props}>
      <line
        x1="2"
        y1="2"
        x2="5"
        y2="5"
        className="chevron-line left-line"
        strokeLinecap="round"
      ></line>
      <line
        x1="8"
        y1="2"
        x2="5"
        y2="5"
        className="chevron-line right-line"
        strokeLinecap="round"
      ></line>
    </svg>
  )
}
