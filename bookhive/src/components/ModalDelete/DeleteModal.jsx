import Modal from "react-modal";
import closeIcon from "../../assets/icons/close-24px.svg";
import "./DeleteModal.scss";

const ModalDelete = ({
  modalIsOpen,
  closeModal,
  itemName,
  itemType,
  handleDelete,
}) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      className="modal__container"
      contentLabel={`Delete ${itemType} Confirmation`}
    >
      <div className="modal__container-close-button">
        <div onClick={closeModal} className="modal__close-button">
          <img src={closeIcon} alt="Close Icon" />
        </div>
      </div>
      <div className="modal__container-text">
        <h1 className="modal__title">{`Delete ${itemName} ${itemType}?`}</h1>
        <p className="modal__text">
          {`Are you sure you want to delete this ${itemType}? This action cannot be undone.`}
        </p>
      </div>
      <div className="modal__container-button">
        <button className="modal__cancel-button" onClick={closeModal}>
          Cancel
        </button>
        <button className="modal__delete-button" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </Modal>
  );
};

export default ModalDelete;
