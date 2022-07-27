import React from "react";

import Header from "../../components/Header";
import Carousel from "../../components/Carousel";
import ContactFooter from "../../components/ContactFooter";
import categories from "../../router/categories";

import classes from "./Brand.module.scss";
import Container from "../../layout/Container";
import { Link, useParams } from "react-router-dom";
import Element from "../../components/Element";

const Brand = () => {
  const { type } = useParams(); 
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
      <Element />
      <ContactFooter />
    </>
  );
};

export default Brand;
