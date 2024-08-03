import css from "./WelcomeInfo.module.css";

import { NavLink } from "react-router-dom";

export const WelcomeInfo = () => {
  return (
    <div className={css.welcomeInfo}>
      <h1 className={css.title}>
        Unlock your potential with the best{" "}
        <span className={css.highlight}>language</span> tutors
      </h1>
      <p className={css.desc}>
        Embark on an Exciting Language Journey with Expert Language Tutors:
        Elevate your language proficiency to new heights by connecting with
        highly qualified and experienced tutors.
      </p>
      <NavLink className={css.link} to="/teachers">
        <button className={css.btn}>Get started</button>
      </NavLink>
    </div>
  );
};
