import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Header from "../../components/Header";
import Carousel from "../../components/Carousel";
import NavLink from "../../components/NavLink";
import Element from "../../components/Element";
import ContactFooter from "../../components/ContactFooter";

const Category = () => {
  const { type } = useParams();
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `${process.env.REACT_APP_URL}/items?category=${type}`
      );
      const item = await res.json();
      setData(item);
    };
    fetchData();
  }, [type]);
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
