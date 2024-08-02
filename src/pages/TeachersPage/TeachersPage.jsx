import { fetchTeachers } from "../../redux/Teachers/operations";
import {
  selectTeachers,
  selectIsItemsLoading,
  selectItemsError,
} from "../../redux/Teachers/selector";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

export default function TeachersPage() {
  const dispatch = useDispatch();

  const teachers = useSelector(selectTeachers);
  const isLoading = useSelector(selectIsItemsLoading);
  const isError = useSelector(selectItemsError);

  useEffect(() => {
    dispatch(fetchTeachers());
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {isError}</div>;
  }

  return (
    <div>
      <h1>Teachers</h1>
      <ul>
        {teachers.map((teacher) => (
          <li key={teacher.id}>{teacher.name}</li>
        ))}
      </ul>
    </div>
  );
}
