import css from "./TeacherImage.module.css";

export const TeacherImage = ({ avatarUrl }) => (
  <div className={css.imgCont}>
    <img src={avatarUrl} alt="teacher avatar" className={css.img} />
    <svg className={css.avatarDot}>
      <use href="/symbol-defs.svg#icon-dot"></use>
    </svg>
  </div>
);
