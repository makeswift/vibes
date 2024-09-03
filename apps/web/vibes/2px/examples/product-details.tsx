import ProductDetails from '@/vibes/2px/components/product-details'

export default function Preview() {
  return (
    <div className="flex min-h-48 items-center justify-center bg-background p-5 sm:min-h-64 sm:p-8 lg:min-h-80 lg:p-12">
      <ProductDetails
        details={[
          { label: 'Dimensions', value: '200mm x 200mm' },
          {
            label: 'Weight',
            value: '600kg',
          },
          {
            label: 'Material',
            value: 'Pure molten hatred',
          },
          {
            label: 'Delivery size',
            value: '3000mm x 3000mm palette',
          },
          {
            label: 'Care instructions',
            value: 'Clean with a damp cloth',
          },
        ]}
      />
    </div>
  )
}
