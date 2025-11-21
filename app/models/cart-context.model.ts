import { ICartItem } from "./cart-item.module"
import { IProduct } from "./product.model"

export interface ICartContext {
  isOpen:boolean,
  cartItems:ICartItem[]
  setIsOpen:(value:boolean)=>void
  addToCart:(product:IProduct)=>void
  deleteCartItem:(product:IProduct)=>void


}
