import React from "react";
import { useParams } from "react-router-dom";

import Header from "../../components/Header";
import Carousel from "../../components/Carousel";
import NavLink from "../../components/NavLink";
import Element from "../../components/Element";
import ContactFooter from "../../components/ContactFooter";
import useGetData from "../../hooks/useGetData";

const Category = () => {
  const { type } = useParams();
  const [data] = useGetData(`items?category=${type}`);
  return (
    <>
      <Header />
      <Carousel />
      <NavLink />
      {data && data.map((item) => <Element key={item.id} data={item} />)}
      <ContactFooter />
    </>
  );
};

export default Category;
