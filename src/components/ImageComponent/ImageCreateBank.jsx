import { useMediaQuery } from "react-responsive";
import s from "./ImageComponent.module.css";

export default function ImageCreateBank() {
  const isMobile = useMediaQuery({ maxWidth: 1023.9 });

  return (
    <>
      <li className={s.instruction__item}>
        <b className={s.instruction__text}>
          Click on the button to create your first bank
        </b>
        {isMobile ? (
          <img
            src="https://i.ibb.co/tsSCxkt/Create-Bank-Mobile.jpg"
            alt="Create-Bank-Mobile"
            width="280px"
            border="0"
          />
        ) : (
          <img
            src="https://i.ibb.co/Sskc8K8/create-Bank.jpg"
            alt="create-Bank"
            width="996px"
            border="0"
          />
        )}
      </li>
      <li className={s.instruction__item}>
        <b className={s.instruction__text}>Enter your bank information</b>
        {isMobile ? (
          <img
            src="https://i.ibb.co/YQPpYxP/add-Bank-Mobile.jpg"
            alt="add-Bank-Mobile"
            width="280px"
            border="0"
          />
        ) : (
          <img
            src="https://i.ibb.co/sbqKPGz/addBank.jpg"
            alt="addBank"
            border="0"
            
          />
        )}
      </li>
    </>
  );
}



//   <img src="https://i.ibb.co/sbqKPGz/addBank.jpg" alt="addBank" border="0">
// <img src="https://i.ibb.co/9Tq37rC/choose-Bank.jpg" alt="choose-Bank" border="0">
// <img src="https://i.ibb.co/S37xjDC/comfirm-Mail.jpg" alt="comfirm-Mail" border="0">
// <img src="https://i.ibb.co/YP7SSxn/confirm-Mail.jpg" alt="confirm-Mail" border="0">
// <img src="https://i.ibb.co/Sskc8K8/create-Bank.jpg" alt="create-Bank" border="0">
// <img src="https://i.ibb.co/rHhRDhX/login.jpg" alt="login" border="0">
// <img src="https://i.ibb.co/fSYQ9Ww/mail.jpg" alt="mail" border="0">
// <img src="https://i.ibb.co/ThW2JNq/result.jpg" alt="result" border="0">
// <img src="https://i.ibb.co/VjgwFvP/signup.jpg" alt="signup" border="0">
// <img src="https://i.ibb.co/BnbgwTd/table-Calc.jpg" alt="table-Calc" border="0"></img>
