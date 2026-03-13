import { useState, type ChangeEvent, type FormEvent } from "react";
import { useNavigate } from "react-router";
import Input from "./Input";
import MessageField from "./MessageField";
import PhoneField from "./PhoneField";
import "./ContactForm.css";

export default function ContactForm() {
  const initialState = {
    id: "",
    name: "",
    email: "",
    countryCode: "+47",
    phoneNumber: "",
    category: "",
    textContent: "",
  };


  const navigate = useNavigate();
  const [isSent, setSent] = useState(false);
  const [formInformation, setFormInformation] = useState(initialState);
  
  // Error validation
  const error = {
    name: formInformation.name.length != 0 ? null : "Navn kan ikke være tomt.",
    email:
      formInformation.email.includes("@") && formInformation.email.includes(".")
        ? null
        : "Vennligst bruk en gyldig epostadresse.",
    content:
      formInformation.textContent.length != 0
        ? null
        : "Melding kan ikke være tomt.",
  };
  const isValid: boolean = !error.name && !error.email && !error.content;

  function handleChange(
    event: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) {
    const { name, value } = event.target;

    const changedInfo = {
      [name]: value,
    };

    setFormInformation(prev => {
      let updatedInfo = { ...prev, id: crypto.randomUUID(), ...changedInfo };
      return updatedInfo;
    });
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event?.preventDefault();
    logInputs();
    resetFields();
    setSent(!isSent);
    setTimeout(() => {
      navigate("/");
    }, 1000);
  }

  function resetFields() {
    setFormInformation(initialState);
  }

  function logInputs() {
    console.log(JSON.stringify(formInformation, null, " "));
  }

  return (
    <>
      {isSent ? (
        <h1 style={{ display: "block", margin: "auto" }}>
          Sendt! Omdirigerer til forsiden...
        </h1>
      ) : (
        <form className="contact-form" onSubmit={handleSubmit}>
          <Input
            type="text"
            name="name"
            label="Navn*"
            value={formInformation.name}
            onChange={handleChange}
            autoComplete="name"
            hasError={Boolean(error.name)}
            errorMessage={error.name}
          />
          <Input
            type="email"
            name="email"
            label="Epost*"
            value={formInformation.email}
            onChange={handleChange}
            autoComplete="email"
            hasError={Boolean(error.email)}
            errorMessage={error.email}
          />
          <PhoneField
            labelContent="Telefonnummer"
            name="countryCode"
            inputBoxName="phoneNumber"
            countryCode={formInformation.countryCode}
            phoneNumber={formInformation.phoneNumber}
            onChange={handleChange}
            autoComplete="tel"
          />
          <div className="input-field category-field">
            <label htmlFor="select-category">Emne</label>
            <select
              name="category"
              id="select-category"
              value={formInformation.category}
              onChange={handleChange}
              autoComplete="off"
            >
              <option value="">---Velg emne:---</option>
              <option value="request">Forespørsel</option>
              <option value="contact">Kontakt</option>
              <option value="catering">Catering</option>
            </select>
          </div>
          <MessageField
            name="textContent"
            labelName="Melding*"
            value={formInformation.textContent}
            onChange={handleChange}
            hasError={Boolean(error.content)}
            errorMessage={error.content}
          />
          <button disabled={!isValid}>Send!</button>
        </form>
      )}
    </>
  );
}
