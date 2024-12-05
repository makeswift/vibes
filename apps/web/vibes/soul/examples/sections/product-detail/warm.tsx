import { breadcrumbs } from '@/vibes/soul/examples/primitives/breadcrumbs/warm';
import { ProductDetail } from '@/vibes/soul/sections/product-detail';

import { action, fields } from './action';

export const product = {
  id: '1',
  title: 'Mini Bar Bag',
  price: '$60',
  image: {
    src: 'https://rstr.in/monogram/vibes/5IdIE27Cj9r',
    alt: 'A close-up of a bicycle handlebar with a brown handlebar bag.',
  },
  images: [
    {
      src: 'https://rstr.in/monogram/vibes/5IdIE27Cj9r',
      alt: 'A close-up of a bicycle handlebar with a brown handlebar bag.',
    },
    {
      src: 'https://rstr.in/monogram/vibes/3dmqcoTLHrK',
      alt: 'A close-up of a black road bike with white bar tape and a brown handlebar bag.',
    },
    {
      src: 'https://rstr.in/monogram/vibes/D9gxhIajApp',
      alt: 'A close-up of a black road bike with white bar tape and a brown handlebar bag.',
    },
    {
      src: 'https://rstr.in/monogram/vibes/T9YaFuqsEWp',
      alt: 'A close-up of a black road bike with white bar tape and a brown handlebar bag.',
    },
    {
      src: 'https://rstr.in/monogram/vibes/Nsj4qcMks2D',
      alt: 'A close-up of a black road bike with white bar tape and a brown handlebar bag.',
    },
    {
      src: 'https://rstr.in/monogram/vibes/uuhJbt607Ve',
      alt: 'A close-up of a black road bike with white bar tape and a brown handlebar bag.',
    },
    {
      src: 'https://rstr.in/monogram/vibes/MIh7shsUtXg',
      alt: 'A close-up of a black road bike with white bar tape and a brown handlebar bag.',
    },
    {
      src: 'https://rstr.in/monogram/vibes/44Z0ObxFdrL',
      alt: 'A close-up of a black road bike with white bar tape and a brown handlebar bag.',
    },
    {
      src: 'https://rstr.in/monogram/vibes/yl3MSuQta1C',
      alt: 'A close-up of a bicycle handlebar with a red handlebar bag attached.',
    },
    {
      src: 'https://rstr.in/monogram/vibes/RJr9FNVonZG',
      alt: 'A close-up of a bicycle handlebar with a red handlebar bag attached.',
    },
    {
      src: 'https://rstr.in/monogram/vibes/EVfQoHIUYf2',
      alt: 'A close-up of a bicycle handlebar with a red handlebar bag attached.',
    },
    {
      src: 'https://rstr.in/monogram/vibes/h1YtCgM_Jqx',
      alt: 'A close-up of a bicycle handlebar with a red handlebar bag attached.',
    },
    {
      src: 'https://rstr.in/monogram/vibes/INqNEFs7p_o',
      alt: 'A close-up of a bicycle handlebar with a red handlebar bag attached.',
    },
  ],
  href: '#',
  rating: 4.8,
  description:
    'Svelte and functional, this is one bag that goes well with every bike. We made this smaller so it fits little bikes and still carries the essentials - snacks, wallet, phone, keys, a tube, and tools. With multiple mounting positions, the fit can be dialed for short head-tubed mountain bikes, long stemmed road bikes, and everything in-between. The slim top edge is designed to fit behind mountain bike cables and tuck up neatly under computers, lights, and other accessories.',
  // options: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
};

export default function Preview() {
  return (
    <ProductDetail action={action} breadcrumbs={breadcrumbs} fields={fields} product={product} />
  );
}
