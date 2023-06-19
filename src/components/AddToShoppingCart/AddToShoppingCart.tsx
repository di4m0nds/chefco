import { useState } from "react"

import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';

import { AddToCartProps } from "../../utils/exportInterfaces";
import { useCart } from "../../hooks";

function AddToShoppingCart({ fontSize, fontColor, setAction, product }: AddToCartProps) {
  const { addToCart } = useCart()
  const [isAdding, setIsAdding] = useState<boolean>(false)

  const handleAdder = () => {
    if (isAdding) return

    setIsAdding(true)
    setAction(true)

    addToCart(product)

    setTimeout(() => {
      setIsAdding(false)
      setAction(false)
    }, 2000)
  }

  return isAdding ? (
    <CheckBoxOutlinedIcon className={fontColor} fontSize={fontSize} />
  ) : (
    <button aria-label="Agregar al carrito" onClick={handleAdder}>
      <AddBoxOutlinedIcon className={fontColor} fontSize={fontSize} />
    </button>
  )

}

export default AddToShoppingCart
