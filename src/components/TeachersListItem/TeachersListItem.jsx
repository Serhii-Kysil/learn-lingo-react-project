/* eslint-disable react/prop-types */
import css from "./TeachersListItem.module.css";

import { FiBookOpen } from "react-icons/fi";

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
          <div className={css.mainBar}>
            <div className={css.lessonsFormat}>
              <FiBookOpen className={css.bookIcon} />
              <p className={css.format}>Lessons online</p>
            </div>
            <span className={css.line}></span>
          </div>
        </div>
      </div>
    </li>
  );
};
