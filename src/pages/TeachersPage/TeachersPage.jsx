import { fetchTeachers } from "../../redux/Teachers/operations";
import {
  selectIsItemsLoading,
  selectItemsError,
  selectTeachers,
} from "../../redux/Teachers/selector";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import css from "./TeachersPage.module.css";
import { TeachersList } from "../../components/TeachersList/TeachersList";

export default function TeachersPage() {
  const dispatch = useDispatch();

  const teachers = useSelector(selectTeachers);
  const isLoading = useSelector(selectIsItemsLoading);
  const isError = useSelector(selectItemsError);

  useEffect(() => {
    dispatch(fetchTeachers());
  }, [dispatch]);

  if (isLoading) {
    return <div className={css.pageCont}>Loading...</div>;
  }

  if (isError) {
    return <div className={css.pageCont}>Error: {isError}</div>;
  }

  return (
    <div className={css.pageCont}>
      <TeachersList items={teachers} />
      <button type="button" className={css.loadMoreBtn}>
        {isLoading ? "Loading..." : "Load more"}
      </button>
    </div>
  );
}
