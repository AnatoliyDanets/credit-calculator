import PropTypes from "prop-types";
import s from "./ProgressBar.module.css";

export default function ProgressBar({ bgcolor, progress, text }) {
  const Progress = {
    marginBottom: "30px",
    borderRadius: " 4px solid #E5F1EF",
  };

  const ProgressLine = {
    height: "4px",
    width: `${progress / 4}%`,
    backgroundColor: bgcolor,
    boxShadow: "0px 1px 8px rgba(36, 204, 167, 0.5)",
    borderRadius: 40,
    textAlign: "right",
    outline: "none",
  };

  return (
    <div className={s.progress} style={Progress}>
      <div style={ProgressLine} className={s.progress__wrap}>
        <span className={s.progress__text}>{text}</span>
      </div>
    </div>
  );
}

ProgressBar.propTypes = {
  bgcolor: PropTypes.string,
  progress: PropTypes.number,
  text: PropTypes.string,
};
