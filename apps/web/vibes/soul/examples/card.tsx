import { Card } from '@/vibes/soul/components/card'

export default function Preview() {
  return (
    <div className="flex min-h-48 items-center justify-center p-5 @container">
      <Card
        title="Low Maintenance"
        image={{ src: 'https://rstr.in/monogram/vibes/RopDQNbjTc_', altText: 'Low Maintenance' }}
        href="#"
      />
    </div>
  )
}
