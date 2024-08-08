import { FiBookOpen } from "react-icons/fi";
import { IoStar } from "react-icons/io5";

import css from "./TeacherStats.module.css";

export const TeacherStats = ({ lessonsDone, rating, pricePerHour }) => (
  <div className={css.mainBar}>
    <div className={css.lessonsFormat}>
      <FiBookOpen className={css.bookIcon} />
      <p className={css.format}>Lessons online</p>
    </div>
    <span className={css.line}></span>
    <p className={css.lessonsDone}>Lessons done: {lessonsDone}</p>
    <span className={css.line}></span>
    <div className={css.ratingBlock}>
      <IoStar className={css.starIcon} />
      <p>Rating: {rating}</p>
    </div>
    <span className={css.line}></span>
    <p className={css.price}>
      Price / 1 hour: <span className={css.priceSpan}>{pricePerHour}$</span>
    </p>
  </div>
);
