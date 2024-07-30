import css from "./AuthNav.module.css";

import { FiLogIn } from "react-icons/fi";

export const AuthNav = () => {
  return (
    <div className={css.wrapper}>
      <button className={css.logBtn}>
        <FiLogIn className={css.icon} />
        Log in
      </button>
      <button className={css.regBtn}>Registration</button>
    </div>
  );
};
