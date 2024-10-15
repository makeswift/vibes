import { Discount } from '@/vibes/soul/components/discount'

export default function Preview() {
  return (
    <Discount
      backgroundImage="https://rstr.in/monogram/vibes/-ZKYHmBgOcN"
      discounts={[
        {
          label: '20% off',
          code: 'TAKE20',
        },
        {
          label: '5% off',
          code: 'TAKE5',
        },
        {
          label: '10% off',
          code: 'TAKE10',
        },
        {
          label: '50% off',
          code: 'TAKE50',
        },
        {
          label: '15% off',
          code: 'TAKE15',
        },
      ]}
    />
  )
}
