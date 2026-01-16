import { useState, type ChangeEvent, type FormEvent } from "react";
import Input from "./Input";
import MessageField from "./MessageField";
import PhoneField from "./PhoneField";

function ContactForm() {
  const [formInformation, setFormInformation] = useState({
    name: "",
    email: "",
    countryCode: "+47",
    phoneNumber: "",
    textContent: "",
  });

  const error = {
    name: formInformation.name.length != 0 ? null : "Navn kan ikke være tomt.",
    email:
      formInformation.email.includes("@") && formInformation.email.includes(".")
        ? null
        : "Vennligst bruk en gyldig epostaddresse.",
    content: formInformation.textContent.length != 0 ? null : "Melding kan ikke være tomt.",
  };

  const isValid: boolean = !error.name && !error.email && !error.content;

  function handleChange(
    event: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    const { name, value } = event.target;

    // console.log(`Name: ${name}, Value:${value}`);
    const change = {
      [name]: value,
    };

    setFormInformation(prev => {
      let updatedInfo = { ...prev, ...change };
      return updatedInfo;
    });
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event?.preventDefault();
    logInputs()
    resetFields();
  }

  function resetFields() {
    setFormInformation({
      name: "",
      email: "",
      countryCode: "+47",
      phoneNumber: "",
      textContent: "",
    });
  }

  function logInputs() {
    console.log(
      JSON.stringify(
        formInformation,
        null,
        " "
      )
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input
        type="text"
        name="name"
        label="Navn"
        value={formInformation.name}
        onChange={handleChange}
      />
      <Input
        type="email"
        name="email"
        label="Epost"
        value={formInformation.email}
        onChange={handleChange}
      />
      <PhoneField
        labelContent="Telefonnummer"
        name="countryCode"
        inputBoxName="phoneNumber"
        countryCode={formInformation.countryCode}
        phoneNumber={formInformation.phoneNumber}
        onChange={handleChange}
      />
      <MessageField
        name="textContent"
        labelName="Melding"
        value={formInformation.textContent}
        onChange={handleChange}
      />

      <button disabled={!isValid}>Send!</button>
    </form>
  );
}

export default ContactForm;
