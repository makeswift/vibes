import { IconBlock, IconBlockProps } from '@/vibes/soul/sections/icon-block'

export default function Preview() {
  const listOf6: IconBlockProps['list'] = [
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
  ]
  const listOf5: IconBlockProps['list'] = [
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
    {
      icon: 'rotate-ccw',
      title: 'Free Returns',
      description: 'On full priced items only',
    },
  ]
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
  ]
  const listOf3: IconBlockProps['list'] = [
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
  ]

  return (
    <div className="flex flex-col gap-2">
      <IconBlock list={listOf6} />
      <IconBlock list={listOf5} />
      <IconBlock list={listOf4} />
      <IconBlock list={listOf3} />
    </div>
  )
}
