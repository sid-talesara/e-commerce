import Carousal from "@/components/Carousal/Carousal";
import React from "react";
import CategoryGallery from "./CategoryGallery";
import Features from "@/components/Features/Features";
import ProductCardDetailed from "@/components/ProductCards/ProductCardDetailed";
import ProductCardSimple from "@/components/ProductCards/ProductCardSimple";

type Props = {};

const Homepage = (props: Props) => {
  return (
    <div>
      {" "}
      <Carousal />
      <div className="container mx-auto ">
        <div className="py-10 text-center ">
          <h2 className="py-5 text-3xl font-bold">COLLECTIONS</h2>
          <CategoryGallery />
        </div>
        <div className="py-5">
          <Features />
        </div>
        <ProductCardDetailed />
        <div className="py-5"></div>
        <div className="py-5"></div>
        <ProductCardSimple />
      </div>
    </div>
  );
};

export default Homepage;
