import React from "react";
import { Link } from "react-router-dom";

import Container from "../../layout/Container";
import category from "../../router";
import logo from "../../images/logo192.png";
import telegram from "../../images/telegram.png";

import classes from "./ContactFooter.module.scss";

const ContactFooter = () => {
  return (
    <footer className={classes["footer"]}>
      <Container className={classes["footer__container"]}>
        <Link to="/">
          <img
            className={classes["footer__logo"]}
            src={logo}
            alt="React Logo"
          />
        </Link>
        <ul className={classes["footer__tell-list"]}>
          <li>
            <a className={classes["footer__tell"]} href="tel:+998 90 322 77 77">
              +998 90 322 77 77
            </a>
          </li>
          <li>
            <a className={classes["footer__tell"]} href="tel:+998 94 332 37 36">
              +998 94 332 37 36
            </a>
          </li>
          <li>
            <a href="https://t.me/vinyl_uz">
              <img
                className={classes["footer__telegram"]}
                src={telegram}
                alt="Telegram"
              />
            </a>
          </li>
        </ul>
        <ul className={classes["footer__list"]}>
          {category.map((item, index) => (
            <li key={index}>
              <Link className={classes["footer__link"]} to={item.link}>
                {item.text}
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </footer>
  );
};

export default ContactFooter;
