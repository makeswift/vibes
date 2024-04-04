import CopyCommand from '.'

export default function Preview() {
  return (
    <div className="flex min-h-48 items-center justify-center bg-white">
      <CopyCommand buttonText="npm install @radix-ui/react" />
    </div>
  )
}
