import React, { useRef } from "react";
import { useLocation, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";

import Container from "../../layout/Container";
import category from "../../router";
import logo from "../../images/logo192.png";

import "./index.css";

const Header = () => {
  const location = useLocation();
  const navRef = useRef();
  const show = () => navRef.current.classList.toggle("open");
  return (
    <header className="header">
      <Container className="header__content">
        <Link to="/">
          <img className="header__logo" src={logo} alt="React Logo" />
        </Link>
        <button onClick={show} className="nav-btn header__button">
          <FontAwesomeIcon icon={faBars} />
        </button>
        <ul ref={navRef} className="header__list">
          <button
            onClick={show}
            className="header__button nav-btn nav-close-btn "
          >
            <FontAwesomeIcon icon={faClose} />
          </button>
          {category.map((item, index) => (
            <li key={index}>
              <Link
                className={
                  ("header__link",
                  location.pathname === item.link
                    ? "header__link-active"
                    : "header__link")
                }
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
