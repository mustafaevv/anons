import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import classNames from "classnames";

import Container from "../../layout/Container";
import category from "../../router";
import logo from "../../images/logo192.png";

import classes from "./Header.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const location = useLocation();
  const [opened, setOpened] = useState(false);
  const show = () => setOpened((state) => !state);
  return (
    <header className={classes["header"]}>
      <Container className={classes["header__content"]}>
        <Link to="/">
          <img
            className={classes["header__logo"]}
            src={logo}
            alt="React Logo"
          />
        </Link>
        {opened || (
          <ul className={classNames(classes["header__list"])}>
            {category.map((item, index) => (
              <li key={index}>
                <Link
                  className={classNames(
                    classes["header__link"],
                    location.pathname === item.link
                      ? classes["header__link-active"]
                      : ""
                  )}
                  to={item.link}
                >
                  {item.text}
                </Link>
              </li>
            ))}
            <button
              onClick={show}
              className={classNames(
                classes["header__button"],
                classes["header__button-close"]
              )}
            >
              <FontAwesomeIcon icon={faClose} />
            </button>
          </ul>
        )}
        <button onClick={show} className={classes["header__button"]}>
          <FontAwesomeIcon icon={faBars} />
        </button>
      </Container>
    </header>
  );
};

export default Header;
