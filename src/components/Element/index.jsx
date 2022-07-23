import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIdCard } from "@fortawesome/free-regular-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Container from "../../layout/Container";
import classes from "./Element.module.scss";
const data = {
  id: 0,
  name: "Ankara",
  address: "Ганга, Абдулла Кадири, 1 А",
  image: [
    "https://ankara.uz/images/img9.jpg",
  ],
  tellNumber: "+998 71 240 58 50",
  webSite: "https://ankara.uz/",
  email: "ubaydullo.mustafaev@mail.ru",
  telegram: "https://t.me/ankarakebap",
  instagram: "https://www.instagram.com/ankara_kebap/",
  facebook: "https://www.facebook.com/ankara.uz",
  map: "https://www.google.com/maps/place/Ankara+Kebab/@41.3316605,69.2411668,16.83z/data=!4m5!3m4!1s0x38ae8b799110d6d1:0xc3f0cbca2e4edb4c!8m2!3d41.3308916!4d69.2450557",
  region: "toshkent",
  category: "/category/toshkent",
};

const Element = () => {
  return (
    <Container>
      <div className={classes["element"]}>
        <img
          className={classes["element__image"]}
          src={data.image}
          alt={data.name}
        />
        <div className={classes["element__block"]}>
          <h4 className={classes["element__title"]}>{data.name}</h4>
          <p className={classes["element__region"]}> {data.region}</p>
          <p className={classes["element__address"]}>
            {" "}
            <FontAwesomeIcon icon={faLocationDot} /> {data.address}
          </p>
          <a
            className={classes["element__webSite"]}
            href={data.webSite}
            target="_blank"
          >
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
              >
                <FontAwesomeIcon icon={faIdCard} />
              </a>
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
            <FontAwesomeIcon icon={faPhone} /> {data.tellNumber}
          </a>
          <p className={classes["element__email"]}>
            {" "}
            <FontAwesomeIcon icon={faEnvelope} /> {data.email}
          </p>
        </div>
      </div>
      <div className={classes["element"]}>
        <img
          className={classes["element__image"]}
          src={data.image}
          alt={data.name}
        />
        <div className={classes["element__block"]}>
          <h4 className={classes["element__title"]}>{data.name}</h4>
          <p className={classes["element__region"]}> {data.region}</p>
          <p className={classes["element__address"]}>
            {" "}
            <FontAwesomeIcon icon={faLocationDot} /> {data.address}
          </p>
          <a
            className={classes["element__webSite"]}
            href={data.webSite}
            target="_blank"
          >
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
              >
                <FontAwesomeIcon icon={faIdCard} />
              </a>
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
            <FontAwesomeIcon icon={faPhone} /> {data.tellNumber}
          </a>
          <p className={classes["element__email"]}>
            {" "}
            <FontAwesomeIcon icon={faEnvelope} /> {data.email}
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Element;
