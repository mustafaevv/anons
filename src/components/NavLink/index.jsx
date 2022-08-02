import React, { useState } from "react";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

import Container from "../../layout/Container";
import category from "../../router/categories";

import classes from "./NavLink.module.scss";

const NavLink = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  return (
    <Container>
      <div className="from">
        <div className={classes["form__controls"]}>
          <h3 className={classes["form__title"]}>Your Select Region</h3>
          <button className={classes["form__show"]} onClick={openModal}>
            Regions
          </button>
        </div>
        {isOpen && (
          <div className={classes["form__block"]}>
            <button className={classes["form__close"]} onClick={closeModal}>
              <FontAwesomeIcon icon={faClose} />
            </button>
            <ul className={classes["form__list"]}>
              {category.map((item,index) => (
                <li key={index}>
                  <Link className={classes["form__link"]} to={item.link}>
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
