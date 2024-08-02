/* eslint-disable react/prop-types */
import css from "./TeachersListItem.module.css";

import { FiBookOpen } from "react-icons/fi";
import { IoStar } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";

export const TeachersListItem = ({ teacher }) => {
  return (
    <li className={css.listItem}>
      <div className={css.imgCont}>
        <img
          src={teacher.avatar_url}
          alt="teacher avatar"
          className={css.img}
        />
      </div>
      <div className={css.infoBlock}>
        <div className={css.topBlock}>
          <div className={css.nameBlock}>
            <span className={css.span}>Languages</span>
            <p className={css.name}>{`${teacher.name} ${teacher.surname} `}</p>
          </div>
          <div className={css.topBar}>
            <div className={css.mainBar}>
              <div className={css.lessonsFormat}>
                <FiBookOpen className={css.bookIcon} />
                <p className={css.format}>Lessons online</p>
              </div>

              <span className={css.line}></span>

              <p className={css.lessonsDone}>
                Lessons done: {teacher.lessons_done}{" "}
              </p>

              <span className={css.line}></span>

              <div className={css.ratingBlock}>
                <IoStar className={css.starIcon} />
                <p>Rating: {teacher.rating}</p>
              </div>

              <span className={css.line}></span>

              <p className={css.price}>
                Price / 1 hour:{" "}
                <span className={css.priceSpan}>{teacher.price_per_hour}$</span>
              </p>
            </div>
            <FaRegHeart className={css.heart} />
          </div>
        </div>
        <div className={css.aboutBlock}>
          <p className={css.aboutSpeaks}>
            Speaks:{" "}
            <span className={css.aboutSpeaksSpan}>
              {teacher.languages.join(", ")}
            </span>
          </p>
          <p className={css.aboutLesson}>
            Lesson Info:{" "}
            <span className={css.aboutSpan}>{teacher.lesson_info}</span>
          </p>
          <p className={css.aboutCond}>
            Conditions:{" "}
            <span className={css.aboutSpan}>{teacher.conditions}</span>
          </p>
        </div>
      </div>
    </li>
  );
};
