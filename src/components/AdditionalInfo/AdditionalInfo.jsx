import css from "./AdditionalInfo.module.css";

export const AdditionalInfo = () => {
  return (
    <div className={css.addInfoBlock}>
      <ul className={css.infoList}>
        <li className={css.listItem}>
          <span className={css.main}>32,000 +</span>
          <span className={css.second}>Experienced tutors</span>
        </li>
        <li className={css.listItem}>
          {" "}
          <span className={css.main}>300,000 +</span>
          <span className={css.second}>5-star tutor reviews</span>
        </li>
        <li className={css.listItem}>
          {" "}
          <span className={css.main}>120 +</span>
          <span className={css.second}>Subjects taught</span>
        </li>
        <li className={css.listItem}>
          {" "}
          <span className={css.main}>200 +</span>
          <span className={css.second}>Tutor nationalities</span>
        </li>
      </ul>
    </div>
  );
};
