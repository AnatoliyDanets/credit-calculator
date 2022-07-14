import PropTypes from "prop-types";
import ProgressBar from "../ProgressBar";

export default function ProgressSwitch({ value }) {
  if (value >= 0 && value < 6) {
    return <ProgressBar bgcolor="red" progress={0} />;
  }

  if (value === 6) {
    return <ProgressBar bgcolor="#e12f2f" progress={100} text={"Easy"} />;
  }
  if (value > 6 && value < 8) {
    return <ProgressBar bgcolor="orange" progress={200} text={"Medium"} />;
  }
  if (value >= 8 && value < 10) {
    return <ProgressBar bgcolor="#37f3ca" progress={300} text={"Strong"} />;
  }
  if (value >= 10) {
    return (
      <ProgressBar bgcolor="#82a0cf" progress={400} text={"Protection 100%"} />
    );
  }
  return null;
}

ProgressSwitch.propTypes={
  value:PropTypes.number
}
