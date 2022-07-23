import React from "react";

import Header from "../../components/Header";
import Carousel from '../../components/Carousel'
import classes from './Brand.module.scss'
import Element from "../../components/Element";

const Brand = () => {
  return (
    <>
      <Header />
      <Carousel/>
      <Element/>
    </>
  );
};

export default Brand;
