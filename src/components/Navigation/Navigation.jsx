import { NavLink, Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import PropTypes from "prop-types";
import {useSelector} from "react-redux"
import { getAuth } from "../../redux/auth/auth-selectors";
import { ReactComponent as Logo } from "../../image/Icon/logo.svg";
import s from "./Navigation.module.css";

export default function Navigation({ onClick }) {
  const isAuth= useSelector(getAuth)
  const isMobile = useMediaQuery({ maxWidth: 479.9 });

  return (
    <nav className={s.navigation}>
      <ul className={s.nav}>
      {!isAuth && isMobile && <li className={s.nav__item}>
          <Link to="/">
            <Logo className={s.nav__icon} />
          </Link>
        </li>} 

        {(isAuth && !isMobile)  && <li className={s.nav__item}>
          <Link to="/">
            <Logo className={s.nav__icon} />
          </Link>
        </li>} 
        {(!isAuth && !isMobile)  && <li className={s.nav__item}>
          <Link to="/">
            <Logo className={s.nav__icon} />
          </Link>
        </li>} 
        <li className={s.nav__item}>
          <NavLink
            to="/"
            onClick={onClick}
            className={({ isActive }) =>
              isActive ? s.nav__actived : s.nav__link
            }
          >
            Home
          </NavLink>
        </li>
        <li className={s.nav__item}>
          <NavLink
            to="/calculate"
            onClick={onClick}
            className={({ isActive }) =>
              isActive ? s.nav__actived : s.nav__link
            }
          >
            Calculator
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

Navigation.propTypes={
  onClick:PropTypes.func
}