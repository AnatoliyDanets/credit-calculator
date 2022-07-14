import PropTypes from "prop-types";
import s from "./Container.module.css";
export default function Container({ color, children }) {
  return (
    <div style={color} className={s.container}>
      {children}
    </div>
  );
}

Container.propTypes = {
  children: PropTypes.node,
  color: PropTypes.object,
};
