import { createContext, useEffect, useState } from "react";
import SessionButton from "./ProfileButton";
import Modal from "./Modal";

import "./ModalContainer.scss";

export const CloseModalFunction = createContext();

const ModalContainer = ({
  modalAreaStyling,
  ModalWelcomeHeader,
  ModalTabs,
  listingId,
  handleClickItem,
  children,
}) => {
  let [popup, setPopup] = useState({ isShown: false });

  useEffect(() => {
    if (listingId) {
      setPopup({ isShown: true });
    }
  }, [listingId]);

  useEffect(() => {
    if (popup.isShown) {
      document.querySelector("html").classList.toggle("scroll-lock");
    }

    return () => {
      document.querySelector("html").classList.remove("scroll-lock");
    };
  }, [popup]);

  const showModal = () => {
    setPopup({ isShown: true });
  };

  const closeModal = () => {
    setPopup({ isShown: false });
    if (handleClickItem) {
      handleClickItem();
      window.history.pushState({}, "", "/listings");
    }
  };

  // On click outside of modal, close modal if user clicks
  // outside of modal. If user clicks inside modal, do nothing.
  // Modal box is located in another div with class name "modal-cover"
  // when user clicks modal container, we close modal.
  const onClickOutside = (event) => {
    if (event.target.className === "modal-container") {
      closeModal();
    }
  };

  return (
    <>
      {listingId ? (
        popup.isShown ? (
          <Modal
            closeModal={showModal}
            onClickOutside={onClickOutside}
            modalAreaStyling={modalAreaStyling}
          >
            <CloseModalFunction.Provider value={closeModal}>
              {children}
            </CloseModalFunction.Provider>
          </Modal>
        ) : null
      ) : (
        <div>
          <SessionButton showModal={showModal} triggerText={"Sign in"} />
          {popup.isShown ? (
            <Modal
              closeModal={closeModal}
              onClickOutside={onClickOutside}
              modalAreaStyling={modalAreaStyling}
            >
              <ModalWelcomeHeader />
              <ModalTabs closeModal={closeModal} />
            </Modal>
          ) : null}
        </div>
      )}
    </>
  );
};

export default ModalContainer;
