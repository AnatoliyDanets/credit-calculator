import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { deleteBank } from "../../redux/banks/operations";
import MobileTableItem from "./MobileTableItem";
import s from "./MobileTable.module.css";

export default function Table({ banks, onChange }) {
  const dispatch = useDispatch();
  return (
    <>
      <table className={s.tableBank}>
        {banks.map((bank, i) => (
          <tbody key={i} className={s.tableBank__body}>
            <tr className={s.tableBank__row}>
              <td className={s.tableBank__sel}>Bank</td>
              <td className={s.tableBank__sel}>Created</td>
              <td className={s.tableBank__sel}>Interest rate %</td>
              <td className={s.tableBank__sel}>Max credit</td>
              <td className={s.tableBank__sel}>Min down payment</td>
              <td className={s.tableBank__sel}>Сredit term</td>
              <td className={s.tableBank__sel}> Edit/Delete</td>
            </tr>

            <tr className={s.tableBank__row_rigth}>
              <MobileTableItem
                key={bank._id}
                id={bank._id}
                name={bank.name}
                createDate={bank.createDate}
                category={bank.category}
                max={bank.max}
                min={bank.min}
                credit={bank.credit}
                onChange={onChange}
                data={bank._id}
                onDelete={() => dispatch(deleteBank(bank._id))}
              />
            </tr>
          </tbody>
        ))}
      </table>
    </>
  );
}

Table.propTypes = {
  banks: PropTypes.array,
  onChange: PropTypes.func,
};
