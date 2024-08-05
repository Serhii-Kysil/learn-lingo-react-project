import { AuthNav } from "../AuthNav/AuthNav";
import { Navigation } from "../Navigation/Navigation";
import { NavLink } from "react-router-dom";

import css from "./AppBar.module.css";
import { UserMenu } from "../UserMenu/UserMenu";

import { selectIsLoggedIn } from "../../redux/Auth/selector";
import { useSelector } from "react-redux";

export const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <header className={css.header}>
      <NavLink className={css.link} to="/">
        <div className={css.logoCont}>
          <svg className={css.svg}>
            <use href="/public/symbol-defs.svg#icon-ukraine"></use>
          </svg>
          <span className={css.logoText}>LearnLingo</span>
        </div>
      </NavLink>

      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};
