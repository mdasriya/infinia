import React from 'react';

// import swiper react component
import {Swiper, SwiperSlide} from "swiper/react"

import "swiper/css";
import "swiper/css/pagination";

// import data
import {newInStore} from "../data"
import { Autoplay, Navigation, Pagination } from 'swiper';
import "swiper/css/navigation";
import "swiper/css/pagination";


const NewItemsSlider = () => {
  return <Swiper  modules={[Navigation, Pagination, Autoplay]} 
   grabCursor={true} breakpoints={{
    320:{
      slidesPerView: 2,
      spaceBetween: 18,
    },
    768:{
      slidesPerView: 3,
      spaceBetween: 20,
    },
   
  
  }}>
    {newInStore.products.map((product, index)=>{
return <SwiperSlide className='max-w-[256px]' key={index}>
  <div className='relative'>
    <img src={product.image.type} className='lg:h-[400px] brightness-75'  alt='images'/>
    <div className='absolute text-white bottom-[20px] w-full text-center text-[18px] lg:text-2xl font-medium capitalize'>{product.name}</div>
  </div>
</SwiperSlide>
    })}
  </Swiper>;
};

export default NewItemsSlider;
