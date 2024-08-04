import css from "./Navigation.module.css";

import { NavLink } from "react-router-dom";

export const Navigation = () => {
  //   const { isLoggedIn } = useAuth();

  return (
    <nav className={css.nav}>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? `${css.link} ${css.active}` : css.link
        }
      >
        <button className={css.btn}>Home</button>
      </NavLink>
      <NavLink
        to="/teachers"
        className={({ isActive }) =>
          isActive ? `${css.link} ${css.active}` : css.link
        }
      >
        <button className={css.btn}>Teachers</button>
      </NavLink>

      {/* {isLoggedIn && (
        
      )} */}
      <NavLink
        className={({ isActive }) =>
          isActive ? `${css.link} ${css.active}` : css.link
        }
        to="/favorites"
      >
        <button className={css.btn}>Favorites</button>
      </NavLink>
    </nav>
  );
};
