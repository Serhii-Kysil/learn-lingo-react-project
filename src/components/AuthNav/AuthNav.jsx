import css from "./AuthNav.module.css";

import { FiLogIn } from "react-icons/fi";

import { SimpleModal } from "../SimpleModal/SimpleModal";
import { useState } from "react";

export const AuthNav = () => {
  const [modalLogInIsOpen, setModalLogInOpen] = useState(false);
  return (
    <div className={css.wrapper}>
      <button className={css.logBtn} onClick={() => setModalLogInOpen(true)}>
        <FiLogIn className={css.icon} />
        Log in
      </button>
      <button className={css.regBtn}>Registration</button>

      <SimpleModal
        isOpen={modalLogInIsOpen}
        onClose={() => setModalLogInOpen(false)}
      >
        <h2>Log In</h2>
        <p>
          Welcome back! Please enter your credentials to access your account and
          continue your search for an teacher.
        </p>
        <div>Form</div>
      </SimpleModal>
    </div>
  );
};
