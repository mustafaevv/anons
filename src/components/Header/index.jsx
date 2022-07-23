import React from "react";
import { useLocation, Link } from "react-router-dom";
import classNames from "classnames";

import Container from "../../layout/Container";
import category from "../../router";
import logo from "../../images/logo192.png";

import classes from "./Header.module.scss";

const Header = () => {
  const location = useLocation();
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
        <ul className={classes["header__list"]}>
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
        </ul>
      </Container>
    </header>
  );
};

export default Header;
