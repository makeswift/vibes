import Subscribe from '@/vibes/soul/components/subscribe'

export default function Preview() {
  const image = {
    url: 'https://rstr.in/monogram/vibes/ZHUBk7gO45U',
    dimensions: {
      width: 932,
      height: 1200,
    },
    alt: 'Biker in Mountains',
  }

  return (
    <div className="flex flex-col gap-2">
      <Subscribe
        image={image}
        heading="Sign up for our newsletter"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
        theme="brand-shadow"
      />
      <Subscribe
        heading="Sign up for our newsletter"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
        theme="brand-shadow"
      />
      <Subscribe
        heading="Sign up for our newsletter"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
        theme="brand-highlight"
      />
      <Subscribe
        image={image}
        heading="Sign up for our newsletter"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
        theme="neutral"
      />
      <Subscribe
        heading="Sign up for our newsletter"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
        theme="neutral"
      />
      <Subscribe
        heading="Sign up for our newsletter"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
        theme="light"
      />
    </div>
  )
}
