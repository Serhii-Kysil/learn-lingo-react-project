import css from "./FavoritesPage.module.css";

import { selectFavorites } from "../../redux/Teachers/selector";
import { TeachersList } from "../../components/TeachersList/TeachersList";

import { useSelector } from "react-redux";
import { DropDownBlock } from "../../components/DropDownBlock/DropDownBlock";

export default function FavoritesPage() {
  const favorites = useSelector(selectFavorites);

  return (
    <>
      <div className={css.pageCont}>
        {/* <DropDownBlock /> */}

        {favorites.length > 0 ? (
          <TeachersList items={favorites} />
        ) : (
          <p className={css.placeholder}>You have no favorite teachers yet.</p>
        )}
      </div>
    </>
  );
}
