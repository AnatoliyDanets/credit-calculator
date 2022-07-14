import React from "react";
import { useMediaQuery } from "react-responsive";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { loginUser } from "../../redux/auth/auth-operations";
import { Error } from "../Errors";
import { ReactComponent as Logo } from "../../image/Icon/logo.svg";
import { ReactComponent as Eye } from "../../image/Icon/eye.svg";
import Button from "../Button";
import s from "./LoginForm.module.css";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [textErrorEmail, setTextErrorEmail] = useState("Invalid");
  const [errorPassword, setErrorPassword] = useState(false);
  const [textErrorPassword, setTextErrorPassword] = useState("Invalid");
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const isMobilMenuToTablet = useMediaQuery({ maxWidth: 479.9 });

  const handleShow = () => {
    setShow((prev) => !prev);
  };

  const handleBlur = (e) => {
    const { name, validity } = e.target;
    switch (name) {
      case "email":
        if (validity.patternMismatch || validity.tooShort || validity.tooLong) {
          setErrorEmail(true);
          setTextErrorEmail(
            Error.errorEmail(
              validity.tooShort,
              validity.tooLong,
              validity.patternMismatch
            )
          );
        } else {
          setErrorEmail(false);
        }
        break;
      case "password":
        if (validity.patternMismatch || validity.tooShort || validity.tooLong) {
          setErrorPassword(true);
          setTextErrorPassword(
            Error.errorPassword(
              validity.tooShort,
              validity.tooLong,
              validity.patternMismatch
            )
          );
        } else {
          setErrorPassword(false);
        }
        break;
      default:
        break;
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    setDisabled(!password || !email || errorEmail || errorPassword);
  }, [email, password, errorEmail, errorPassword]);

  const resetForm = () => {
    setEmail("");
    setPassword("");
  };

  const addEmployee = (e) => {
    e.preventDefault();
    dispatch(loginUser({ email, password }));
    resetForm();
  };

  return (
    <>
      <form onSubmit={addEmployee} className={s.loginForm}>
        {!isMobilMenuToTablet ? (
          <Logo style={{ alignSelf: "center", marginBottom: "50px" }} />
        ) : (
          <h3 className={s.loginForm__title}>Login</h3>
        )}
        <div className={s.loginForm__input_wrapper}>
          {errorEmail && (
            <span className={s.loginForm__error}>{textErrorEmail}</span>
          )}
          <input
            type="email"
            name="email"
            className={s.loginForm__input}
            value={email}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Email"
            pattern="[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"
            minLength={2}
            maxLength={100}
            required
          />
        </div>
        <div className={s.loginForm__input_wrapper}>
          {errorPassword && (
            <span className={s.loginForm__error}>{textErrorPassword}</span>
          )}
          <Eye className={s.loginForm__eye} onClick={handleShow} />
          <input
            type={show ? "text" : "password"}
            name="password"
            className={s.loginForm__input}
            value={password}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Password"
            pattern="[0-9a-zA-Z!@#$%^&*]{6,}"
            minLength={6}
            maxLength={60}
            required
          />
        </div>
        <Button type={"submit"} disabled={disabled} children={"Login"} />
        <NavLink to="/signup" className={s.loginForm__btn}>
          Sign up
        </NavLink>
      </form>
    </>
  );
}
