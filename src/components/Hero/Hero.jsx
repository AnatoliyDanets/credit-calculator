import classNames from "classnames";
import Container from "../Container";
import s from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={classNames(s.hero, s.hero__container)}>
      <Container>
        <h1 className={s.hero__title}>Credit calculator</h1>
        <p className={s.hero__text}>
          This resource is designed to calculate the cost of lending. You can
          create your own bank, or several banks. According to the data that you
          enter, you can get the result of lending. This will help you choose a
          bank whose conditions will satisfy you more.
        </p>
        <a href="#Instruction" className={s.hero__link}>
          Instruction
        </a>
      </Container>
    </section>
  );
}
