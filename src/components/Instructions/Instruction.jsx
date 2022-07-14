import { useState } from "react";
import s from "./Instruction.module.css";

export default function Instruction({ name, id, children, hidden }) {
  const [show, setShow] = useState(false);

  const handleToogle = () => {
    setShow((prev) => !prev);
  };
  return (
    <li className={s.instructions__item} key={id}>
      <button
        className={s.instructions__btn}
        type="button"
        aria-haspopup="true"
        onClick={handleToogle}
      >
        {name}
      </button>
      {show && <ul className={s.instruction__list}>{children}</ul>}
    </li>
  );
}
