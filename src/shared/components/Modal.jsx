
import "./css/modal.css";

const Modal = ({ show, onClose, children }) => {
  const modalTransition = show ? "modal active" : "modal";
  if (!show) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className={modalTransition}>
        <button className="modal-close" onClick={onClose}>
          X
        </button>

        <div className="modal-content">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
