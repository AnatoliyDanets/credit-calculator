import PropTypes from "prop-types";
import s from "./Button.module.css";

export default function Button({ width, type, disabled, onClick, children }) {
  return (
    <button
      type={type}
      style={width}
      disabled={disabled}
      onClick={onClick}
      className={s.btn}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
  disabled:PropTypes.bool
};
