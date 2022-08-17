import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import Container from "../../layout/Container";

import googlePlay from "../../images/googlePlay.png";
import appleStore from "../../images/appleStore.png";
import facebook from "../../images/facebook.png";
import instagram from "../../images/instagram.png";
import telegram from "../../images/telegram.png";

import classes from "./Element.module.scss";

const Element = ({ data }) => {
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
            />
            {data.address}
          </p>
          <Link className={classes["element__webSite"]} to={data.webSite}>
            <FontAwesomeIcon
              className={classes["element__icons"]}
              icon={faGlobe}
            />
            ankara.uz
          </Link>
          <ul className={classes["element__list"]}>
            <li>
              <Link
                className={classes["element__link"]}
                target="_blank"
                to={data.facebook}
              >
                <img
                  className={classes["element__link-img"]}
                  src={facebook}
                  alt="Facebook Logo"
                />
              </Link>
            </li>
            <li>
              <Link
                className={classNames(
                  classes["element__link"],
                  classes["element__link-instagram"]
                )}
                target="_blank"
                to={data.instagram}
              >
                <img
                  className={classes["element__link-img"]}
                  src={instagram}
                  alt="Instagram Logo"
                />
              </Link>
            </li>
            <li>
              <Link
                className={classes["element__link"]}
                target="_blank"
                to={data.telegram}
              >
                <img
                  className={classes["element__link-img"]}
                  src={telegram}
                  alt="Telegram Logo"
                />
              </Link>
            </li>
          </ul>
          <a
            className={classes["element__tel"]}
            href={`tel:+${data.tellNumber}`}
          >
            <FontAwesomeIcon
              className={classes["element__icons"]}
              icon={faPhone}
            />
            {`+${data.tellNumber}`}
          </a>
          <p className={classes["element__email"]}>
            <FontAwesomeIcon
              className={classes["element__icons"]}
              icon={faEnvelope}
            />
            {data.email}
          </p>
          <div>
            <ul className={classes["element__apps"]}>
              <li>
                <a href="#!">
                  <img
                    className={classes["element__googlePlay"]}
                    src={appleStore}
                    alt="App Store"
                  />
                </a>
              </li>
              <li>
                <a href="#!">
                  <img
                    className={classes["element__googlePlay"]}
                    src={googlePlay}
                    alt="Google Play"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Element;
