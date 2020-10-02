import React from "react";
import PropTypes from "prop-types";
import './EditTodoModal.css'
import Portal from "./Portal";

const EditTodoModal = ({title, isOpen, text, date, onCancel, onSubmit, children}) => {
  let value = !!date && date.split(".");
  let d = parseInt(value[0], 10),
      m = parseInt(value[1], 10),
      y = parseInt(value[2], 10);
  let dayValid = d > 0 && d < 32;
  let monthValid = m > 0 && m < 13;
  let yearValid = y > 1970 && y < 2170;

  let dateValid = dayValid && monthValid && yearValid;
  let textValid = !!text && text.length > 0;

  return (
    <>
      {
        isOpen &&
        <Portal>
          <div className="edit-modal">
            <div className="edit-modal__body">
              <div className="edit-modal__header">
                <div className="edit-modal__header__title">{title}</div>
                <div
                  className="edit-modal__header__close"
                  onClick={onCancel}
                >
                  <b>&times;</b>
                </div>
              </div>
              <div className="edit-modal__content">
                {children}
              </div>
              <div className="edit-modal__footer">
                <button
                  onClick={onCancel}
                  className="edit-modal__footer__btn"
                >
                  Cancel
                </button>
                <button
                  onClick={onSubmit}
                  className="edit-modal__footer__btn"
                  disabled={!dateValid && !textValid}
                >
                  Ok
                </button>
              </div>
            </div>
          </div>
        </Portal>
      }
    </>
  )
};

EditTodoModal.propTypes = {
  title: PropTypes.string,
  isOpen: PropTypes.bool,
  onCancel: PropTypes.func,
  onSubmit: PropTypes.func,
  children: PropTypes.node
};

EditTodoModal.defaultProps = {
  title: "Modal title",
  isOpen: false,
  onCancel: () => {
  },
  onSubmit: () => {
  },
  children: null
};

export default EditTodoModal;
