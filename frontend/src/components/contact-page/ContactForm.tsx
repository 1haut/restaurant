import { useState, type ChangeEvent, type FormEvent } from "react";
import Input from "./Input";
import MessageField from "./MessageField";
import PhoneField from "./PhoneField";
import "./ContactForm.css";
import CategorySelect from "./CategorySelect";
import SocialMediaReminder from "./SocialMediaReminder";

interface ContactFormProps {
  toggleSend: () => void;
}

export default function ContactForm({ toggleSend }: ContactFormProps) {
  const initialState = {
    id: "",
    name: "",
    email: "",
    countryCode: "+47",
    phoneNumber: "",
    category: "",
    textContent: "",
  };

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
    toggleSend();
  }

  function resetFields() {
    setFormInformation(initialState);
  }

  function logInputs() {
    console.log(JSON.stringify(formInformation, null, " "));
  }

  return (
    <>
      <h1 className="h1-contact">Ta kontakt</h1>
      <SocialMediaReminder />
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
        <CategorySelect
          onChange={handleChange}
          categoryValue={formInformation.category}
        />
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
    </>
  );
}
