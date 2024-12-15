import { CardCarousel } from '@/vibes/soul/primitives/card-carousel';

export const cards = [
  {
    id: '1',
    title: 'Small Plants',
    image: { src: 'https://rstr.in/monogram/vibes/DYeoTIrhxZk', alt: 'Small Plants' },
    href: '#',
  },
  {
    id: '2',
    title: 'Low Maintenance',
    image: {
      src: 'https://rstr.in/monogram/vibes/25AJnay0WtU/LiQxF_6c-Sk',
      alt: 'Low Maintenance',
    },
    href: '#',
  },
  {
    id: '3',
    title: 'Indestructible',
    image: { src: 'https://rstr.in/monogram/vibes/9HSPQU1tr1p', alt: 'Indestructible' },
    href: '#',
  },
  {
    id: '4',
    title: 'Succulent',
    image: { src: 'https://rstr.in/monogram/vibes/lJg081kQqvc', alt: 'Succulent' },
    href: '#',
  },
];

export default function Preview() {
  return <CardCarousel cards={cards} />;
}
