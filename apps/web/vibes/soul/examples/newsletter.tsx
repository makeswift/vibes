import Newsletter from '@/vibes/soul/components/newsletter'

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
      <Newsletter
        image={image}
        heading="Sign up for our newsletter"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
        theme="dark"
      />
      <Newsletter
        heading="Sign up for our newsletter"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
        theme="dark"
      />
      <Newsletter
        image={image}
        heading="Sign up for our newsletter"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
        theme="light"
      />
      <Newsletter
        heading="Sign up for our newsletter"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
        theme="light"
      />
    </div>
  )
}
