import { simpleProductCardProps } from "@/shared/types/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductCardSimple = ({
  productId,
  productName,
  price,
  discountedPrice,
  category,
}: simpleProductCardProps) => {
  console.log(productId);
  return (
    <Link
      href={`http://localhost:3000/products/${productId}`}
      className="shadow-lg p-5 rounded-md w-fit"
    >
      {/* image */}
      <div className="relative w-60">
        <div className="absolute object-contain flex justify-center bottom-0 h-96 md:h-80 z-10 opacity-100 transition-opacity duration-700 hover:opacity-0 w-full bg-white overflow-hidden dark:bg-gray-800">
          <img
            className="h-96 md:h-80 max-w-none"
            src="https://codeswear.nyc3.cdn.digitaloceanspaces.com/hoodies/ninja-hattori-hoodie-black/0.webp"
            alt=""
          />
        </div>
        <div className="flex justify-center opacity-100 object-contain h-96 md:h-80 bottom-0 transition-opacity duration-700 hover:opacity-100 overflow-hidden w-full ">
          <img
            className="h-96 md:h-80 max-w-none"
            src="https://codeswear.nyc3.cdn.digitaloceanspaces.com/hoodies/ninja-hattori-hoodie-black/1.webp"
            alt=""
          />
        </div>
      </div>
      {/* other info */}
      <div className="flex flex-col">
        {/* category */}
        <h6 className="text-slate-500 text-sm py-2">{category}</h6>
        {/* name */}
        <h3 className="text-lg font-semibold py-1">{productName}</h3>
        {/* colors and price */}
        <div className="flex justify-between items-center py-1 ">
          {/* price */}
          <div className="flex gap-2 items-center">
            <p className="text-lg font-semibold">₹{discountedPrice}</p>
            <p className="line-through text-slate-500">₹{price}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCardSimple;
