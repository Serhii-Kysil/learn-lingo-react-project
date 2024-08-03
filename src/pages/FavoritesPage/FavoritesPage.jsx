import css from "./FavoritesPage.module.css";

import { selectFavorites } from "../../redux/Teachers/selector";
import { TeachersList } from "../../components/TeachersList/TeachersList";

import { useSelector } from "react-redux";

export default function FavoritesPage() {
  const favotites = useSelector(selectFavorites);

  return (
    <>
      <div className={css.pageCont}>
        <TeachersList items={favotites} />
      </div>
    </>
  );
}
