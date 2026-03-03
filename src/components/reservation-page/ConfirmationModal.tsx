interface ConfirmationModalProps {
  stateModal: boolean;
  toggleModal: (toggle: boolean) => void;
}

export default function ConfirmationModal({
  stateModal,
  toggleModal,
}: ConfirmationModalProps) {
  function handleConfirm() {
    alert("ORDER COMPLETE!");
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLButtonElement>) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      if ((event.target as HTMLButtonElement).type === "submit") {
        handleConfirm();
      }
      toggleModal(false);
    }
  }

  return (
    <>
      <div
        className="modal-container"
        style={{ display: stateModal ? "flex" : "none" }}
      >
        <div className="modal">
          <div className="modal-header">
            <button
              type="button"
              className="btn-close"
              onClick={() => toggleModal(false)}
              onKeyDown={handleKeyDown}
            >
              X
            </button>
          </div>
          <div className="modal-body">
            Er du sikker på at du har lyst til å bestille?
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="modal-button close"
              onClick={() => toggleModal(false)}
              onKeyDown={handleKeyDown}
            >
              Avbryt
            </button>
            <button
              type="submit"
              className="modal-button submit"
              onClick={handleConfirm}
              onKeyDown={handleKeyDown}
            >
              OK!
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
