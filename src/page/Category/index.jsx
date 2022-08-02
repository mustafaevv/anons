import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import Header from "../../components/Header";
import Container from "../../layout/Container";
import Carousel from "../../components/Carousel";
import ContactFooter from "../../components/ContactFooter";
import Element from "../../components/Element";
import NavLink from "../../components/NavLink";


const Category = () => {
  const { type } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`http://localhost:4000/items?category=${type}`);
      const item = await res.json();
      setData(item);
    };
    fetchData();
  }, [type]);
  return (
    <>
      <Header />
      <Carousel />
      <NavLink/>
      {data && data.map((item) => <Element key={item.id} data={item} />)}
      <ContactFooter />
    </>
  );
};

export default Category;
