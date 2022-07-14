import { useMediaQuery } from "react-responsive";

import s from "./ImageComponent.module.css";

export default function ImageSignup() {
  const isMobile = useMediaQuery({ maxWidth: 1023.9 });

  return (
    <>
      <li className={s.instruction__item} style={{ opacity: 1 }}>
        <b className={s.instruction__text}>Enter your personal details</b>
        {isMobile ? (
          <img
            src="https://i.ibb.co/kqpjp8B/Signup-Mobile.jpg"
            alt="Signup-Mobile"
            width="280px"
            border="0"
          />
        ) : (
          <img
            src="https://i.ibb.co/VjgwFvP/signup.jpg"
            alt="signup"
            border="0"
          />
        )}
      </li>
      <li className={s.instruction__item}>
        <b className={s.instruction__text}>
          If you entered everything correctly, please transfer to your email and
          confirm registration
        </b>
        {isMobile ? (
          <img
            src="https://i.ibb.co/qjd2Kh4/mail.jpg"
            alt="mail"
            width="280px"
            border="0"
          />
        ) : (
          <img src="https://i.ibb.co/qjd2Kh4/mail.jpg" alt="mail" border="0" />
        )}
      </li>
      <li className={s.instruction__item}>
        <b className={s.instruction__text}>
          Congratulations, you have registered and you will be redirected to the
          login page
        </b>
        {isMobile ? (
          <img
            src="https://i.ibb.co/YP7SSxn/confirm-Mail.jpg"
            alt="confirm-Mail"
            width="280px"
            border="0"
          />
        ) : (
          <img
            src="https://i.ibb.co/YP7SSxn/confirm-Mail.jpg"
            alt="confirm-Mail"
            border="0"
          />
        )}
      </li>
    </>
  );
}
