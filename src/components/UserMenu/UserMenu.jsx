import css from "./UserMenu.module.css";

import { FiLogIn } from "react-icons/fi";
import { FaUser } from "react-icons/fa";

export const UserMenu = () => {
  return (
    <div className={css.wrapper}>
      <div className={css.userInfo}>
        <FaUser className={css.userIcon} />

        <div className={css.nameBlock}>
          <p>Name</p>
          <p>Surname</p>
        </div>
      </div>

      <button className={css.logBtn} type="button">
        Log Out
        <FiLogIn className={css.icon} />
      </button>
    </div>
  );
};
