import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper";

import image from '../../images/img3.jpg'

import classes from './Carousel.module.scss'
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
const index = () => {
  return (
    <div>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
      >
        <SwiperSlide>
          <img className={classes["image"]} src={image} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className={classes["image"]} src={image} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className={classes["image"]} src={image} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className={classes["image"]} src={image} alt="" />
        </SwiperSlide>
        ...
      </Swiper>
    </div>
  );
};

export default index;
