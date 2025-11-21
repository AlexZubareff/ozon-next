import { IProduct } from "./product.model"

export interface ICartItem extends IProduct{
  count:number
}
