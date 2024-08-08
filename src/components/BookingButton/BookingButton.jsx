import css from "./BookingButton.module.css";

export const BookingButton = ({ onClick }) => (
  <button className={css.bookBtn} type="button" onClick={onClick}>
    Book trial lesson
  </button>
);
