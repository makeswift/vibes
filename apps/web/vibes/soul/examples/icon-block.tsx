import IconBlock from '@/vibes/soul/components/icon-block'

export default function Preview() {
  const listOf6 = [
    {
      icon: 'Truck',
      title: 'Free Shipping',
      description: 'On orders over $250',
    },
    {
      icon: 'RotateCcw',
      title: 'Free Returns',
      description: 'On full priced items only',
    },
    {
      icon: 'Star',
      title: '2 Year Warranty',
      description: 'As standard',
    },
    {
      icon: 'Truck',
      title: 'Free Shipping',
      description: 'On orders over $250',
    },
    {
      icon: 'RotateCcw',
      title: 'Free Returns',
      description: 'On full priced items only',
    },
    {
      icon: 'Star',
      title: '2 Year Warranty',
      description: 'As standard',
    },
  ]
  const listOf5 = [
    {
      icon: 'Truck',
      title: 'Free Shipping',
      description: 'On orders over $250',
    },
    {
      icon: 'RotateCcw',
      title: 'Free Returns',
      description: 'On full priced items only',
    },
    {
      icon: 'Star',
      title: '2 Year Warranty',
      description: 'As standard',
    },
    {
      icon: 'Truck',
      title: 'Free Shipping',
      description: 'On orders over $250',
    },
    {
      icon: 'RotateCcw',
      title: 'Free Returns',
      description: 'On full priced items only',
    },
  ]
  const listOf4 = [
    {
      icon: 'Truck',
      title: 'Free Shipping',
      description: 'On orders over $250',
    },
    {
      icon: 'RotateCcw',
      title: 'Free Returns',
      description: 'On full priced items only',
    },
    {
      icon: 'Star',
      title: '2 Year Warranty',
      description: 'As standard',
    },
    {
      icon: 'Truck',
      title: 'Free Shipping',
      description: 'On orders over $250',
    },
  ]
  const listOf3 = [
    {
      icon: 'Truck',
      title: 'Free Shipping',
      description: 'On orders over $250',
    },
    {
      icon: 'RotateCcw',
      title: 'Free Returns',
      description: 'On full priced items only',
    },
    {
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
