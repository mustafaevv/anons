import classNames from "classnames";
import React, { useEffect, useState } from "react";

import Container from "../../layout/Container";
import classes from "./Form.module.scss";
import {
  validateName,
  validatePhoneContent,
  valiDatePhoneNumber,
  validateText,
} from "./helper";

const initialData = {
  name: "",
  tel: "",
  text: "",
};
const Form = () => {
  const [fields, setFields] = useState(initialData);
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    const isValid =
      validateName(fields.name) &&
      validateText(fields.text) &&
      valiDatePhoneNumber(fields.tel);
    setDisabled(!isValid);
  }, [fields]);

  const setValue = (event) => {
    if (
      event.target.name === "tel" &&
      !validatePhoneContent(event.target.value)
    )
      return;
    setFields((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFields(initialData);
  };
  return (
    <Container className={classes["container"]}>
      <form className={classes["form"]}>
        <div className={classes["form__block"]}>
          <input
            onChange={setValue}
            value={fields.name}
            name="name"
            className={classes["form__input"]}
            type="text"
            placeholder="Your Name*"
          />
          <input
            onChange={setValue}
            value={fields.tel}
            type="tel"
            name="tel"
            className={classes["form__input"]}
            placeholder="Your Number*"
          />
        </div>
        <textarea
          name="text"
          onChange={setValue}
          value={fields.text}
          className={classes["form__text"]}
          placeholder="Your Ideas*"
        ></textarea>
        <button
          onClick={handleSubmit}
          className={classNames(classes["form__button"], {
            [classes["form__button_disabled"]]: disabled,
          })}
          disabled={disabled}
        >
          send
        </button>
      </form>
    </Container>
  );
};

export default Form;
