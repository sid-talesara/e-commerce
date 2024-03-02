import { Dispatch, SetStateAction } from "react";
export interface CartProps {
  toggleCart: boolean;
  setToggleCart: Dispatch<SetStateAction<boolean>>;
}
