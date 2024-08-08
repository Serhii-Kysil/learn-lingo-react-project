import { FaRegHeart, FaHeart } from "react-icons/fa";

import css from "./FavoriteButton.module.css";

export const FavoriteButton = ({ isFavorite, onClick, isLoggedIn }) => (
  <>
    {isLoggedIn && isFavorite && (
      <FaHeart className={css.pickedHeart} onClick={onClick} />
    )}

    {(!isLoggedIn || !isFavorite) && (
      <FaRegHeart className={css.heart} onClick={onClick} />
    )}
  </>
);
