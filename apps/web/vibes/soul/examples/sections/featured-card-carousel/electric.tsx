import { CardWithId } from '@/vibes/soul/primitives/card';
import { FeaturedCardCarousel } from '@/vibes/soul/sections/featured-card-carousel';

export default function Preview() {
  const productsPromise = new Promise<CardWithId[]>((resolve) => {
    setTimeout(() => resolve(products), 1000);
  });

  return (
    <FeaturedCardCarousel
      cards={productsPromise}
      cta={{ label: 'Shop all', href: '/all' }}
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      title="Categories"
    />
  );
}

const products: CardWithId[] = [
  {
    id: '1',
    title: 'Philodendron Imperial Red',
    image: {
      src: 'https://rstr.in/monogram/vibes/-kv08IvX08j',
      alt: 'Philodendron Imperial Red',
    },
    href: '#',
  },
  {
    id: '2',
    title: 'Monstera',
    image: {
      src: 'https://rstr.in/monogram/vibes/n0P83RMnClS',
      alt: 'Monstera',
    },
    href: '#',
  },
  {
    id: '3',
    title: 'Pink Caladium',
    image: {
      src: 'https://rstr.in/monogram/vibes/AaZW4j2VTd4',
      alt: 'Pink Caladium',
    },
    href: '#',
  },
  {
    id: '4',
    title: 'Hoya Kerrii',
    image: {
      src: 'https://rstr.in/monogram/vibes/QSaMw6aC_AN',
      alt: 'Hoya Kerrii',
    },
    href: '#',
  },
  {
    id: '5',
    title: 'Bird Nest Fern',
    image: {
      src: 'https://rstr.in/monogram/vibes/gfGRQi5pHeJ',
      alt: 'Bird Nest Fern',
    },
    href: '#',
  },
  {
    id: '6',
    title: 'Jade Plant',
    image: {
      src: 'https://rstr.in/monogram/vibes/lJg081kQqvc',
      alt: 'Jade Plant',
    },
    href: '#',
  },
  {
    id: '7',
    title: 'Snake Plant',
    image: {
      src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTplNGNiMjdiNi04NTY2LTQxOTctODhhMC0xYThhYmY3NDdkZTU=/snake-plant.jpg',
      alt: 'Snake Plant',
    },
    href: '#',
  },
  {
    id: '8',
    title: 'Spider Plant',
    image: {
      src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTpiYmYyNDEzMC0wNzU3LTRiYjMtYjkwMi0zNzI0NjBjNzk5MjY=/spider-plant.jpg',
      alt: 'Spider Plant',
    },
    href: '#',
  },
  {
    id: '9',
    title: 'African Fig Tree',
    image: {
      src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTo1MGFmMDIxOC05NWM4LTRlN2UtOTAyMS01OWExOGQxMjUwNGM=/african-fig.jpg',
      alt: 'African Fig Tree',
    },
    href: '#',
  },
  {
    id: '10',
    title: 'Birds of Paradise',
    image: {
      src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTowNWUwYmEwMS0yMDhiLTQ5ZWQtOTI3NC0yZTM0ZTZjYmZhNzg=/birds-of-paradise.jpg',
      alt: 'Birds of Paradise',
    },
    href: '#',
  },
  {
    id: '11',
    title: 'ZZ Plant',
    image: {
      src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTo1N2Q2YThlZS04MjZiLTRjZmEtODRmZi1hZjgzZDM3MWE2ZGY=/zz-plant.jpg',
      alt: 'ZZ Plant',
    },
    href: '#',
  },
  {
    id: '12',
    title: 'Dracaena',
    image: {
      src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTo3YTJhYTJmZi00ODBhLTQ3NTctODdkYi02ZWEyZGYzZWJmNjI=/dracaena.jpg',
      alt: 'Dracanea',
    },
    href: '#',
  },
];
