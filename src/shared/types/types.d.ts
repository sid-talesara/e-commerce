import { Dispatch, SetStateAction } from "react";
export interface CartProps {
  toggleCart: boolean;
  setToggleCart: Dispatch<SetStateAction<boolean>>;
}

export interface simpleProductCardProps {
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
