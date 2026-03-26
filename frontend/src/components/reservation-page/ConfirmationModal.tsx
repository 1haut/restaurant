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

    fetch(fetchUrl, fetchOptions)
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error(error));
  }, [jsonData]);

  return (
    <>
      <div
        className="modal-container"
        style={{ display: stateModal ? "flex" : "none" }}
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
              X
            </button>
          </div>
          <div>
            Du har bestilt bord for {bookingDetails.people} personer, den.{" "}
            {bookingDetails.date.toLocaleDateString("no-NO", dateFormatOptions)}{" "}
            fra kl. {bookingDetails.time} til{" "}
            {Number(bookingDetails.time.split(":")[0]) +
              bookingDetails.duration / 60}
          </div>
          <div className="modal-body">
            Er du sikker på at du har lyst til å bestille?
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
