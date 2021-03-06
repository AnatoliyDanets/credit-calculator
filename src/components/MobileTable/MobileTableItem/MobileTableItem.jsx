import PropTypes from "prop-types";
import { CorrectString } from "../../CorrectString";
import s from "../MobileTable.module.css";
export default function MobileTableItem({
  name,
  createDate,
  category,
  max,
  min,
  credit,
  onChange,
  data,
  onDelete,
}) {
  return (
    <>
      <td className={s.tableBank__sel}>{CorrectString(name)}</td>
      <td className={s.tableBank__sel}>{createDate}</td>
      <td className={s.tableBank__sel}>{category}%</td>
      <td className={s.tableBank__sel}>{max}</td>
      <td className={s.tableBank__sel}>{min}%</td>
      <td className={s.tableBank__sel}>{credit}</td>
      <td className={s.tableBank__btns}>
        <button
          type="button"
          onClick={onChange}
          data-source={data}
          className={s.tableBank__btn}
          title="edit"
        >
          <svg
            className={s.tableBank__btn_icon}
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
          >
            <title>edit</title>
            <path d="M27 0c2.761 0 5 2.239 5 5 0 1.126-0.372 2.164-1 3l-2 2-7-7 2-2c0.836-0.628 1.874-1 3-1zM2 23l-2 9 9-2 18.5-18.5-7-7-18.5 18.5zM22.362 11.362l-14 14-1.724-1.724 14-14 1.724 1.724z"></path>
          </svg>
        </button>

        <button
          type="submit"
          onClick={onDelete}
          className={s.tableBank__btn}
          title="delete"
        >
          <svg
            className={s.tableBank__btn_icon}
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
          >
            <title>delete</title>
            <path d="M4 10v20c0 1.1 0.9 2 2 2h18c1.1 0 2-0.9 2-2v-20h-22zM10 28h-2v-14h2v14zM14 28h-2v-14h2v14zM18 28h-2v-14h2v14zM22 28h-2v-14h2v14z"></path>
            <path d="M26.5 4h-6.5v-2.5c0-0.825-0.675-1.5-1.5-1.5h-7c-0.825 0-1.5 0.675-1.5 1.5v2.5h-6.5c-0.825 0-1.5 0.675-1.5 1.5v2.5h26v-2.5c0-0.825-0.675-1.5-1.5-1.5zM18 4h-6v-1.975h6v1.975z"></path>
          </svg>
        </button>
      </td>
    </>
  );
}

MobileTableItem.propTypes = {
  name: PropTypes.string,
  createDate: PropTypes.string,
  category: PropTypes.number,
  max: PropTypes.number,
  min: PropTypes.number,
  credit: PropTypes.number,
  onChange: PropTypes.func,
  onDelete: PropTypes.func,
  data: PropTypes.string,
};
