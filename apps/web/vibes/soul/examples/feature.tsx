import Feature from '@/vibes/soul/components/feature'

export default function Preview() {
  const image = {
    url: 'https://rstr.in/monogram/vibes/ZHUBk7gO45U',
    dimensions: {
      width: 932,
      height: 1200,
    },
    alt: 'Biker in Mountains',
  }

  const link = {
    label: 'Shop Now',
    href: '/shop',
    target: '_self',
  }

  const list = [
    {
      icon: {
        url: 'https://rstr.in/monogram/vibes/7W7rHzIpxH_',
        dimensions: {
          width: 40,
          height: 40,
        },
        alt: 'Truck icon',
      },
      title: 'Free Shipping',
      description: 'On orders over $250',
    },
    {
      icon: {
        url: 'https://rstr.in/monogram/vibes/R_5m6jx6goY',
        dimensions: {
          width: 40,
          height: 40,
        },
        alt: 'Rotate icon',
      },
      title: 'Free Returns',
      description: 'On full priced items only',
    },
    {
      icon: {
        url: 'https://rstr.in/monogram/vibes/XsGywtgXa0I',
        dimensions: {
          width: 40,
          height: 40,
        },
        alt: 'Star icon',
      },
      title: '2 Year Warranty',
      description: 'As standard',
    },
    {
      icon: {
        url: 'https://rstr.in/monogram/vibes/7W7rHzIpxH_',
        dimensions: {
          width: 40,
          height: 40,
        },
        alt: 'Truck icon',
      },
      title: 'Free Shipping',
      description: 'On orders over $250',
    },
    {
      icon: {
        url: 'https://rstr.in/monogram/vibes/R_5m6jx6goY',
        dimensions: {
          width: 40,
          height: 40,
        },
        alt: 'Rotate icon',
      },
      title: 'Free Returns',
      description: 'On full priced items only',
    },
    {
      icon: {
        url: 'https://rstr.in/monogram/vibes/XsGywtgXa0I',
        dimensions: {
          width: 40,
          height: 40,
        },
        alt: 'Star icon',
      },
      title: '2 Year Warranty',
      description: 'As standard',
    },
  ]

  return (
    <div className="flex flex-col gap-2">
      <Feature
        image={image}
        heading="A global community"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,"
        link={link}
      />
      <Feature image={image} link={link} list={list} />
    </div>
  )
}
