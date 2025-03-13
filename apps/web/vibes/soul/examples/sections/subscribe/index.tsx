import { action } from '@/vibes/soul/examples/sections/inline-email-form/actions';
import { Subscribe } from '@/vibes/soul/sections/subscribe';

export default function Preview() {
  const image = {
    src: 'https://rstr.in/monogram/vibes/m12FEyfnuDl',
    alt: 'Lady with plant',
  };

  return (
    <div className="flex flex-col gap-2">
      <Subscribe
        action={action}
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
        image={image}
        title="Sign up for our newsletter"
      />
    </div>
  );
}
