import { breadcrumbs } from '@/vibes/soul/examples/sections/breadcrumbs/electric';
import { Streamable } from '@/vibes/soul/lib/streamable';
import { Price } from '@/vibes/soul/primitives/price-label';
import { type Breadcrumb } from '@/vibes/soul/sections/breadcrumbs';
import { ProductDetail } from '@/vibes/soul/sections/product-detail';
import { Field } from '@/vibes/soul/sections/product-detail/schema';

import { action, fields } from './action';

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

export const product = {
  id: '1',
  title: 'ELBA PENNY LOAFER',
  price: '$19.95',
  image: {
    src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTozMjRmZjY3Mi03Mjc2LTRlY2QtYjA0NS0zODBhNzNmYjYzNjk=/elba-loafer.webp',
    alt: 'A woman wearing a white crocheted cardigan with green trim and orange flowers, green pants, and brown suede loafers.',
  },
  images: [
    {
      src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTozMjRmZjY3Mi03Mjc2LTRlY2QtYjA0NS0zODBhNzNmYjYzNjk=/elba-loafer.webp',
      alt: 'A woman wearing a white crocheted cardigan with green trim and orange flowers, green pants, and brown suede loafers.',
    },
    {
      src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTo3Y2ExZjA3YS04Njc1LTQ2YzYtOGRhOC04MWNkNzY0NWIwOGI=/elba-loafer-1.webp',
      alt: 'A brown suede loafer with a leather sole.',
    },
    {
      src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZToyNTNjODFmMS0yYTI1LTRjZWQtYTUzNy04OGQ2NzU0N2Y2M2Q=/elba-loafer-2.webp',
      alt: 'A pair of brown suede loafers with a leather sole.',
    },
    {
      src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZToyOTljNGMyOS1lZDE2LTRiNzYtOTVhMy02ODFkODVhZTc0ZTA=/elba-loafer-3.webp',
      alt: 'A pair of brown suede loafers with a leather sole.',
    },
    {
      src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTpiY2E1MzAwZC1kNjlhLTRhMWMtOTNjYy03MDE0NTM2NGJkMjQ=/elba-loafer-4.webp',
      alt: 'A brown suede loafer with a leather sole.',
    },
  ],
  href: '#',
  rating: 4.8,
  summary:
    'The ELBA reimagines the classic penny loafer with cumin suede, a signature notched welt, and an angled leather heel—perfect for suits, jeans, or skirts.',
  description:
    'Our modern take on a classic penny loafer. Handcrafted in a cumin suede, the ELBA updates the timeless style with our signature notched welt and angled leather heel. We’ll live in these loafers with everything from oversized suits, to cuffed jeans and socks to long skirts.',
  options: ['5', '5.5', '6', '6.5', '7', '7.5', '8', '8.5', '9', '9.5', '10', '10.5', '11'],
  swatches: [
    {
      id: '1',
      name: 'Espresso Spazzolato',
      image: {
        src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTo4NjQwZTMyZS1hNGNiLTQ1YjgtODVkOC02ODIxNWEyZDlhYTY=/espresso-spazzolato.png',
        alt: 'Espresso Spazzolato',
      },
    },
    {
      id: '2',
      name: 'Black Spazzolato',
      image: {
        src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTo3ODFiZjE4ZS0yNDM0LTRhNjYtODJiZS03N2IyZmRjY2NiMTM=/black-spazzolato.png',
        alt: 'Black Spazzolato',
      },
    },
    {
      id: '3',
      name: 'Hickory Embossed Croc with Hardware',
      image: {
        src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTowMTdhMTA1YS05ZDFkLTQxZTctODQ1ZS0xODhkNjE2Nzk1MjU=/hickory-embossed.png',
        alt: 'Hickory Embossed Croc with Hardware',
      },
    },
    {
      id: '4',
      name: 'Black Embossed Croc',
      image: {
        src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTphYzcwZWYzYS05MDJmLTRkY2QtOGM0Yi01ZTQ0MmNkNWJlZmQ=/black-embossed.png',
        alt: 'Black Embossed Croc',
      },
    },
    {
      id: '5',
      name: 'Bark Suede Stain Resistant with Hardware',
      image: {
        src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTpmOWM1YjJlYi1jZmZlLTRmOWMtOGUxNC05OGY4YzczMzEzZTQ=/bark-suede.png',
        alt: 'Bark Suede Stain Resistant with Hardware',
      },
    },
    {
      id: '6',
      name: 'Cumin Suede Stain Resistant with Hardware',
      image: {
        src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTo1ZDVkMTUyNi1kMDVlLTQ0Y2YtYjc1Zi0wNGY1YTIxZGNhMTg=/cumin-suede.png',
        alt: 'Cumin Suede Stain Resistant with Hardware',
      },
    },
    {
      id: '7',
      name: 'Cherry Embossed Croc with Hardware',
      image: {
        src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTpkNWM4MGE3ZS1mYzgzLTQ4ZDMtYTE3ZC0wNDUzYjNiMzU3YWI=/cherry-embossed.png',
        alt: 'Cherry Embossed Croc with Hardware',
      },
    },
  ],
  accordions,
};

export default function Preview() {
  const breadcrumbsPromise = new Promise<Breadcrumb[]>((resolve) => {
    setTimeout(() => resolve(breadcrumbs), 1000);
  });

  const productPromise = new Promise<{
    id: string;
    title: string;
    href: string;
    images: Streamable<Array<{ src: string; alt: string }>>;
    price?: Streamable<Price | null>;
    subtitle?: string;
    badge?: string;
    rating?: Streamable<number | null>;
    description?: Streamable<string | React.ReactNode | null>;
  }>((resolve) => {
    setTimeout(() => resolve(product), 1500);
  });

  const fieldsPromise = new Promise<Field[]>((resolve) => {
    setTimeout(() => resolve(fields), 2000);
  });

  return (
    <ProductDetail
      action={action}
      breadcrumbs={breadcrumbsPromise}
      fields={fieldsPromise}
      product={productPromise}
    />
  );
}
