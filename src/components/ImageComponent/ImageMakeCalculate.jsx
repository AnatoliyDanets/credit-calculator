import { useMediaQuery } from "react-responsive";
import s from "./ImageComponent.module.css";

export default function ImageMakeCalculate() {
  const isMobile = useMediaQuery({ maxWidth: 1023.9 });
  return (
    <>
      <li className={s.instruction__item}>
        <b className={s.instruction__text}>Choose the bank you need</b>
        {isMobile ? (
          <img
            src="https://i.ibb.co/3SwBVFr/choosebank.jpg"
            alt="choosebank"
            width="280px"
            border="0"
          />
        ) : (
          <img
            src="https://i.ibb.co/9Tq37rC/choose-Bank.jpg"
            alt="choose-Bank"
            border="0"
            width="996px"
          />
        )}
      </li>
      <li className={s.instruction__item}>
        <b className={s.instruction__text}>
          Enter the loan amount and the amount of the first payment
        </b>
        {isMobile ? (
          <img
            src="https://i.ibb.co/2M0yphL/table-Calc-Mobile.jpg"
            alt="table-Calc-Mobile"
            width="280px"
            border="0"
          />
        ) : (
          <img
            src="https://i.ibb.co/BnbgwTd/table-Calc.jpg"
            alt="table-Calc"
            border="0"
          />
        )}
      </li>
      <li className={s.instruction__item}>
        <b className={s.instruction__text}>
          Get data on monthly payments and the total amount
        </b>
        {isMobile ? (
          <img
            src="https://i.ibb.co/KDSd4xW/result-Mobile.jpg"
            alt="result-Mobile"
            width="280px"
            border="0"
          />
        ) : (
          <img
            src="https://i.ibb.co/ThW2JNq/result.jpg"
            alt="result"
            border="0"
          />
        )}
      </li>
    </>
  );
}

/* <img src="https://i.ibb.co/YQPpYxP/add-Bank-Mobile.jpg" alt="add-Bank-Mobile" border="0">
<img src="https://i.ibb.co/P5Jz2v5/choose-Bank-Mobile.jpg" alt="choose-Bank-Mobile" border="0">
<img src="https://i.ibb.co/tsSCxkt/Create-Bank-Mobile.jpg" alt="Create-Bank-Mobile" border="0">
<img src="https://i.ibb.co/xhPxCfj/Login-Mobile.jpg" alt="Login-Mobile" border="0">
<img src="https://i.ibb.co/KDSd4xW/result-Mobile.jpg" alt="result-Mobile" border="0">
<img src="https://i.ibb.co/T40D2Ry/Signup-Mobile.jpg" alt="Signup-Mobile" border="0">
<img src="https://i.ibb.co/2M0yphL/table-Calc-Mobile.jpg" alt="table-Calc-Mobile" border="0"> */
