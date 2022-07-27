import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import Header from "../../components/Header";
import Container from "../../layout/Container";
import Carousel from "../../components/Carousel";
import ContactFooter from "../../components/ContactFooter";
import Element from "../../components/Element";
import categories from "../../router/categories";

import classes from "./Category.module.scss";

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
      <Container>
        <ul className={classes["list"]}>
          {categories.map((item) => (
            <li key={item.id}>
              <Link className={classes["list__link"]} to={item.link}>
                {item.text}
              </Link>
            </li>
          ))}
        </ul>
      </Container>
      {data && data.map((item) => <Element key={item.id} data={item} />)}
      <ContactFooter />
    </>
  );
};

export default Category;
