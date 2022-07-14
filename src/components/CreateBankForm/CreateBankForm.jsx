import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBank } from "../../redux/banks/operations";
import { Error } from "../Errors";
import { toast } from "react-toastify";
import PropTypes from "prop-types";
import Button from "../Button/Button";
import s from "./CreateBankForm.module.css";

export default function CreateBankForm({ onSave }) {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [max, setMax] = useState("");
  const [min, setMin] = useState("");
  const [credit, setCredit] = useState("");
  const [errorName, setErrorName] = useState(false);
  const [textErrorName, setTextError] = useState("Invalid");
  const [errorMax, setErrorMax] = useState(false);
  const [textErrorMax, setTextErrorMax] = useState("Invalid");

  const handleBlur = (e) => {
    const { name, validity } = e.target;
    switch (name) {
      case "name":
        if (validity.patternMismatch || validity.tooShort || validity.tooLong) {
          setErrorName(true);
          setTextError(
            Error.errorName(
              validity.tooShort,
              validity.tooLong,
              validity.patternMismatch
            )
          );
        } else {
          setErrorName(false);
        }
        break;
      case "max":
        if (validity.rangeUnderflow || validity.rangeOverflow) {
          setErrorMax(true);
          setTextErrorMax(
            Error.errorMax(validity.rangeUnderflow, validity.rangeOverflow)
          );
        } else {
          setErrorMax(false);
        }
        break;

      default:
        break;
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "category":
        setCategory(value);
        break;
      case "max":
        setMax(value);
        break;
      case "min":
        setMin(value);
        break;
      case "credit":
        setCredit(value);
        break;
      default:
        break;
    }
  };
  const timeElapsed = Date.now();
  const today = new Date(timeElapsed);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      category.length !== 0 &&
      category !== "Choose" &&
      credit.length !== 0 &&
      credit !== "Choose" &&
      min.length !== 0 &&
      min !== "Choose"
    ) {
      dispatch(
        addBank({
          name,
          date: Date.now(),
          createDate: today.toDateString(),
          category,
          max,
          min,
          credit,
        })
      );
      onSave();
    } else {
      return toast.warning("All fields are required");
    }
  };

  return (
    <form className={s.createForm} onSubmit={handleSubmit}>
      <label className={s.createForm__label}>Bank Name</label>
      <div className={s.createForm__input_wrapper}>
        {errorName && (
          <span className={s.createForm__error}>{textErrorName}</span>
        )}
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={handleChange}
          onBlur={handleBlur}
          pattern="[a-zA-Z'-'\s]*"
          minLength={2}
          maxLength={60}
          className={s.createForm__input}
          required
        />
      </div>

      <label className={s.createForm__label}>Interest rate %</label>

      <select
        name="category"
        value={category}
        onChange={handleChange}
        className={s.createForm__select}
        min={5}
        max={30}
        required
      >
        <option value="Choose">Choose</option>
        <option value="5">5%</option>
        <option value="10">10%</option>
        <option value="20">20%</option>
        <option value="25">25%</option>
        <option value="30">30%</option>
      </select>

      <label className={s.createForm__label}>Max</label>
      <div className={s.createForm__input_wrapper}>
        {errorMax && (
          <span className={s.createForm__error}>{textErrorMax}</span>
        )}
        <input
          type="number"
          name="max"
          id="max"
          value={max}
          min={10000}
          max={1000000000}
          onChange={handleChange}
          onBlur={handleBlur}
          className={s.createForm__input}
          required
        />
      </div>
      <label className={s.createForm__label}>Down payment %</label>

      <select
        name="min"
        className={s.createForm__select}
        value={min}
        onChange={handleChange}
        required
      >
        <option value="Choose">Choose</option>
        <option value="5">5%</option>
        <option value="10">10%</option>
        <option value="20">20%</option>
        <option value="30">30%</option>
        <option value="40">40%</option>
        <option value="50">50%</option>
      </select>

      <label className={s.createForm__label}>Credit Term</label>

      <select
        name="credit"
        value={credit}
        className={s.createForm__select}
        onChange={handleChange}
        required
      >
        <option value="Choose">Choose</option>
        <option value="3">3</option>
        <option value="6">6</option>
        <option value="10">10</option>
        <option value="12">12</option>
        <option value="24">24</option>
        <option value="36">36</option>
        <option value="48">48</option>
      </select>
      <Button type={"submit"} children={"Add Bank"} />
    </form>
  );
}

CreateBankForm.propTypes = {
  onSave: PropTypes.func,
};
