import { selectTeachers } from "../../redux/Teachers/selector";

import { useSelector } from "react-redux";
import { TeachersListItem } from "../TeachersListItem/TeachersListItem";

export const TeachersList = () => {
  const teachers = useSelector(selectTeachers);
  console.log(teachers);

  return (
    <>
      <ul>
        {teachers.map((teacher, index) => (
          <TeachersListItem teacher={teacher} key={index} />
        ))}
      </ul>
    </>
  );
};
