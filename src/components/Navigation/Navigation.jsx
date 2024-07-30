import css from "./Navigation.module.css";

import { NavLink } from "react-router-dom";

export const Navigation = () => {
  //   const { isLoggedIn } = useAuth();

  return (
    <nav className={css.nav}>
      <NavLink className={css.link} to="/">
        <button className={css.btn}>Home</button>
      </NavLink>
      <NavLink className={css.link} to="/teachers">
        <button className={css.btn}>Teachers</button>
      </NavLink>
      {/* {isLoggedIn && (
        <NavLink className={css.link} to="/favorites">
          <button className={css.btn}>Favorites</button>
        </NavLink>
      )} */}
    </nav>
  );
};
