import Accordions from '.'

export default function Preview() {
  return (
    <div className="bg-[#07090D] p-10 first:mt-0 md:min-h-80">
      <Accordions accordions={[{ title: 'This is a title', body: 'This is the body!' }]} />
    </div>
  )
}
