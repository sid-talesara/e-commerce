import { Dispatch, SetStateAction } from "react";
export interface CartProps {
  toggleCart: boolean;
  setToggleCart: Dispatch<SetStateAction<boolean>>;
}

export interface simpleProductCardProps {
  productId: string;
  productName: string;
  price: number | null;
  discountedPrice: number | null;
  category: string | null;
}

export interface detailProductCardProps {
  productName: string;
  price: number | null;
  discountedPrice: number | null;
  category: string | null;
}
export interface productsData {
  productId: string;
  productName: string;
  productDescription: string | null;
  productSmallDesc: string | null;
  price: number | null;
  discountedPrice: number | null;
  category: string | null;
  inventory: number | null;
}
