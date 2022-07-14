import { useRef, useState } from "react";
import { useDispatch } from "react-redux/es/exports";
import { changeAvatar } from "../../redux/auth/auth-operations";
import PropTypes from "prop-types";
import s from "./ChangeAvatarForm.module.css";

export default function ChangeAvatarForm({ className, hidden, show }) {
  const [load, setLoad] = useState("Upload your avatar");
  const [disabled, setDisabled] = useState(true);
  const [errorPhoto, setErrorPhoto] = useState(false);
  const [textErrorPhoto, setTextErrorPhoto] = useState("Invalid");
  const photo = useRef();
  const dispatch = useDispatch();

  const handleAvatarChange = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("avatar", photo?.current?.files[0]);
    dispatch(changeAvatar(data));
    hidden();
  };

  const handleFileChange = () => {
    const arrStr = photo.current.files[0]?.name.split(".");
    if (arrStr) {
      const correctStrVisible = [
        ...arrStr[0]?.slice(0, 6),
        ".",
        ...arrStr[1],
      ].join("");
      setLoad(correctStrVisible ?? "Upload your avatar");
    }

    const size = 5242880;

    if (photo.current.files[0]?.size > size) {
      setErrorPhoto(true);
      setTextErrorPhoto("The photo size must not be greater than 5 Mb");
      setDisabled(true);
      return;
    } else {
      setErrorPhoto(false);
      setDisabled(false);
    }

    if (photo.current.files[0]?.type !== "image/jpeg") {
      setErrorPhoto(true);
      setTextErrorPhoto("Only format jpeg");
      if (!photo.current.files[0]?.name) {
        setErrorPhoto(false);
        setLoad("Upload your avatar");
        setDisabled(true);
        return;
      }
      setDisabled(true);

      return;
    } else {
      setErrorPhoto(false);
      setDisabled(false);
    }

    const reader = new FileReader();
    reader.readAsDataURL(photo.current.files[0]);
    reader.onload = function (e) {
      const image = new Image();

      image.src = e.target.result;

      image.onload = function () {
        const height = this.height;
        const width = this.width;
        if (height < 70 || width < 70) {
          setErrorPhoto(true);
          setTextErrorPhoto("Minimum size 70x70");
          setDisabled(true);
          return;
        } else {
          setErrorPhoto(false);
          setDisabled(false);
        }
      };
    };
  };

  return (
    <form
      className={className}
      onSubmit={handleAvatarChange}
      style={show ? { opacity: "1" } : { opacity: "0" }}
    >
      {errorPhoto && <span className={s.file__error}>{textErrorPhoto}</span>}
      <label htmlFor="file" data-title={load} className={s.file__label}>
        {load}
      </label>
      <input
        className={s.file__input}
        id="file"
        name="file"
        type="file"
        ref={photo}
        onChange={handleFileChange}
        accept=".jpeg, .jpg"
      />
      <button type="submit" disabled={disabled} className={s.file__btn}>
        Change
      </button>
    </form>
  );
}
ChangeAvatarForm.propTypes = {
  className: PropTypes.string,
  hidden: PropTypes.func,
  show: PropTypes.bool,
};
