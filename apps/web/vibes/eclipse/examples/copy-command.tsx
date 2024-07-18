import { CopyCommand } from '@/vibes/eclipse/components/copy-command'

export default function Preview() {
  return (
    <div className="flex min-h-48 items-center justify-center bg-[#07090D] p-5 sm:min-h-64 sm:p-8 lg:min-h-80 lg:p-12">
      <CopyCommand buttonText="npm install @radix-ui/react" />
    </div>
  )
}
