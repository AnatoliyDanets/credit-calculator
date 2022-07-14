import Hero from "../../components/Hero";
import Instructions from "../../components/Instructions";
import s from "./MainPage.module.css";

export default function MainPage() {
  return (
    <main className={s.main}>
      <Hero />
      <Instructions />
    </main>
  );
}
