import Accordions from '.'

export default function Preview() {
  return (
    <div className="flex min-h-48 justify-center bg-[#07090D] p-16 sm:min-h-64 lg:min-h-80">
      <Accordions accordions={[{ title: 'This is a title', body: 'This is the body!' }]} />
    </div>
  )
}
