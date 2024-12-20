import { breadcrumbs } from '@/vibes/soul/examples/primitives/breadcrumbs/electric';
import { Streamable } from '@/vibes/soul/lib/streamable';
import { Breadcrumb } from '@/vibes/soul/primitives/breadcrumbs';
import { Price } from '@/vibes/soul/primitives/price-label';
import { ProductDetail } from '@/vibes/soul/sections/product-detail';
import { Field } from '@/vibes/soul/sections/product-detail/schema';

import { action, fields } from './action';

export const product = {
  id: '1',
  title: 'ELBA PENNY LOAFER',
  price: '$19.95',
  image: {
    src: 'https://rstr.in/monogram/vibes/JCwYbAk9Nhi',
    alt: 'A woman wearing a white crocheted cardigan with green trim and orange flowers, green pants, and brown suede loafers.',
  },
  images: [
    {
      src: 'https://rstr.in/monogram/vibes/JCwYbAk9Nhi',
      alt: 'A woman wearing a white crocheted cardigan with green trim and orange flowers, green pants, and brown suede loafers.',
    },
    {
      src: 'https://rstr.in/monogram/vibes/Qrk6pJMoWwZ',
      alt: 'A brown suede loafer with a leather sole.',
    },
    {
      src: 'https://rstr.in/monogram/vibes/ozMaktUeiPy',
      alt: 'A pair of brown suede loafers with a leather sole.',
    },
    {
      src: 'https://rstr.in/monogram/vibes/Pk6sizxQWc5',
      alt: 'A pair of brown suede loafers with a leather sole.',
    },
    {
      src: 'https://rstr.in/monogram/vibes/cLe51lBiEUD',
      alt: 'A brown suede loafer with a leather sole.',
    },
  ],
  href: '#',
  rating: 4.8,
  summary:
    'Our modern take on a classic penny loafer. Handcrafted in a cumin suede, the ELBA updates the timeless style with our signature notched welt and angled leather heel. We’ll live in these loafers with everything from oversized suits, to cuffed jeans and socks to long skirts.',
  options: ['5', '5.5', '6', '6.5', '7', '7.5', '8', '8.5', '9', '9.5', '10', '10.5', '11'],
  swatches: [
    {
      id: '1',
      name: 'Espresso Spazzolato',
      image: {
        src: 'https://rstr.in/monogram/vibes/RFj64LJfm2W',
        alt: 'Espresso Spazzolato',
      },
    },
    {
      id: '2',
      name: 'Black Spazzolato',
      image: {
        src: 'https://rstr.in/monogram/vibes/hUfyHZBL60V',
        alt: 'Black Spazzolato',
      },
    },
    {
      id: '3',
      name: 'Hickory Embossed Croc with Hardware',
      image: {
        src: 'https://rstr.in/monogram/vibes/gdktSq34nrI',
        alt: 'Hickory Embossed Croc with Hardware',
      },
    },
    {
      id: '4',
      name: 'Black Embossed Croc',
      image: {
        src: 'https://rstr.in/monogram/vibes/HYmNAiU6Z5Y',
        alt: 'Black Embossed Croc',
      },
    },
    {
      id: '5',
      name: 'Bark Suede Stain Resistant with Hardware',
      image: {
        src: 'https://rstr.in/monogram/vibes/oyhxIY4PpNI',
        alt: 'Bark Suede Stain Resistant with Hardware',
      },
    },
    {
      id: '6',
      name: 'Cumin Suede Stain Resistant with Hardware',
      image: {
        src: 'https://rstr.in/monogram/vibes/ZmZQ9_i62ph',
        alt: 'Cumin Suede Stain Resistant with Hardware',
      },
    },
    {
      id: '7',
      name: 'Cherry Embossed Croc with Hardware',
      image: {
        src: 'https://rstr.in/monogram/vibes/Y_cqEwBGS2f',
        alt: 'Cherry Embossed Croc with Hardware',
      },
    },
  ],
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
