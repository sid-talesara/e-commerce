import React from "react";
import { featuresCardData } from "@/shared/contants/data";
const Features = () => {
  return (
    <div>
      <section className="text-gray-600 body-font ">
        <div className="container px-5 py-24 mx-auto ">
          <div className="flex flex-wrap -m-4  ">
            {/* Card  */}
            {featuresCardData.map((item) => (
              <div className="xl:w-1/3   md:w-1/2 p-4" key={item.id}>
                <div className="border border-gray-200 p-6 rounded-lg">
                  <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                    {<item.icon />}
                  </div>
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                    {item.name}
                  </h2>
                  <p className="leading-relaxed text-base">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
