import Container from "../Container";
import Instruction from "./Instruction";
import ImageSignup from "../ImageComponent/ImageSignup";
import ImageLogin from "../ImageComponent/ImageLogin";
import ImageCreateBank from "../ImageComponent/ImageCreateBank";
import ImageMakeCalculate from "../ImageComponent/ImageMakeCalculate";
import s from "./Instruction.module.css";

export default function Instructions() {
  return (
    <section id="Instruction" className={s.instructions}>
      <Container>
        <h2 className={s.instructions__title}>Instruction</h2>
        <ul className={s.instructions__list}>
          <Instruction name={"Sign up"} children={<ImageSignup />} />
          <Instruction name={"Login"} children={<ImageLogin />} />
          <Instruction name={"Create Bank"} children={<ImageCreateBank />} />
          <Instruction
            name={"Make calculations"}
            children={<ImageMakeCalculate />}
          />
        </ul>
      </Container>
    </section>
  );
}
