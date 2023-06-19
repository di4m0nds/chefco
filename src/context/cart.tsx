import { createContext, useState } from "react";

import { CartContextInterface, CartModel, ProductModel } from "../utils/exportInterfaces";

export const CartContext = createContext<CartContextInterface>({} as CartContextInterface)

export function CartProvider ({ children }: { children: React.ReactNode}) {
  const [cart, setCart] = useState<CartModel[]>([])

  const addToCart = (product: ProductModel) => {
    const productInCart = cart.findIndex(item => item.product.id === product.id)
    
    if (productInCart >= 0) {
      const newCart = structuredClone(cart)
      newCart[productInCart].quantity += 1
      return setCart(newCart)
    }

    const newProduct: CartModel = {
        product,
        quantity: 1
    }

    setCart(prevState => ([
      ...prevState,
      newProduct,
    ]))
  }

  const clearCart = () => {
    setCart([])
  }

  const removeFromCart = (product: ProductModel) => {
    const productInCartIndex = cart.findIndex(item => item.product.id === product.id)
    
    if (productInCartIndex >= 0) {
      const newCart = structuredClone(cart)
      newCart[productInCartIndex].quantity -= 1

      return setCart(newCart)
    }

    setCart(prevState => prevState.filter(item => item.product.id !== product.id))
  }

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      clearCart,
      removeFromCart
    }}>
      {children}
    </CartContext.Provider>
  )
}
