"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import Image from "next/image";

export default function Carousal() {
  return (
    <div>
      <div className="h-[72vh] hidden md:block">
        <Swiper
          cssMode={true}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          autoplay={true}
          loop={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Image
              src={"/images/banner/d1.webp"}
              width={1500}
              height={10}
              alt="some"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={"/images/banner/d2.webp"}
              width={1500}
              height={10}
              alt="some"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={"/images/banner/d3.webp"}
              width={1500}
              height={10}
              alt="some"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={"/images/banner/d4.webp"}
              width={1500}
              height={10}
              alt="some"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={"/images/banner/d5.webp"}
              width={1500}
              height={10}
              alt="some"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={"/images/banner/d6.webp"}
              width={1500}
              height={10}
              alt="some"
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="h-[60vh] md:hidden ">
        <Swiper
          cssMode={true}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          autoplay={true}
          loop={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Image
              src={"/images/banner/m1.webp"}
              width={1500}
              height={10}
              alt="some"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={"/images/banner/m2.webp"}
              width={1500}
              height={10}
              alt="some"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={"/images/banner/m3.webp"}
              width={1500}
              height={10}
              alt="some"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={"/images/banner/m4.webp"}
              width={1500}
              height={10}
              alt="some"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={"/images/banner/m5.webp"}
              width={1500}
              height={10}
              alt="some"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={"/images/banner/m6.webp"}
              width={1500}
              height={10}
              alt="some"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
