import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../slider.css"

const ImageSlider = () => {
  return (
    <div className="border-red p-1 mt-6 w-full lg:-mt-[80px]">
      <Swiper
        className="imageSlider mt-10 lg:h-[600px] lg:p-10"
        modules={[Navigation, Pagination, Autoplay]}
        navigation={true}
        autoplay={true}
        pagination={true}
      >
        <SwiperSlide>
          <div className="slider">
            <img
              className="w-full h-full border-r-8"
              src="https://infiniaindia.com/wp-content/uploads/2023/10/FIRST-PAGE-WEBSITE.jpg"
              alt=""
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="">
            <img
              className=" w-full h-full border-r-8"
              src="https://infiniaindia.com/wp-content/uploads/2023/10/FOURTH-PAGE-WEBSITE_20231030_115617_0003.jpg"
              alt=""
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="">
            <img
              className=" w-full h-full border-r-8"
              src="https://infiniaa.vercel.app/infinia/images/gallery/157752246320191228.jpg"
              alt=""
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="">
            <img
              className=" w-full h-full border-r-8"
              src="https://infiniaa.vercel.app/infinia/images/gallery/157606074620191211.jpg"
              alt=""
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="">
            <img
              className="slider w-full h-full border-r-8"
              src="https://infiniaindia.com/wp-content/uploads/2023/10/THIRD-PAGE-WEBSITE_20231030_115617_0002.jpg"
              alt=""
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ImageSlider;
