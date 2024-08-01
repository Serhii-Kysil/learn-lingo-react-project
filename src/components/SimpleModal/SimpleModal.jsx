import css from "./SimpleModal.module.css";

import { IoMdClose } from "react-icons/io";

export const SimpleModal = () => {
  return (
    <>
      <div className={css.modal}>
        <div className={css.modalWrapper}>
          <div className={css.modalContent}>
            <button className={css.closeBtn}>
              <IoMdClose />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
