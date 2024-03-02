import Image from "next/image";
import React from "react";
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";
import { IoCloseCircle } from "react-icons/io5";
const Cart = ({ toggleCart, setToggleCart }) => {
  return (
    <>
      {toggleCart && (
        <div className="bg-black/40  w-screen h-screen fixed top-0 right-0 z-20  ">
          <div className="bg-red-200 w-96 md:w-1/3 p-5 fixed top-0 right-0  z-20 h-screen overflow-y-auto">
            <button
              title="close-btn"
              className="absolute top-4 right-4"
              onClick={() => setToggleCart(!toggleCart)}
            >
              <IoCloseCircle className="text-xl" />
            </button>

            {/* heading */}
            <div>
              <h5 className="text-3xl py-5">Shopping Cart</h5>
            </div>

            {/* products  */}
            <div className="flex justify-between py-4">
              {/* product details */}
              <div className="flex items-center gap-2">
                {/* image */}
                <div className="relative w-fit">
                  {/* quantity dot */}
                  <div className="absolute top-0 right-0 bg-red-400 h-5 flex items-center justify-center text-xs w-5 rounded-full ">
                    4
                  </div>
                  <Image
                    src={"/images/0.webp"}
                    width={60}
                    className="rounded-lg border-2"
                    height={10}
                    alt="some"
                  />
                </div>
                <p className="w-64">
                  Wings Of Freedom Attack On Titan Tshirt (XL/Lavender)
                </p>
              </div>

              {/* inc dec quantity */}
              <div className="flex gap-4 items-center text-lg">
                <button title="remove items" className="text-xl">
                  <FaMinusCircle />
                </button>
                <p>5</p>
                <button title="add items" className="text-xl">
                  <FaPlusCircle />
                </button>
              </div>
            </div>

            {/* subtotal */}
            <p className="text-lg font-semibold py-4">Subtotal: 4845</p>

            {/* buttons */}
            <div className="flex gap-4">
              <button
                title="checkout"
                className="px-4 py-2 bg-pink-500 rounded-md text-white"
              >
                checkout
              </button>
              <button
                title="clear"
                className="px-4 py-2 bg-pink-500 rounded-md text-white"
              >
                clear
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
