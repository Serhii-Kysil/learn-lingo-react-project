import { TeachersListItem } from "../TeachersListItem/TeachersListItem";

import css from "./TeachersList.module.css";

export const TeachersList = ({ items }) => {
  return (
    <>
      <ul className={css.techersList}>
        {items.map((item, index) => (
          <TeachersListItem teacher={item} key={index} />
        ))}
      </ul>
    </>
  );
};
