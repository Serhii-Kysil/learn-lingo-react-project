import { fetchTeachers } from "../../redux/Teachers/operations";
import {
  selectIsItemsLoading,
  selectItemsError,
  selectTeachers,
  selectCurrentPage,
  selectLastKey,
  selectHasMore,
} from "../../redux/Teachers/selector";

import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import css from "./TeachersPage.module.css";
import { TeachersList } from "../../components/TeachersList/TeachersList";
import { DropDownBlock } from "../../components/DropDownBlock/DropDownBlock";

export default function TeachersPage() {
  const dispatch = useDispatch();

  const teachers = useSelector(selectTeachers);
  const isLoading = useSelector(selectIsItemsLoading);
  const isError = useSelector(selectItemsError);
  const currentPage = useSelector(selectCurrentPage);
  const lastKey = useSelector(selectLastKey);
  const hasMore = useSelector(selectHasMore);

  const [page, setPage] = useState(1);
  const [language, setLanguage] = useState("English");
  const [level, setLevel] = useState("A1 Beginner");
  const [price, setPrice] = useState(30);

  useEffect(() => {
    dispatch(fetchTeachers({ page, lastKey: null }));
  }, [dispatch]);

  useEffect(() => {
    if (page > 1) {
      dispatch(fetchTeachers({ page, lastKey }));
    }
  }, [dispatch, page, lastKey]);

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  if (isLoading && currentPage === 0) {
    return <div className={css.pageCont}>Loading...</div>;
  }

  if (isError) {
    return <div className={css.pageCont}>Error: {isError}</div>;
  }

  return (
    <div className={css.pageCont}>
      <DropDownBlock
        language={language}
        setLanguage={setLanguage}
        level={level}
        setLevel={setLevel}
        price={price}
        setPrice={setPrice}
      />

      <TeachersList items={teachers} />
      {hasMore && (
        <button
          type="button"
          className={css.loadMoreBtn}
          onClick={handleLoadMore}
          disabled={isLoading}
        >
          {isLoading ? "Loading..." : "Load more"}
        </button>
      )}
    </div>
  );
}
