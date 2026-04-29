import { useState } from "react";
import Redirect from "../components/contact-page/Redirect";
import Form from "../components/contact-page/ContactForm";
import Navbar from "../components/header/Navbar";
import Footer from "../components/footer/Footer";

export default function Combo() {
  const [isSent, setSend] = useState(false);

  function toggleSend() {
    setSend(!isSent);
  }

  return (
    <>
      <Navbar />
      <hr />
      <main>
        {isSent ? (
          <Redirect isSent={isSent} />
        ) : (
          <Form toggleSend={toggleSend} />
        )}
      </main>
      <hr />
      <Footer />
    </>
  );
}
