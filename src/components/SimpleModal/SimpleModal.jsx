import css from "./SimpleModal.module.css";

import { IoMdClose } from "react-icons/io";

export const SimpleModal = ({ isOpen, onClose, children }) => {
  const onWrapperClick = (event) => {
    if (event.target.classList.contains("modal-wrapper")) onClose();
  };

  return (
    <>
      {isOpen && (
        <div className={css.modal}>
          <div
            className={`${css.modalWrapper} modal-wrapper`}
            onClick={onWrapperClick}
          >
            <div className={css.modalContent}>
              <button className={css.closeBtn} onClick={() => onClose()}>
                <IoMdClose className={css.icon} />
              </button>
              {children}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
