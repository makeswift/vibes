import ProductDescription from '@/vibes/soul/components/product-description'

export default function Preview() {
  const accordions = [
    {
      title: 'Description',
      body: 'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien.',
    },
    {
      title: 'Description',
      body: 'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien.',
    },
    {
      title: 'Description',
      body: 'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien.',
    },
    {
      title: 'Description',
      body: 'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien.',
    },
  ]

  const image = {
    url: 'https://images.unsplash.com/photo-1694425182799-7f6c39d73e42',
    dimensions: {
      width: 467,
      height: 600,
    },
    alt: 'Plants',
  }

  return (
    <div className="bg-background @container">
      <ProductDescription accordions={accordions} image={image} />
    </div>
  )
}
