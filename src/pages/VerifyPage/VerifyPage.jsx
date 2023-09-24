import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";
import s from "./VerifyPage.module.css";

axios.defaults.baseURL = "https://credit-calculator-backend-production.up.railway.app/api/";

export default function VerifyPage() {
  let { verificationToken } = useParams();
  const verify = async (token) => {
    try {
      const { data } = await axios.get(`users/verify/${token}`);
      console.log(data);
      if (!data) {
        return;
      }
      return data;
    } catch (error) {
      if (error.response.status === 404) {
        return;
      }
      return error.response.message;
    }
  };

  useEffect(() => {
    verify(verificationToken);
  }, [verificationToken]);

  return (
    <>
      <div className={s.backdrop}>
        <div className={s.modal}>
          <p className={s.text}>You have successfully registered</p>
          <NavLink to={`/login`} className={s.btn}>
            Ok
          </NavLink>
        </div>
      </div>
    </>
  );
}
