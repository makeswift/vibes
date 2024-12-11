import { ReactNode } from 'react';

import { ProductDescription } from '@/vibes/soul/sections/product-description';

export const accordions = [
  {
    title: 'What is your return policy?',
    content:
      'We are committed to ensuring you are completely satisfied with your purchase. If for any reason you are not happy with your shoes, you can return them within 30 days of delivery. Please ensure the shoes are in their original condition, unworn, and in their original packaging. For detailed return instructions, please visit our Return Policy page or contact our customer support team.',
  },
  {
    title: 'How do I care for my leather shoes?',
    content:
      'Proper care of your leather shoes is essential to maintain their quality and appearance. Use a soft cloth to clean the surface, apply a high-quality leather conditioner, and store them in a cool, dry place. For more specific care instructions tailored to your shoe style, please refer to the Care Guide section on our website.',
  },
  {
    title: 'Do you offer delivery services for your shoes?',
    content:
      'Yes, we offer worldwide delivery for all our shoes. Each pair is meticulously packaged to ensure they arrive in perfect condition. Delivery times vary depending on your location but typically range from 3 to 7 business days for domestic orders. For more information, please visit our Delivery Information page or enter your address at checkout to see estimated delivery times.',
  },
  {
    title: 'Can I get advice on choosing the right shoes?',
    content:
      'Of course! Choosing the right pair of shoes is about style, comfort, and fit. Our Shoe Finder tool helps you select the perfect pair based on your preferences and needs. Our customer service team is also available to provide personalized recommendations to help you find the ideal style for any occasion.',
  },
];

export const productDescriptionImage = {
  src: 'https://rstr.in/monogram/vibes/nH3UU-ncSv7/hGakp4qZXfo',
  alt: 'A woman wearing a white crochet shirt with green trim and orange flowers, green pants, and Freda brown loafers.',
};

export default function Preview() {
  const accordionsPromise = new Promise<{ title: string; content: ReactNode }[]>((res) =>
    setTimeout(() => res(accordions), 2000),
  );

  const imagePromise = new Promise<{ src: string; alt: string }>((res) =>
    setTimeout(() => res(productDescriptionImage), 1000),
  );

  return (
    <>
      <ProductDescription accordions={accordionsPromise} image={imagePromise} />
    </>
  );
}
