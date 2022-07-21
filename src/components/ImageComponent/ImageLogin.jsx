import { useMediaQuery } from "react-responsive";
import s from "./ImageComponent.module.css";

export default function ImageLogin() {
  const isMobile = useMediaQuery({ maxWidth: 1023.9 });
  return (
    <>
      <li className={s.instruction__item}>
        <b className={s.instruction__text}>
          Enter the data that you provided during registration
        </b>
        {isMobile ? (
          <img
            src="https://i.ibb.co/xhPxCfj/Login-Mobile.jpg"
            alt="Login-Mobile"
            width="280px"
            border="0"
          />
        ) : (
          <img
            src="https://i.ibb.co/BKD7p4H/login.jpg"
            alt="login"
            width="427px"
            border="0"
          />
        )}
      </li>
    </>
  );
}
