import { useState } from "react";
import { useDispatch } from "react-redux";
import { addComment } from "../../redux/comments/comments-operations";
import { toast } from "react-toastify";
import Container from "../Container";
import Button from "../Button";
import { ReactComponent as Instagram } from "../../image/Icon/social/instagram.svg";
import { ReactComponent as Facebook } from "../../image/Icon/social/facebook.svg";
import { ReactComponent as Twitter } from "../../image/Icon/social/twitter.svg";
import { ReactComponent as Linkedin } from "../../image/Icon/social/linkedin.svg";
import s from "./Footer.module.css";

export default function Footer() {
  const [comment, setComment] = useState("");
  const dispatch = useDispatch("");
  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (comment.length < 2) {
      toast.error("Min 2 letters");
      return;
    }

    if (comment.replace(/\s/g, "") === "") {
      toast.error("Empty field");
      return;
    }
    dispatch(addComment({ comment: comment }));
    setComment("");
  };

  return (
    <footer className={s.footer}>
      <Container>
        <div className={s.footer__wrapper}>
          <div className={s.footer__social}>
            <b className={s.footer__title}>JOIN</b>
            <ul className={s.footer__list}>
              <li className={s.footer__item}>
                <a href="https://www.instagram.com/" className={s.footer__link}>
                  <Instagram className={s.footer__icon} />
                </a>
              </li>
              <li className={s.footer__item}>
                <a href="https://www.facebook.com/" className={s.footer__link}>
                  <Facebook className={s.footer__icon} />
                </a>
              </li>
              <li className={s.footer__item}>
                <a href="https://twitter.com/" className={s.footer__link}>
                  <Twitter className={s.footer__icon} />
                </a>
              </li>
              <li className={s.footer__item}>
                <a href="https://www.linkedin.com/" className={s.footer__link}>
                  <Linkedin className={s.footer__icon} />
                </a>
              </li>
            </ul>
          </div>
          <form onSubmit={handleCommentSubmit} className={s.footer__form}>
            <input
              className={s.footer__input}
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              type="text"
              placeholder="Leave feedback..."
            />
            <Button
              children={"SEND"}
              type={"submit"}
              width={{ fontWeight: "600" }}
            />
          </form>
        </div>
        <span className={s.footer__text}>Copyright 2022</span>
      </Container>
    </footer>
  );
}
