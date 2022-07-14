import Container from "../../components/Container";
import SignupForm from "../../components/SignupForm";
import { useMediaQuery } from "react-responsive";

import s from "./SignupPage.module.css";
export default function SignupPage() {
  const isMobilMenuToTablet = useMediaQuery({ maxWidth: 479.9 });

  return (
    <section id="signup" className={s.add}>
      <Container
        color={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
         {!isMobilMenuToTablet&& <h2 className={s.section_title}>Sign up</h2>} 

        <SignupForm />
      </Container>
    </section>
  );
}
