import Container from "../../components/Container";
import LoginForm from "../../components/LoginForm";
import { useMediaQuery } from "react-responsive";
import s from "./LoginPage.module.css";

export default function LoginPage() {
  const isMobilMenuToTablet = useMediaQuery({ maxWidth: 479.9 });
  return (
    <section className={s.add}>
      <Container
        color={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {!isMobilMenuToTablet && <h2 className={s.section_title}>Login</h2>}
        <LoginForm />
      </Container>
    </section>
  );
}
