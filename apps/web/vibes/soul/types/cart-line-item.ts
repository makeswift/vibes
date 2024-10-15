import Image from './image'

export default interface CartLineItem {
  id: string
  image: Image
  title: string
  subtitle: string
  quantity: number
  price: string
}
