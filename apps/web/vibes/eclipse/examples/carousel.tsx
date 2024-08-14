import { EmblaOptionsType } from 'embla-carousel'
import { text } from 'stream/consumers'

import Carousel from '@/vibes/eclipse/components/carousel'

const slides = [
  {
    title: 'This is the best service I have ever used!',
    text: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    buttonText: 'Read more',
    buttonLink: '#',
    image:
      'https://images.pexels.com/photos/26077133/pexels-photo-26077133/free-photo-of-herd-of-antelopes-in-nature.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    imageAlt: 'Herd of antelopes in nature',
  },
  {
    title: 'Amazing experience, highly recommend!',
    text: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    buttonText: 'Read more',
    buttonLink: '#',
    image:
      'https://images.pexels.com/photos/19765972/pexels-photo-19765972/free-photo-of-antelope-on-meadow.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    imageAlt: 'Antelope on meadow',
  },
  {
    title: 'A wonderful journey from start to finish.',
    text: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    buttonText: 'Read more',
    buttonLink: '#',
    image:
      'https://images.pexels.com/photos/10097726/pexels-photo-10097726.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    imageAlt: 'Antelope on meadow',
  },
  {
    title: 'Exceptional quality and customer service.',
    text: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    buttonText: 'Read more',
    buttonLink: '#',
    image:
      'https://images.pexels.com/photos/11946567/pexels-photo-11946567.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    imageAlt: 'Antelope on meadow',
  },
  {
    title: 'I will definitely be coming back!',
    text: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    buttonText: 'Read more',
    buttonLink: '#',
    image:
      'https://images.pexels.com/photos/15871352/pexels-photo-15871352/free-photo-of-stork-flies-above-grass.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    imageAlt: 'Antelope on meadow',
  },
  {
    title: 'Top-notch service and friendly staff.',
    text: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image:
      'https://images.pexels.com/photos/15247550/pexels-photo-15247550/free-photo-of-standing-antelope-on-meadow.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    imageAlt: 'Antelope on meadow',
  },
  {
    title: 'Top-notch service and friendly staff.',
    text: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    buttonText: 'Read more',
    buttonLink: '#',
    image:
      'https://images.pexels.com/photos/15247550/pexels-photo-15247550/free-photo-of-standing-antelope-on-meadow.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    imageAlt: 'Antelope on meadow',
  },
]

const OPTIONS: EmblaOptionsType = { loop: true, align: 'center' }

export default function Preview() {
  return (
    <div className="flex h-screen items-center justify-center bg-background py-8">
      <Carousel slides={slides} options={OPTIONS}></Carousel>
    </div>
  )
}
