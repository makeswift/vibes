import CopyCommand from '.'

export default function Preview() {
  return (
    <div className="flex min-h-48 items-center justify-center bg-[#07090D] p-16 sm:min-h-64 lg:min-h-80">
      <CopyCommand buttonText="npm install @radix-ui/react" />
    </div>
  )
}
