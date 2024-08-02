import ProductCard from '@/vibes/soul/components/product-card'
import ProductDetail from '@/vibes/soul/components/product-detail'

const product = {
  name: "Men's Long Sleeve Jersey",
  price: {
    type: 'static',
    value: 39.95,
  },
  image: 'https://rstr.in/monogram/vibes/pVfZNkBI_Rd',
  ctaLink: { href: '/' },
}

const images = [
  'https://rstr.in/monogram/vibes/pVfZNkBI_Rd',
  'https://rstr.in/monogram/vibes/nBQFO6MyZ34',
  'https://rstr.in/monogram/vibes/11zZTfNCpui',
  'https://rstr.in/monogram/vibes/h4YqOhXhxfm',
  'https://rstr.in/monogram/vibes/GQxaw-DlEYn',
  'https://rstr.in/monogram/vibes/WOTVa86be5S',
]

export default function Preview() {
  return (
    <div className="min-h-48">
      <ProductDetail
        product={product as ProductCard}
        images={images}
        rating={4.5}
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
        options={['XS', 'S', 'M', 'L', 'XL', 'XXL']}
      />
    </div>
  )
}
