import { TextArea } from '@/vibes/soul/components/textarea'

export default function Preview() {
  return (
    <div className="mx-auto max-w-2xl p-10">
      <TextArea label="Order Comments" placeholder="Please add custom requests here." />
    </div>
  )
}
