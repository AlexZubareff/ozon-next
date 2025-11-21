'use client'
import { ReactNode, createContext, useContext, useState } from 'react'
import { ICartContext } from '../models/cart-context.model'
import { ICartItem } from '../models/cart-item.module'
import { IProduct } from '../models/product.model'
import { count } from 'console'
const CartContext = createContext<ICartContext | undefined>(undefined)

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('Оберните в CartProvider')
  }
  return context
}

export default function CartProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [cartItems, setCartItems] = useState<ICartItem[]>([])

  const addToCart = (product: IProduct) => {
    setCartItems(prev => {
      const findProduct = cartItems.find(p => p.id === product.id)
      if (findProduct) {
        return prev.map(p => (p.id === findProduct.id ? { ...p, count: p.count + 1 } : p))
      } else {
        return [...prev, { ...product, count: 1 }]
      }
    })
  }

  const deleteCartItem = (product: IProduct) => {
    setCartItems(prev => {
      const findProduct = cartItems.find(p => p.id === product.id)
      if (findProduct) {
        if (findProduct.count > 1) {
        return prev.map(p=> {
          if(p.id ===  findProduct.id){
            return {...p, count: p.count - 1}
          } else{
            return p
          }
        })

        } else {
        return prev.filter(p => p.id !== product.id)

        }
      } else {
        return prev
      }
    })
  }

  return <CartContext.Provider value={{ isOpen, setIsOpen, cartItems, addToCart, deleteCartItem }}>{children}</CartContext.Provider>
}
