import React from "react";
import { Swiper as Slider, SwiperSlide as Sliders } from "swiper/react";
import { A11y, Navigation, Scrollbar } from "swiper";

import image from "../../images/img3.jpg";

import classes from "./Carousel.module.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

const Carousel = () => {
  return (
    <Slider
      modules={[Navigation, Scrollbar, A11y]}
      spaceBetween={0}
      slidesPerView={1}
      navigation
    >
      <Sliders>
        <img className={classes["image"]} src={image} alt="" />
      </Sliders>
      <Sliders>
        <img className={classes["image"]} src={image} alt="" />
      </Sliders>
      <Sliders>
        <img className={classes["image"]} src={image} alt="" />
      </Sliders>
      <Sliders>
        <img className={classes["image"]} src={image} alt="" />
      </Sliders>
    </Slider>
  );
};

export default Carousel;
