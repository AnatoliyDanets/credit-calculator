import { useState } from "react";
import { toast } from "react-toastify";
import PropTypes from "prop-types";
import { CorrectString } from "../CorrectString";
import Modal from "../Modal";
import ResultTable from "../ResultTable";
import Button from "../Button";
import s from "./TableCalculate.module.css";

export default function TableCalculate({ banks }) {
  const [currentBank, setCurrentBank] = useState("Choose");
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(0);
  const [resArr, setResArr] = useState([]);
  const [downPay, setDownPay] = useState(0);
  const [total, setTotal] = useState(0);
  const [result, setResult] = useState(0);
  const [modal, setModal] = useState(false);
  const isDelBank = banks.every((bank) => bank.name !== currentBank);
  const changeBank = (e) => {
    const { value } = e.target;
    setCurrentBank(value);
    setMax(0);
    setResult(0);
    setDownPay(0);
  };

  const handleResultTable = () => {
    const newArr = [];
    const arr = banks
      .filter((el) => el.name === currentBank)
      .map((el) => {
        let overpayment =
          Number(max) * (+el.category / 100) * (+el.credit / 12); //переплата

        let totalPay = +overpayment + Number(max); //общая сумма с переплатой
        let downPayment = Number(max) * (+el.min / 100); //первоначальный взнос

        if (Number(max) > Number(el.max)) {
          return toast.warning("Initial loan more than max value credit");
        }
        if (max < 10000) {
          return toast.warning("minimum 10000");
        }

        if (Number(min) < Number(downPayment)) {
          return toast.warning(` minimum payment: ${downPayment}`);
        }
        if (Number(min) > Number(max) - 1) {
          return toast.warning(` max payment: ${Number(max) - 1}`);
        }
        let res = (totalPay - Number(min)) / Number(el.credit - 1);
        for (let j = 2; j < +el.credit + 1; j += 1) {
          let val = +j;
          newArr.push(val);
          setResArr(newArr);
        }
        return (
          setResult(res),
          setTotal(totalPay),
          setMax(0),
          setMin(0),
          setDownPay(min)
        );
      });
    setModal(true);
    return arr;
  };
  return (
    <>
      <table
        style={
          currentBank === "Choose" || isDelBank
            ? { width: "290px" }
            : { width: "" }
        }
        className={s.tableCalculate}
      >
        <thead className={s.tableCalculate__head}>
          <tr className={s.tableCalculate__head_row}>
            <th className={s.tableCalculate__head_sel}>
              <select
                name="bank"
                className={s.tableCalculate__head_select}
                onChange={changeBank}
                value={CorrectString(currentBank)}
              >
                <option key="weq" value={CorrectString(currentBank)}>
                  {currentBank && isDelBank
                    ? "Choose"
                    : CorrectString(currentBank)}
                </option>
                {banks.map((bank) => {
                  return (
                    <option key={bank._id} id={bank._id} value={bank.name}>
                      {CorrectString(bank.name)}
                    </option>
                  );
                })}
              </select>
            </th>
            {currentBank === "Choose" || isDelBank ? (
              ""
            ) : (
              <>
                <th className={s.tableCalculate__head_sel}>Initial loan</th>
                <th className={s.tableCalculate__head_sel}>Down payment</th>
              </>
            )}
          </tr>
        </thead>
        {currentBank === "Choose" || isDelBank ? (
          <tbody className={s.tableCalculate__body}>
            <tr className={s.tableCalculate__body_row}>
              <td className={s.tableCalculate__body_sel}>
                <b className={s.tableCalculate__title}>Choose Bank</b>
              </td>
            </tr>
          </tbody>
        ) : (
          <tbody className={s.tableCalculate__body}>
            {banks.map((el) => {
              return (
                el.name === currentBank && (
                  <tr key="csdvsdv" className={s.tableCalculate__body_row}>
                    <td className={s.tableCalculate__body_sel}>
                      {CorrectString(el.name)}
                    </td>
                    <td className={s.tableCalculate__body_sel}>
                      <input
                        className={s.tableCalculate__body_input}
                        type="number"
                        value={max === 0 ? setMax(el.max) : max}
                        onChange={(e) => setMax(e.target.value)}
                      />
                    </td>
                    <td className={s.tableCalculate__body_sel}>
                      <input
                        className={s.tableCalculate__body_input}
                        type="number"
                        value={min}
                        onChange={(e) => setMin(e.target.value)}
                      />
                    </td>
                  </tr>
                )
              );
            })}
          </tbody>
        )}
      </table>
      {currentBank === "Choose" ? (
        ""
      ) : (
        <Button type="button" onClick={handleResultTable} children="Result" />
      )}
      {modal && downPay > 0 && (
        <Modal
          onClose={() => {
            setModal(false);
            setDownPay(0);
          }}
        >
          <ResultTable
            downPay={downPay}
            arr={resArr}
            res={result}
            total={total}
          />
        </Modal>
      )}
    </>
  );
}

TableCalculate.propTypes = {
  banks: PropTypes.array,
};
