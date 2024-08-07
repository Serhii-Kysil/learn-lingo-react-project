import css from "./FavoritesPage.module.css";

import { selectFavorites } from "../../redux/Teachers/selector";
import { TeachersList } from "../../components/TeachersList/TeachersList";

import { useSelector } from "react-redux";
import { DropDownBlock } from "../../components/DropDownBlock/DropDownBlock";

export default function FavoritesPage() {
  const favotites = useSelector(selectFavorites);

  return (
    <>
      <div className={css.pageCont}>
        <DropDownBlock />

        <TeachersList items={favotites} />
      </div>
    </>
  );
}
