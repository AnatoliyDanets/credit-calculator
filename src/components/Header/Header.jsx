import { useMediaQuery } from "react-responsive";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../image/Icon/logo.svg";
import { ReactComponent as Burger } from "../../image/Icon/burger.svg";
import Container from "../Container";
import Navigation from "../Navigation";
import UserMenu from "../UserMenu";
import MobileMenu from "../MobileMenu";
import s from "./Header.module.css";

export default function Header() {
  const isMobile = useMediaQuery({ maxWidth: 479.9 });
  const [show, setShow] = useState(false);
  const handleMenuShow = () => {
    setShow((prev) => !prev);
  };

  return (
    <header className={s.header}>
      <Container
        color={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {isMobile ? (
          <>
            <Link to="/">
              <Logo title="logo" />
            </Link>

            <button
              className={s.header__mobile_btn}
              type="button"
              onClick={handleMenuShow}
              title="button-menu"
            >
              <Burger className={s.header__mobile_icon} />
            </button>
            <MobileMenu show={show} onClick={handleMenuShow} />
          </>
        ) : (
          <>
            <Navigation onClick={handleMenuShow} />
            <UserMenu onClick={handleMenuShow} />
          </>
        )}
      </Container>
    </header>
  );
}
