import React from "react";
import { categoryGallery } from "@/shared/contants/data";
import Link from "next/link";
const CategoryGallery = () => {
  return (
    <div>
      <div className="flex gap-10 xl:gap-14 flex-wrap justify-center">
        {categoryGallery.map((item) => (
          <div
            className="p-2 rounded-lg overflow-hidden cursor-pointer w-96  md:w-72 lg:w-96 "
            key={item.id}
          >
            <Link href={item.url}>
              <img
                className="rounded w-full object-cover object-center mb-2 transition-transform duration-300 hover:scale-110"
                src={item.imageUrl}
                alt="content"
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryGallery;
