import Container from "../Container";
import s from "./Footer.module.css";
export default function Footer() {
  return (
    <footer className={s.footer}>
      <Container>
        <span className={s.footer__text}>Copyright 2022</span>
      </Container>
    </footer>
  );
}
