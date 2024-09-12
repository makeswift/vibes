import { IconBlock } from '@/vibes/soul/components/icon-block'

export default function Preview() {
  const listOf6 = [
    {
      id: '1',
      icon: 'Truck',
      title: 'Free Shipping',
      description: 'On orders over $250',
    },
    {
      id: '2',
      icon: 'RotateCcw',
      title: 'Free Returns',
      description: 'On full priced items only',
    },
    {
      id: '3',
      icon: 'Star',
      title: '2 Year Warranty',
      description: 'As standard',
    },
    {
      id: '4',
      icon: 'Truck',
      title: 'Free Shipping',
      description: 'On orders over $250',
    },
    {
      id: '5',
      icon: 'RotateCcw',
      title: 'Free Returns',
      description: 'On full priced items only',
    },
    {
      id: '6',
      icon: 'Star',
      title: '2 Year Warranty',
      description: 'As standard',
    },
  ]
  const listOf5 = [
    {
      id: '1',
      icon: 'Truck',
      title: 'Free Shipping',
      description: 'On orders over $250',
    },
    {
      id: '2',
      icon: 'RotateCcw',
      title: 'Free Returns',
      description: 'On full priced items only',
    },
    {
      id: '3',
      icon: 'Star',
      title: '2 Year Warranty',
      description: 'As standard',
    },
    {
      id: '4',
      icon: 'Truck',
      title: 'Free Shipping',
      description: 'On orders over $250',
    },
    {
      id: '5',
      icon: 'RotateCcw',
      title: 'Free Returns',
      description: 'On full priced items only',
    },
  ]
  const listOf4 = [
    {
      id: '1',
      icon: 'Truck',
      title: 'Free Shipping',
      description: 'On orders over $250',
    },
    {
      id: '2',
      icon: 'RotateCcw',
      title: 'Free Returns',
      description: 'On full priced items only',
    },
    {
      id: '3',
      icon: 'Star',
      title: '2 Year Warranty',
      description: 'As standard',
    },
    {
      id: '4',
      icon: 'Truck',
      title: 'Free Shipping',
      description: 'On orders over $250',
    },
  ]
  const listOf3 = [
    {
      id: '1',
      icon: 'Truck',
      title: 'Free Shipping',
      description: 'On orders over $250',
    },
    {
      id: '2',
      icon: 'RotateCcw',
      title: 'Free Returns',
      description: 'On full priced items only',
    },
    {
      id: '3',
      icon: 'Star',
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
