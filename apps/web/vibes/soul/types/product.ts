import Image from './image'
import ProductPrice from './product-price'

export default interface Product {
  id: string
  title: string
  href: string
  image?: Image
  price?: ProductPrice
  subtitle?: string
  badge?: string
  rating?: number
}
