import ProductCardSimple from "@/components/ProductCards/ProductCardSimple";
import { getProducts, getProductsLimit } from "@/utils/sharedFunction";
import React from "react";

const page = async () => {
  const products = await getProductsLimit(1, "Example Category");

  return (
    <div className=" container  mx-auto flex justify-center flex-wrap gap-10">
      {products.map((item) => (
        <ProductCardSimple {...item} />
      ))}
    </div>
  );
};

export default page;
