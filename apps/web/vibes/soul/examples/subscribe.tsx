import Subscribe from '@/vibes/soul/components/subscribe'

export default function Preview() {
  const image = {
    src: 'https://rstr.in/monogram/vibes/ZHUBk7gO45U',
    altText: 'Biker in Mountains',
  }

  return (
    <div className="flex flex-col gap-2">
      <Subscribe
        image={image}
        title="Sign up for our newsletter"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
        theme="brand-shadow"
        action={(formData: FormData) => console.log(formData)}
      />
      <Subscribe
        title="Sign up for our newsletter"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
        theme="brand-shadow"
        action={(formData: FormData) => console.log(formData)}
      />
      <Subscribe
        title="Sign up for our newsletter"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
        theme="brand-highlight"
        action={(formData: FormData) => console.log(formData)}
      />
      <Subscribe
        image={image}
        title="Sign up for our newsletter"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
        theme="neutral"
        action={(formData: FormData) => console.log(formData)}
      />
      <Subscribe
        title="Sign up for our newsletter"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
        theme="neutral"
        action={(formData: FormData) => console.log(formData)}
      />
      <Subscribe
        title="Sign up for our newsletter"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
        theme="light"
        action={(formData: FormData) => console.log(formData)}
      />
    </div>
  )
}
