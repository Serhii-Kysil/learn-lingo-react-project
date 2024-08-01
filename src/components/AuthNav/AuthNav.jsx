import css from "./AuthNav.module.css";

import { FiLogIn } from "react-icons/fi";

import { SimpleModal } from "../SimpleModal/SimpleModal";
import { useState } from "react";

export const AuthNav = () => {
  const [modalLogInIsOpen, setModalLogInOpen] = useState(false);
  const [modalRegIsOpen, setModalRegOpen] = useState(false);

  return (
    <div className={css.wrapper}>
      <button className={css.logBtn} onClick={() => setModalLogInOpen(true)}>
        <FiLogIn className={css.icon} />
        Log in
      </button>
      <button className={css.regBtn} onClick={() => setModalRegOpen(true)}>
        Registration
      </button>

      {/* LogIn Modal */}
      <SimpleModal
        isOpen={modalLogInIsOpen}
        onClose={() => setModalLogInOpen(false)}
      >
        <div className={css.modalCont}>
          <div className={css.textBlock}>
            <h2 className={css.modalTitle}>Log In</h2>
            <p className={css.modalDesc}>
              Welcome back! Please enter your credentials to access your account
              and continue your search for an teacher.
            </p>
          </div>
          <div>Form</div>
          <button className={css.submitBtn}>Log In</button>
        </div>
      </SimpleModal>

      {/* Register Modal */}

      <SimpleModal
        isOpen={modalRegIsOpen}
        onClose={() => setModalRegOpen(false)}
      >
        <div className={css.modalCont}>
          <div className={css.textBlock}>
            <h2 className={css.modalTitle}>Registration</h2>
            <p className={css.modalDesc}>
              Thank you for your interest in our platform! In order to register,
              we need some information. Please provide us with the following
              information
            </p>
          </div>
          <div>Form</div>
          <button className={css.submitBtn}>Sign Up</button>
        </div>
      </SimpleModal>
    </div>
  );
};
