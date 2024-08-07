import Feature from '@/vibes/soul/components/feature'

export default function Preview() {
  const image: Feature['image'] = {
    url: 'https://rstr.in/monogram/vibes/ZHUBk7gO45U',
    alt: 'Biker in Mountains',
  }

  const link: Feature['link'] = {
    label: 'Shop Now',
    href: '/shop',
    target: '_self',
  }

  return (
    <Feature
      image={image}
      heading="A global community"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,"
      link={link}
    />
  )
}
