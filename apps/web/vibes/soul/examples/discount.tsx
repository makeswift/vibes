import Discount from '@/vibes/soul/components/discount'

export default function Preview() {
  return (
    <Discount
      backgroundImage="https://rstr.in/monogram/vibes/K-F83RXTJsx"
      discounts={[
        {
          label: '20% off',
          code: 'TAKE5DEEWFNJNNKDKNFKN',
        },
        {
          label: '5% off',
          code: 'TAKE5DEEWFNJNNKDKNFKN',
        },
        {
          label: '10% off',
          code: 'TAKE5DEEWFNJNNKDKNFKN',
        },
        {
          label: '50% off',
          code: 'TAKE5DEEWFNJNNKDKNFKN',
        },
        {
          label: '15% off',
          code: 'TAKE5DEEWFNJNNKDKNFKN',
        },
      ]}
    />
  )
}
