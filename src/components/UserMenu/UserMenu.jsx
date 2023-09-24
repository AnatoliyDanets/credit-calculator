import { logOut } from "../../redux/auth/auth-operations";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import PropTypes from "prop-types";
import {
  getAuth,
  getUserAvatar,
  getUsername,
  getAuthRefresh,
} from "../../redux/auth/auth-selectors";
import { useSelector, useDispatch } from "react-redux";
import { CorrectString } from "../CorrectString";
import { ReactComponent as Logout } from "../../image/Icon/logout.svg";
import ChangeAvatarForm from "../ChangeAvatarForm/ChangeAvatarForm";
import s from "./UserMenu.module.css";

export default function UserMenu({ onClick }) {
  const [show, setShow] = useState(false);
  const isAuth = useSelector(getAuth);
  const isAuthRefresh = useSelector(getAuthRefresh);
  const user = useSelector(getUsername);
  const avatar = useSelector(getUserAvatar);
  const dispatch = useDispatch();
  const isMobileToTablet = useMediaQuery({ maxWidth: 479.9 });
  const isTablet = useMediaQuery({ minWidth: 480 });
  const isDesktop = useMediaQuery({ minWidth: 768 });

  let defaultImage =
    "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y";
  let gravatar = avatar?.includes("gravatar");
  let newAvatar = `https://credit-calculator-backend-production.up.railway.app/${avatar}`;
  const isAvatar = newAvatar.includes("undefined") ? defaultImage : newAvatar;

  const handleShow = () => {
    setShow((prev) => !prev);
  };

  return (
    <>
      {isAuth && !isAuthRefresh ? (
        <>
          {" "}
          <div style={{ display: "flex", alignItems: "center" }}>
            <div className={s.sign__avatar__wrapper}>
              <button className={s.sign__avatar} onClick={handleShow}>
                <img
                  style={{ borderRadius: "50%" }}
                  src={gravatar ? avatar : isAvatar}
                  alt="avatar"
                  className={s.sign__avatar_img}
                />
                {(isMobileToTablet || isDesktop) && (
                  <span className={s.sign__avatar_text}>
                    {CorrectString(user)}
                  </span>
                )}
              </button>
              <ChangeAvatarForm
                className={s.sign__avatar_form}
                hidden={handleShow}
                show={show}
              />
            </div>

            {isMobileToTablet || isDesktop ? (
              <ul className={s.sign}>
                <li className={s.sign__item}>
                  <button
                    type="button"
                    className={s.sign__logout}
                    onClick={() => dispatch(logOut())}
                  >
                    <>
                      {" "}
                      <Logout className={s.sign__logout_icon} />{" "}
                      <span className={s.sign__logout_text}>Logout</span>
                    </>
                  </button>
                </li>
              </ul>
            ) : (
              <button
                type="button"
                className={s.sign__logout}
                onClick={() => dispatch(logOut())}
              >
                <>
                  {" "}
                  <Logout className={s.sign__logout_icon} />{" "}
                  {!isTablet && (
                    <span className={s.sign__logout_text}>Logout</span>
                  )}
                </>
              </button>
            )}
          </div>
        </>
      ) : (
        <ul className={s.sign}>
          <li className={s.sign__item}>
            <NavLink
              to="/signup"
              onClick={onClick}
              className={({ isActive }) =>
                isActive ? s.sign__actived : s.sign__link
              }
            >
              SignUp
            </NavLink>
          </li>
          <li className={s.sign__item}>
            <NavLink
              to="/login"
              onClick={onClick}
              className={({ isActive }) =>
                isActive ? s.sign__actived : s.sign__link
              }
            >
              Login
            </NavLink>
          </li>
        </ul>
      )}
    </>
  );
}

UserMenu.propTypes = {
  onClick: PropTypes.func,
};
