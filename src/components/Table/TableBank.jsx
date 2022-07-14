import { useDispatch } from "react-redux";
import { useMediaQuery } from "react-responsive";
import PropTypes from "prop-types";
import { deleteBank } from "../../redux/banks/operations";
import TableBankItem from "./TableBankItem/TableBankItem";
import MobileTable from "../MobileTable";
import s from "./TableBank.module.css";

export default function TableBank({ banks, onChange }) {
  const dispatch = useDispatch();
  const isMobileTableToTablet = useMediaQuery({ maxWidth: 1023.9 });

  return (
    <>
      {isMobileTableToTablet ? (
        <MobileTable banks={banks} onChange={onChange} />
      ) : (
        <table className={s.tableBank}>
          <thead className={s.tableBank__head}>
            <tr className={s.tableBank_row}>
              <th className={s.tableBank__sel}>Bank</th>
              <th className={s.tableBank__sel}>Created</th>
              <th className={s.tableBank__sel}>Interest rate %</th>
              <th className={s.tableBank__sel}>Max credit</th>
              <th className={s.tableBank__sel}>Min down payment</th>
              <th className={s.tableBank__sel}>Сredit term</th>
              <th className={s.tableBank__sel}> Edit/Delete</th>
            </tr>
          </thead>

          <tbody className={s.tableBank__body}>
            {banks.map((bank) => (
              <TableBankItem
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
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}

TableBank.propTypes={
  bank:PropTypes.array,
  onChange:PropTypes.func
}
