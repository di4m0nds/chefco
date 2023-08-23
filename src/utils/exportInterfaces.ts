import React from "react";

export interface ProductModel {
  id: number;
  tag: string;
  name: string;
  description: string;
  price: number;
  portion: number;
  pic_preview: string;
  pic_cover: string;
}

export interface CartModel {
  product: ProductModel
  quantity: number;
}

export interface CartContextInterface {
  cart: CartModel[];
  addToCart: (product: ProductModel) => void;
  clearCart: () => void;
  removeFromCart: (product: ProductModel) => void;
}

export interface ProductProps {
  product: ProductModel,
}
export interface SectionProps {
  products: ProductModel[],
  setProducts: React.Dispatch<React.SetStateAction<ProductModel[] | null>>,
}

type SIZE = "small" | "medium" | "inherit" | "large"
type COLOR = "text-white" | "text-black"

export interface AddToCartProps {
  fontSize: SIZE
  fontColor: COLOR
  setAction: React.Dispatch<React.SetStateAction<boolean>>,
  product: ProductModel
}
