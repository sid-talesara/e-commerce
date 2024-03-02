import Image from "next/image";
import React from "react";

const ProductCardDetailed = () => {
  return (
    <div className="shadow-lg p-5 rounded-md w-fit">
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
        <h6 className="text-slate-500 text-sm py-2">Hoodies</h6>
        {/* name */}
        <h3 className="text-lg font-semibold py-2">Good Vibes Hoodie</h3>
        {/* colors and price */}
        <div className="flex justify-between items-center py-1 ">
          {/* colors */}
          <div className="flex gap-1  ">
            <span
              title="black"
              className="h-4 w-4 cursor-pointer border-2 bg-black rounded-full"
            ></span>
            <span
              title="red"
              className="h-4 w-4 cursor-pointer border-2  bg-red-500 rounded-full"
            ></span>
            <span
              title="purple"
              className="h-4 w-4 cursor-pointer border-2  bg-purple-500 rounded-full"
            ></span>
            <span
              title="yellow"
              className="h-4 w-4 cursor-pointer border-2  bg-yellow-500 rounded-full"
            ></span>
            <span
              title="green"
              className="h-4 w-4 cursor-pointer border-2  bg-green-500 rounded-full"
            ></span>
          </div>
          {/* price */}
          <div className="flex gap-2 items-center">
            <p className="text-lg font-semibold">₹799</p>
            <p className="line-through text-slate-500">₹999</p>
          </div>
        </div>
        {/* sizes */}
        <div className="flex gap-1 py-1">
          <div className="border-2 p-2 cursor-pointer w-fit">S</div>
          <div className="border-2 p-2 cursor-pointer w-fit">M</div>
          <div className="border-2 p-2 cursor-pointer w-fit">L</div>
          <div className="border-2 p-2 cursor-pointer w-fit">XL</div>
        </div>
      </div>
    </div>
  );
};

export default ProductCardDetailed;
