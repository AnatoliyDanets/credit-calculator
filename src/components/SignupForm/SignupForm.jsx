import React from "react";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { addUser } from "../../redux/auth/auth-operations";
import { useDispatch } from "react-redux";
import { Error } from "../Errors";
import { ReactComponent as Logo } from "../../image/Icon/logo.svg";
import { ReactComponent as Eye } from "../../image/Icon/eye.svg";
import ProgressSwitch from "./ProgressSwitch";
import Button from "../Button";
import s from "./SignupForm.module.css";

export default function SignupForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [errorName, setErrorName] = useState(false);
  const [textError, setTextError] = useState("Invalid");
  const [errorEmail, setErrorEmail] = useState(false);
  const [textErrorEmail, setTextErrorEmail] = useState("Invalid");
  const [errorPassword, setErrorPassword] = useState(false);
  const [textErrorPassword, setTextErrorPassword] = useState("Invalid");
  const [errorConfirmPassword, setErrorConfirmPassword] = useState(false);
  const [textErrorConfirmPassword, setTextErrorConfirmPassword] = useState("");
  const [show, setShow] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);

  const dispatch = useDispatch();
  const isMobilMenuToTablet = useMediaQuery({ maxWidth: 479.9 });

  const handleShow = () => {
    setShow((prev) => !prev);
  };

  const handleShowConfirmPass = () => {
    setShowConfirmPass((prev) => !prev);
  };

  useEffect(() => {
    setDisabled(
      !name ||
        !email ||
        !password ||
        !confirmPassword ||
        errorEmail ||
        errorName ||
        errorPassword ||
        errorConfirmPassword
    );
  }, [
    name,
    email,
    password,
    confirmPassword,
    errorName,
    errorEmail,
    errorPassword,
    errorConfirmPassword,
  ]);

  const handleBlur = (e) => {
    const { name, validity } = e.target;
    switch (name) {
      case "name":
        if (validity.patternMismatch || validity.tooShort || validity.tooLong) {
          setErrorName(true);
          setTextError(
            Error.errorName(
              validity.tooShort,
              validity.tooLong,
              validity.patternMismatch
            )
          );
        } else {
          setErrorName(false);
        }
        break;
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
      case "name":
        setName(value.trim());
        break;
      case "email":
        setEmail(value.trim());
        break;
      case "password":
        setPassword(value.trim());
        if (confirmPassword !== value) {
          setErrorConfirmPassword(true);
        } else {
          setErrorConfirmPassword(false);
        }
        break;
      case "confirmPassword":
        setConfirmPassword(value.trim());
        if (password !== value) {
          setErrorConfirmPassword(true);
          setTextErrorConfirmPassword("Passwords don't match");
        } else {
          setErrorConfirmPassword(false);
        }
        break;
      default:
        break;
    }
  };

  const resetForm = () => {
    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  const addEmployee = (e) => {
    e.preventDefault();
    const newUser = {
      name: name,
      email: email,
      password: password,
    };
    dispatch(addUser(newUser));

    resetForm();
  };

  return (
    <>
      <form onSubmit={addEmployee} className={s.signupForm}>
        {!isMobilMenuToTablet ? (
          <Logo style={{ alignSelf: "center", marginBottom: "50px" }} />
        ) : (
          <h3 className={s.signupForm__title}>Sign up</h3>
        )}{" "}
        <div className={s.signupForm__input_wrapper}>
          {errorName && (
            <span className={s.signupForm__error}>{textError}</span>
          )}
          <input
            type="text"
            className={s.signupForm__input}
            name="name"
            value={name}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Your name"
            pattern="[a-zA-Z'-'\s]*"
            minLength={2}
            maxLength={60}
            required
          />
        </div>
        <div className={s.signupForm__input_wrapper}>
          {errorEmail && (
            <span className={s.signupForm__error}>{textErrorEmail}</span>
          )}
          <input
            type="email"
            name="email"
            className={s.signupForm__input}
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
        <div className={s.signupForm__input_wrapper}>
          {errorPassword && (
            <span className={s.signupForm__error}>{textErrorPassword}</span>
          )}
          <Eye className={s.signupForm__eye} onClick={handleShow} />
          <input
            type={show ? "text" : "password"}
            name="password"
            className={s.signupForm__input}
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
        <div
          className={s.signupForm__input_wrapper}
          style={{ marginBottom: "25px" }}
        >
          {errorConfirmPassword && (
            <span className={s.signupForm__error}>
              {textErrorConfirmPassword}
            </span>
          )}
          <Eye className={s.signupForm__eye} onClick={handleShowConfirmPass} />
          <input
            type={showConfirmPass ? "text" : "password"}
            name="confirmPassword"
            className={s.signupForm__input}
            value={confirmPassword}
            onChange={handleChange}
            placeholder="Confirm password"
            pattern="[0-9a-zA-Z!@#$%^&*]{6,}"
            minLength={6}
            maxLength={60}
            required
          />
        </div>
        <ProgressSwitch value={password.length} />
        <Button type={"submit"} disabled={disabled} children={"Sign up"} />
        <NavLink to="/login" className={s.signupForm__btn}>
          Login
        </NavLink>
      </form>
    </>
  );
}
