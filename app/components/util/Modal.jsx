function Modal({ children, onClose }) {
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <dialog
        className="modal"
        open
        onClick={(event) => event.stopPropagation()}
      >
        {children}
      </dialog>
    </div>
  );
}

// default value for onClose so it needs to be removed when it's completely done.
Modal.defaultProps = {
  onClose: () => {},
};

export default Modal;
