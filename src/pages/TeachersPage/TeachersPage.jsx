import { fetchTeachers } from "../../redux/Teachers/TeacherSlice";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

export default function TeachersPage() {
  const dispatch = useDispatch();

  const { items, isItemsLoading, itemsError } = useSelector(
    (state) => state.teachers
  );

  useEffect(() => {
    dispatch(fetchTeachers());
  }, [dispatch]);

  if (isItemsLoading) {
    return <div>Loading...</div>;
  }

  if (itemsError) {
    return <div>Error: {itemsError}</div>;
  }

  return (
    <div>
      <h1>Teachers</h1>
      <ul>
        {items.map((teacher) => (
          <li key={teacher.id}>{teacher.name}</li>
        ))}
      </ul>
    </div>
  );
}
