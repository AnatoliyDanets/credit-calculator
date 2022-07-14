import PropTypes from "prop-types";
import s from "./ResultTable.module.css";
export default function ResultTable({ downPay, arr, res, total }) {
  return (
    <div className={s.resultTable}>
      <table className={s.resultTable__table}>
        <thead className={s.resultTable__head}>
          <tr className={s.resultTable__head_row}>
            <th className={s.resultTable__head_sel}>Number of months</th>
            <th className={s.resultTable__head_sel}>Monthly payment</th>
          </tr>
        </thead>

        <tbody className={s.resultTable__body}>
          <tr key={"casc2234asc"} className={s.resultTable__body_row}>
            <td className={s.resultTable__body_sel}>first mounth</td>
            <td className={s.resultTable__body_sel}>{downPay}</td>
          </tr>
          {arr.map((el, i) => {
            return (
              <tr key={i} className={s.resultTable__body_row}>
                <td className={s.resultTable__body_sel}>{el} mounth</td>
                <td className={s.resultTable__body_sel}>{res.toFixed(2)}</td>
              </tr>
            );
          })}
          <tr
            key={"cascasc"}
            className={s.resultTable__body_row}
            style={{ boxShadow: "none" }}
          >
            <td
              className={s.resultTable__body_sel}
              style={{
                backgroundColor: "#e92121",
                color: "#ffffff",
              }}
            >
              Total pay
            </td>
            <td
              className={s.resultTable__body_sel}
              style={{
                backgroundColor: "#e92121",
                color: "#ffffff",
              }}
            >
              {total.toFixed(2)}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

ResultTable.propTypes = {
  downPay: PropTypes.string,
  arr: PropTypes.array,
  res: PropTypes.number,
  total: PropTypes.number,
};
