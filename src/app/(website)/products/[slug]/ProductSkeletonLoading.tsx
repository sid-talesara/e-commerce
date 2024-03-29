import React from "react";

const ProductSkeletonLoading = () => {
  return (
    <div>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt="ecommerce"
              className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
              src="https://dummyimage.com/400/d1d5db&text=codeswear"
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font h-3 w-32 bg-gray-300 rounded-md tracking-widest mb-2"></h2>
              <h1 className="text-gray-900 text-3xl h-6 w-80 bg-gray-300 rounded-md title-font font-medium mb-1"></h1>

              <div className="leading-relaxed mt-8">
                <p className="text-sm title-font  h-3 w-64 bg-gray-300 rounded-md tracking-widest mb-2"></p>{" "}
                <p className="text-sm title-font  h-3 w-64 bg-gray-300 rounded-md tracking-widest mb-2"></p>{" "}
                <p className="text-sm title-font  h-3 w-64 bg-gray-300 rounded-md tracking-widest mb-2"></p>{" "}
                <p className="text-sm title-font  h-3 w-44 bg-gray-300 rounded-md tracking-widest mb-2"></p>{" "}
              </div>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                <div className="flex">
                  <span className="mr-3">Color</span>
                  <span className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></span>
                  <span className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></span>
                  <span className="border-2 border-gray-300 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none"></span>
                </div>
                <div className="flex ml-6 items-center">
                  <span className="mr-3">Size</span>
                  <div className="relative">
                    <select
                      title="size-chart"
                      className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10"
                    >
                      <option>SM</option>
                      <option>M</option>
                      <option>L</option>
                      <option>XL</option>
                    </select>
                    <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                      >
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex">
                <div className="flex gap-5 items-center">
                  <p className="text-sm title-font  h-4 w-32 bg-gray-300 rounded-md tracking-widest mb-2"></p>{" "}
                  <p className="text-sm title-font  h-4 w-32 bg-gray-300 rounded-md tracking-widest mb-2"></p>{" "}
                </div>
                <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                  Add to Cart
                </button>
                <button
                  title="wishlist"
                  className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4"
                >
                  <svg
                    fill="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductSkeletonLoading;
