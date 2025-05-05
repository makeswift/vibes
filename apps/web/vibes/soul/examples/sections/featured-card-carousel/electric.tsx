import { type CardContent } from '@/vibes/soul/primitives/card';
import { FeaturedCardCarousel } from '@/vibes/soul/sections/featured-card-carousel';

export default function Preview() {
  const productsPromise = new Promise<CardContent[]>((resolve) => {
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

const products: CardContent[] = [
  {
    title: 'Philodendron Imperial Red',
    image: {
      src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTowNzAzMzk0Ni01NGNhLTQ3ZDYtODgyYi0wYWI3NTUzNTU4YjQ=/kv08IvX08j.jpeg',
      alt: 'Philodendron Imperial Red',
    },
    href: '#1',
  },
  {
    title: 'Monstera',
    image: {
      src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZToyMTIwYzE1ZC01YzlkLTQ3MDgtOTZhOS1hZDkwYjVmNDAwZWY=/n0P83RMnClS%202930x3663.jpeg',
      alt: 'Monstera',
    },
    href: '#2',
  },
  {
    title: 'Pink Caladium',
    image: {
      src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTpmNjJhNTMyOC1hNzMwLTQxYjQtODE5Ny05ZDdlYWViMjJhMDQ=/AaZW4j2VTd4%202489x3111.jpeg',
      alt: 'Pink Caladium',
    },
    href: '#3',
  },
  {
    title: 'Hoya Kerrii',
    image: {
      src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTpmZmRlZDM2MS0yMWMwLTRiYjktOTU2Ny1mNWM0YjcwMGIwZWQ=/QSaMw6aC_AN%208600x10750.jpeg',
      alt: 'Hoya Kerrii',
    },
    href: '#4',
  },
  {
    title: 'Bird Nest Fern',
    image: {
      src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTplYTBhYzExNC1lYWIwLTQyZjAtYmQzZS04NDJlNmRlM2RkNTc=/gfGRQi5pHeJ%203094x3868.jpeg',
      alt: 'Bird Nest Fern',
    },
    href: '#5',
  },
  {
    title: 'Jade Plant',
    image: {
      src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTozZWFjZDhlZi1lY2EzLTRiMzYtYTJkNS02ZGJkOWE4MzUwYjQ=/lJg081kQqvc.jpeg',
      alt: 'Jade Plant',
    },
    href: '#6',
  },
  {
    title: 'Snake Plant',
    image: {
      src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTozOTRmNDIyNC0wZDRkLTRmOWMtYjVjNi03ZjljNGE2ZjdiOTU=/snake-plant.jpg',
      alt: 'Snake Plant',
    },
    href: '#7',
  },
  {
    title: 'Spider Plant',
    image: {
      src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTphNzdlNDQwNS1mNDIxLTRiZTQtOGJkMy0wZTc2OWMyYmEzYjY=/spider-plant.jpg',
      alt: 'Spider Plant',
    },
    href: '#8',
  },
  {
    title: 'African Fig Tree',
    image: {
      src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTo2YTk0Y2E0Yy0wMjcyLTRkZTItOWQ2Mi0xMTY4OTczYzI1ZWM=/african-fig.jpg',
      alt: 'African Fig Tree',
    },
    href: '#9',
  },
  {
    title: 'Birds of Paradise',
    image: {
      src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTo2MTE4YmY5MC0wOWJlLTRlZDUtYjYyOS0wNzgwOTdiOWNjYTk=/birds-of-paradise.jpg',
      alt: 'Birds of Paradise',
    },
    href: '#10',
  },
  {
    title: 'ZZ Plant',
    image: {
      src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZToxNTFhZTMwNC0zYWZhLTRiZDgtOWRlYy01ODU1OTZlNjQyZDM=/zz-plant.jpg',
      alt: 'ZZ Plant',
    },
    href: '#11',
  },
  {
    title: 'Dracaena',
    image: {
      src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTozOWNmZThkOC00Y2M0LTQ2ZTAtODUwMy1lZmVhMzhhMWRmN2Y=/dracaena.jpg',
      alt: 'Dracanea',
    },
    href: '#12',
  },
];
