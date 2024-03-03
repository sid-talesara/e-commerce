"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCardSimple from "@/components/ProductCards/ProductCardSimple";
import PaginationComponent from "@/components/shared/Pagination";
import { getProductsLimit } from "@/utils/sharedFunction";
import Loader from "@/components/Loader/Loader";

type Props = {};

const HoodiesMain = (props: Props) => {
  const [pageNum, setPageNum] = useState(1);
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    setProducts([]);
    const res = await axios.get(
      `/api/get-products-limit?page=${pageNum}&category=Example Category`
    );
    setProducts(res.data.data);
  };

  useEffect(() => {
    fetchData();
  }, [pageNum]);

  return (
    <div>
      <div className="container mx-auto">
        {products.length === 0 ? (
          <Loader />
        ) : (
          <div>
            <div className="flex justify-center flex-wrap gap-10">
              {products.map((item, index) => (
                <ProductCardSimple key={index} {...item} />
              ))}
            </div>

            <div className="flex justify-center py-14">
              <PaginationComponent pageNum={pageNum} setPageNum={setPageNum} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HoodiesMain;
