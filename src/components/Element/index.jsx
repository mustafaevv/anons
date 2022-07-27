import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIdCard } from "@fortawesome/free-regular-svg-icons";
import {
  faGlobe,
  faLocationDot,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import Container from "../../layout/Container";

import classes from "./Element.module.scss";
import "swiper/css";

const data = {
  id: 0,
  name: "Ankara",
  address: "Ганга, Абдулла Кадири, 1 А",
  image: ["https://ankara.uz/images/img9.jpg"],
  tellNumber: "+998 71 240 58 50",
  webSite: "https://ankara.uz/",
  email: "ubaydullo.mustafaev@mail.ru",
  telegram: "https://t.me/ankarakebap",
  instagram: "https://www.instagram.com/ankara_kebap/",
  facebook: "https://www.facebook.com/ankara.uz",
  region: "toshkent",
  category: "/category/toshkent",
};

const Element = () => {
  return (
    <Container>
      <div className={classes["element"]}>
        <img className={classes["element__image"]} src={data.image} alt="" />
        <div className={classes["element__block"]}>
          <h4 className={classes["element__title"]}>{data.name}</h4>
          <p className={classes["element__region"]}> {data.region}</p>
          <p className={classes["element__address"]}>
            <FontAwesomeIcon
              className={classes["element__icons"]}
              icon={faLocationDot}
            />{" "}
            {data.address}
          </p>
          <a
            className={classes["element__webSite"]}
            href={data.webSite}
            target="_blank"
          >
            <FontAwesomeIcon
              className={classes["element__icons"]}
              icon={faGlobe}
            />{" "}
            ankara.uz
          </a>
          <ul className={classes["element__list"]}>
            <li>
              <a
                className={classes["element__link"]}
                target="_blank"
                href={data.facebook}
              >
                <FontAwesomeIcon icon={faIdCard} />
              </a>
            </li>
            <li>
              <a
                className={classes["element__link"]}
                target="_blank"
                href={data.instagram}
              ></a>
            </li>
            <li>
              <a
                className={classes["element__link"]}
                target="_blank"
                href={data.telegram}
              >
                <FontAwesomeIcon icon={faIdCard} />
              </a>
            </li>
          </ul>
          <a
            className={classes["element__tel"]}
            href={`tel:${data.tellNumber}`}
          >
            <FontAwesomeIcon
              className={classes["element__icons"]}
              icon={faPhone}
            />{" "}
            {data.tellNumber}
          </a>
          <p className={classes["element__email"]}>
            <FontAwesomeIcon
              className={classes["element__icons"]}
              icon={faEnvelope}
            />{" "}
            {data.email}
          </p>
        </div>
        <FontAwesomeIcon className={classes["element__star"]} icon={faStar} />
      </div>
    </Container>
  );
};

export default Element;
