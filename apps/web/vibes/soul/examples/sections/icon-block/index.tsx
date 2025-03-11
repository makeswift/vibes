import { IconBlock, IconBlockProps } from '@/vibes/soul/sections/icon-block';

export default function Preview() {
  const listOf4: IconBlockProps['list'] = [
    {
      icon: 'truck',
      title: 'Free Shipping',
      description: 'On orders over $250',
    },
    {
      icon: 'rotate-ccw',
      title: 'Free Returns',
      description: 'On full priced items only',
    },
    {
      icon: 'star',
      title: '2 Year Warranty',
      description: 'As standard',
    },
    {
      icon: 'truck',
      title: 'Free Shipping',
      description: 'On orders over $250',
    },
  ];

  return (
    <div className="p-10">
      <IconBlock list={listOf4} />
    </div>
  );
}
