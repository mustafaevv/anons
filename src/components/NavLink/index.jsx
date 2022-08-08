import React, { useState } from "react";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useLocation } from "react-router-dom";

import Container from "../../layout/Container";
import category from "../../router/categories";

import classes from "./NavLink.module.scss";
import classNames from "classnames";

const NavLink = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => setIsOpen((state) => !state);

  return (
    <Container>
      <div className="from">
        <div className={classes["form__controls"]}>
          <h3 className={classes["form__title"]}>Your Select Region</h3>
          <button className={classes["form__show"]} onClick={handleClick}>
            Regions
          </button>
        </div>
        {isOpen && (
          <div className={classes["form__block"]}>
            <ul className={classes["form__list"]}>
              <button className={classes["form__close"]} onClick={handleClick}>
                <FontAwesomeIcon icon={faClose} />
              </button>
              {category.map((item, index) => (
                <li className={classes["form__li"]} key={index}>
                  <Link
                    className={classNames(
                      classes["form__link"],
                      location.pathname === item.link
                        ? classes["form__link-active"]
                        : ""
                    )}
                    to={item.link}
                  >
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </Container>
  );
};

export default NavLink;
