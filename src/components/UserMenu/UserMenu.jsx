import css from "./UserMenu.module.css";

import { FiLogIn } from "react-icons/fi";
import { FaUser } from "react-icons/fa";

import { selectUser } from "../../redux/Auth/selector";
import { logoutUser } from "../../redux/Auth/operations";

import { useSelector, useDispatch } from "react-redux";

export const UserMenu = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <div className={css.wrapper}>
      <div className={css.userInfo}>
        <FaUser className={css.userIcon} />

        <div className={css.nameBlock}>
          {/* <p>Name</p>
          <p>Surname</p> */}
          <p>{user.email}</p>
        </div>
      </div>

      <button className={css.logBtn} type="button" onClick={handleLogout}>
        Log Out
        <FiLogIn className={css.icon} />
      </button>
    </div>
  );
};
