'use client'

import { IProduct } from "../models/product.model"
import { useCart } from "../providers/CartProvider"

export default function AddToCartButton({product}:{product: IProduct}) {
  const {addToCart} = useCart()
  return <button className="btn btn-primary" onClick={()=>addToCart(product)}>В корзину</button>
}
