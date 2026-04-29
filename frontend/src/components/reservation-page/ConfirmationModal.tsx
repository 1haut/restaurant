import { useEffect, useRef, useState } from "react";
import { type BookingDetails } from "../../types/types";
import { dateFormatOptions } from "../../utils/constants";
import ClickableButton from "../common/ClickableButton";

interface ConfirmationModalProps {
  stateModal: boolean;
  bookingDetails: BookingDetails;
  toggleModal: (toggle: boolean) => void;
}

export default function ConfirmationModal({
  stateModal,
  bookingDetails,
  toggleModal,
}: ConfirmationModalProps) {
  const initialState: { date: string; table: string; time: number[] } = {
    date: "",
    table: "",
    time: [],
  };

  const [jsonData, setJsonData] = useState(initialState);
  const modalRef = useRef<HTMLButtonElement>(null);
  const tempServerAddress = "http://localhost:5151"

  function handleConfirm() {
    const formattedTime = Number(bookingDetails.time.split(":")[0]);

    const jsonPost = {
      date: bookingDetails.date
        .toLocaleDateString("en-GB")
        .replaceAll("/", "-"),
      time:
        bookingDetails.duration === 60
          ? [formattedTime]
          : [formattedTime, formattedTime + 1],
      table: bookingDetails.table,
    };

    setJsonData(jsonPost);
    toggleModal(false);
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

  const fetchUrl = "/save-booking";
  const fetchOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(jsonData),
  };

  useEffect(() => {
    if (modalRef.current && stateModal) {
      modalRef.current.focus();
    }
  }, [stateModal]);

  useEffect(() => {
    // No API call on inital render
    if (jsonData.date === initialState.date) {
      return;
    }

    fetch(tempServerAddress + fetchUrl, fetchOptions)
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error(error));
  }, [jsonData]);

  useEffect(() => {

  })

  return (
    <>
      <div
        className="modal-container"
        style={{ display: stateModal ? "flex" : "none", transition: "display 0.3s ease"}}
      >
        <div className="modal" id="confirmation-modal">
          <div className="modal-header">
            <button
              type="button"
              className="btn-close"
              onClick={() => toggleModal(false)}
              onKeyDown={handleKeyDown}
              ref={modalRef}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#e3e3e3"
              >
                <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
              </svg>
            </button>
          </div>
          <div className="modal-body">
            <p className="modal-info">
              Du har bestilt bord for {bookingDetails.people} person
              {bookingDetails.people > 1 ? "er" : ""},{" "}
              {bookingDetails.date.toLocaleDateString(
                "no-NO",
                dateFormatOptions,
              )}{" "}
              fra kl. {bookingDetails.time.split(":")[0]} til kl.{" "}
              {Number(bookingDetails.time.split(":")[0]) +
                bookingDetails.duration / 60}
              .
            </p>
            <p className="modal-question">
              Er du sikker på at du har lyst til å bestille bord?
            </p>
          </div>
          <div className="modal-footer">
            <ClickableButton
              type="button"
              className="modal-button close"
              ariaLabel="Avbryt bordbestilling"
              onClick={() => toggleModal(false)}
            >
              Avbryt
            </ClickableButton>
            <ClickableButton
              type="submit"
              className="modal-button submit"
              ariaLabel="Bekreftelse av bordbestilling"
              onClick={handleConfirm}
            >
              OK!
            </ClickableButton>
          </div>
        </div>
      </div>
    </>
  );
}
